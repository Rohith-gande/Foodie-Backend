import React,{useState} from 'react'
import {API_URL} from '../data/ApiPath'
const Login = ({showWelcomeHandler}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const loginHandler=async(e)=>{
     e.preventDefault()
     try{
        const response=await fetch (`${API_URL}/vendor/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data=await response.json()
        if(response.ok){
            setEmail('')
            setPassword('')
            alert('Login successful')
            localStorage.setItem('token',data.token)
            showWelcomeHandler()
        }
        else{
            console.error("Login failed",data)
            alert('Login failed')
        }

     }catch(error){
        console.error("Login error",error)
        alert('Login failed')
     }


   }
  return (
    <div className="loginSection">
        <form className='authForm' onSubmit={loginHandler}>
            <h3>Vendor Login</h3>
            <label>
                Email
            </label>
            <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" required/><br />
            <label>
                Password
            </label>
            <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter your password" required/>
            <div className="btnSubmit">
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
