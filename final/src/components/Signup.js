import React from 'react'
import './Signup.css'
import Navbar from './Navbar'


export default function Signup() {
  return (
    <>
    
    <Navbar />
    <div className="container">
    <form action="" id="form">
                <h1>LOGIN</h1>
            <div className="input-group">
                <label for="username" >Username</label>
                <input type="text" id="username" name="username" />
            <div className="error"></div>
            </div>
           
            <div className="input-group">
                <label for="password" >Password</label>
                <input type="password" id="password" name="password" />
                <div className="error"></div>
            </div> 
                <div><pre>New User? <a href="./LoginPage">Register Now</a></pre></div>
        <button type="submit">SIGN IN</button>
    </form>
  </div>
</>
    )
}
