import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import './rowpost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  const {title,isSmall,url} = props;
  const [ytkey,setYtkey] = useState()
  const opts = {
    height: '390',
    width:'100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  },[url])
  const handleClick = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-Us`).then((response)=>{
      console.log(response)
      if(response.data.results.length !==0){
        setYtkey(response.data.results[0])
      }else{
        console.log('no video available')
      }
      
    })
  }
  return (
    <div className='row'>
      <h2 className="row-title">{title}</h2>
      <div className="posters">
        {movies.map((movie)=>{
          return <img onClick={()=>handleClick(movie.id)} src={`${imageUrl+movie.backdrop_path}`} alt="poster" className={isSmall ? "smallPoster":"row-image"} />
        })}
        
      </div>
      {ytkey && <YouTube videoId={ytkey.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
