import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className="content">
        <h1 className="title">Movie Name</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">sicing elit. Consequuntur maiores laudantium voluptatibus 
            odio deleniti voluptatem omnis illo excepturi alias sint dicta reprehenderit officiis,
             sit magnam ullam quae corporis harum iure?</h1>
      </div>
      <div className="faded_bottom"></div>
      
    </div>
  )
}

export default Banner
