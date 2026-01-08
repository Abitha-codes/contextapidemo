import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
// import { useState } from 'react'
import "../App.css"

function Login() {
    const {setName,setProfileInfo}=useContext(LoginContext)
    // const [name,setName]=useState("")
    // const [pwd,setPwd]=useState("")
    // const [profileinfo,setProfileinfo]=useState(false)
    // const show=()=>{
    //     if (name==="Abitha" && pwd==="Abi")
    //         setProfileinfo(true)
    //     else
    //         setProfileinfo(false)
    // }
  return (
    <div id='div'>
    <center>
      <h1>Login Form</h1>
      <label>User Name : </label>
      <input type='text' 
      onChange={(e)=>setName(e.target.value)} placeholder='User Name'></input><br/><br/>
      <label>Password : </label>
      <input type='password' 
    //   onChange={(e)=>setPwd(e.target.value)} value={pwd} 
      placeholder='Password'></input><br/><br/>
      <input type='button'onClick={(e)=>setProfileInfo(true)} value="Login"></input>
      <br/><br/>
      {/* {(profileinfo && "Valid")|| "Invalid"} */}
    </center>
    </div>
  )
}

export default Login
