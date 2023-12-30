import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav () {
  const [show,setShow] =useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div  className={`${show && 'nav-black'} nav`}>
        <img style={{width:'150px'}} src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="no-image" />
    </div>
  )
}
