import React from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo}  className="loginlogo" alt="" />
      <div className="loginForm">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>

<button>Sign Up</button>
<div className="formHelp">
  <div className="remember">
    <input type="checkbox" />
    <label htmlFor="">Remember  Me</label>
  </div>
  <p>Need Help?</p>
</div>
        
        </form>
      </div>
    </div>
  )
}

export default Login
