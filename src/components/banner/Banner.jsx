import React, { useEffect, useState } from 'react'
import './banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=> {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[3])

    })
  },[])
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie ?imageUrl+ movie.backdrop_path : ''})`}}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title||movie.name:""}</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{movie ? movie.overview:""}</h1>
      </div>
      <div className="faded_bottom"></div>
      
    </div>
  )
}

export default Banner
