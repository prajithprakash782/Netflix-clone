import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

export default function Banner({ fetchURL }) {
    const [movie, setMovie] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchURL);

    const fetchData = async () => {
        const { data } = await instance.get(fetchURL)
        // console.log(data.results);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }
    console.log(movie);

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div style={{height:'600px', backgroundImage:`url(${base_url}${movie?.backdrop_path})`, backgroundSize:'cover',backgroundAttachment:'fixed'}}>
           <div className="banner-content">
                <h1>{movie?.title}</h1>
                <button className='btn btn-danger me-3'>Play <i class="fa-solid fa-play"></i></button>
                <button className='btn btn-outline-light'>More Info <i class="fa-solid fa-caret-down"></i></button>
                <h2>{movie?.overview?.slice(0,200)}...</h2>
           </div>
        </div>
    )
}
