import React, { useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'
// import { useState } from 'react'
import "../App.css"

function Login() {
    const {name,setName,pwd,setPwd,profileinfo,setProfileInfo}=useContext(LoginContext)
    // const [name,setName]=useState("")
    // const [pwd,setPwd]=useState("")
    // const [profileinfo,setProfileinfo]=useState(false)
    //const [profileinfo,setProfileInfo]=useState(false)
    //const [error,setError]=useState("")
    const show=()=>{
      if (name==="Abitha" && pwd==="Abi")
          setProfileInfo(true)
      else
          setProfileInfo(false)
        
    }
  return (
    <div id='div'>
    <center>
      <h1>Login Form</h1>
      <label>User Name : </label>
      <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='User Name'></input><br/><br/>
      <label>Password : </label>
      <input type='password' onChange={(e)=>setPwd(e.target.value)} value={pwd} placeholder='Password'></input><br/><br/>
      <input type='button'onClick={()=>show()} value="Login"></input>
      <br/><br/>
      {/* {error && <p style={{color:"red"}}>{error}</p>} */}
      {profileinfo===false && <font color="red">Invalid...!!</font> }
      {/* {(profileinfo && "Valid")|| "Invalid"} */}
    </center>
    </div>
  )
}

export default Login
