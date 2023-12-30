import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

export default function Row({ title, fetchURL, isPoster }) {
  // console.log(fetchURL);
  const[allMovies,setMovies]= useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {
    const {data} = await instance.get(fetchURL)
    // console.log(data.results);
    setMovies(data.results)
  }

  console.log(allMovies);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='row'>
      <h1 style={{ color: 'white' }}>{title}</h1>
      <div className="movie_row">
        {
          allMovies?.map(item=>(
            <img className={`movies ${isPoster && 'movie-poster'}`} src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>
    </div>
  )
}
