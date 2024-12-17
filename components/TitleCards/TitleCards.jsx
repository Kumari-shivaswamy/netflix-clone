import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cardsdata from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
  const[apiData,setapiData]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDBlMTliNjU1MDliNmU0NjliMTllMGJhZWVjOGI1MyIsIm5iZiI6MTczMTQyMDA5Mi42NDIsInN1YiI6IjY3MzM1ZmJjNGI1ZmQ1NWExNmNhMzBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5c8kHvJ0MuqdrGxBsxbjGaXk2-cCX-kW-78gIswSMs'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));
  })
  

  return (
    
    <div className='titlecards'>
      <h2>{title?title:"Populor on Netflix"}</h2>
      <div className="card-list">
         {apiData.map((card,index)=>{
       return <Link to={`/player/${card.id}`} className="card" key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
      </Link>
         })}
      </div>
    </div>
  )
}

export default TitleCards

