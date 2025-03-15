import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyForm, userdata } from '../pages/signup';
import '../styles/home.css'
function Home() {
  const navigate = useNavigate()
  navigate("/signup")
  console.log(userdata)
  return (
    <div className="welcome">
      Welcome {userdata[0]||"To home Page"}
    </div>
  )
}

export default Home
