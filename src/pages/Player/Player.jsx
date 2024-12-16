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
      
    </div>
  )
}

export default Player

