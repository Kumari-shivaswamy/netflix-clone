import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import bellIcon from "../../assets/bell_icon.svg"
import profileicon from "../../assets/profile_img.png"
import careticon from "../../assets/caret_icon.svg"
const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{window.addEventListener('scroll',()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }
      
  return (
    <div className='navbar'> 
      <div className="navbar-left">
        <img src={logo}alt="" />
        <ul>
          <li>Home</li>
          <li>TV show</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My list</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icons'/>
        <p>Children</p>
        <img src={bellIcon} alt="" className='icons'/>
        <div className="navbar-profile">
        <img src={profileicon} alt="" className='profile'/>
        <img src={careticon} alt="" />
        <div className="dropdown">
          Sign Out of Netflix
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
