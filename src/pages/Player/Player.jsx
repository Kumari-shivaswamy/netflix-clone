import React, { useEffect, useState } from 'react'
import "./Player.css"
import backArrow from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  const [apiData,setapiData]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})
  return (
    <div className='player'>
      <img src={backArrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="playerInfo">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.typeof}</p>
    </div>
  )
}

export default Player

