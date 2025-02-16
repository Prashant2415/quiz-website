import React from 'react'
import "./styles.css"
import { DummyData } from './DummyData'
import { useNavigate } from 'react-router-dom';
const Quiz = () => {
    const data = DummyData;
    const navigate = useNavigate();
    const handleQuiz = (quizData)=>{
        navigate("/test", {state: [quizData]})
    }
  return (
    <div className='quiz-container'>
      <h1 className='heading'>Quiz</h1>
        <div className="card-container">
        {data.map((d,index)=>(
            <div className="quiz-card-container">
                <p className='card-title'>{d.title}</p>
                <button className='start-button' onClick={()=> {handleQuiz(d)}}>Start</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Quiz
