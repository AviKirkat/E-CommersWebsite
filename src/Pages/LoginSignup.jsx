import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
           <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type='text' placeholder='Your Name'></input>
                <input type='email' placeholder='Email Address'></input>
                 <input type='password' placeholder='Password'></input> 
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already Have an Account?<span>Login here</span></p>
            <div className="loginsign-agree">
                <input type='checkbox' name="" id=""></input>
                <p>By Continuing, I Agree To The Terms of use & Privacy Policy.</p>
            </div>
            </div> 
        </div>
    )
}

export default LoginSignup
