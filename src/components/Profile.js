import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
const Profile = () => {
    const {name}=useContext(LoginContext)
  return (
    <div>
      <h2>This is the Profile Page</h2>
      <h2>Welcome!! By {name}...❤️</h2>
    </div>
  )
}

export default Profile