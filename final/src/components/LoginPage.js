import React from 'react'

export default function LoginPage() {
  return (
    <div className="container">
    <form action="" id="form">
                <h1>Register</h1>
            <div className="input-group">
                <label for="username" >Username</label>
                <input type="text" id="username" name="username" />
            <div className="error"></div>
            </div>
            <div className="input-group">
                <label for="email" >EmailId</label>
                <input type="email" id="email" name="email" />
                <div className="error"></div>
            </div>
            <div className="input-group">
                <label for="password" >Password</label>
                <input type="password" id="password" name="password" />
                <div className="error"></div>
            </div> 
                <div className="input-group">
                <label for="cpassword" >Confirm Password</label>
                <input type="password" id="cpassword" name="cpassword" />
                <div className="error"></div>
        </div> 
        <button type="submit">Register</button>
    </form>
  </div>
    );
}
