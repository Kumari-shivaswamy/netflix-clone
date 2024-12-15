import React from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'

const Login = () => {
  const[signState, setsignState]=useState("Sign In");
  return (
    <div className='login'>
      <img src={logo}  className="loginlogo" alt="" />
      <div className="loginForm">
        <h1>{signState}</h1>
        <form>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>

<button>{signState}</button>
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

