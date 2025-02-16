import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const handleGo =()=>{
        navigate("/quiz")
    }
  return (
    <div className='homepage-container'>
      <h1 className='title'>Hi there</h1>
      <p className='description'>Welcome to the Quiz</p>
      <button className='go-button' onClick={handleGo}>Let's go</button>
    </div>
  )
}

export default Home
