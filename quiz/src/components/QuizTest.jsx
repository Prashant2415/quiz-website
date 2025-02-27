import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import "./styles.css"
const QuizTest = () => {
    const location = useLocation();
    const quizValue = location.state;
    const { title } = quizValue[0];

    const values = quizValue[0].questions;
    const [currentItem, setCurrentItem] = useState(0);
    const [answerList, setAnswerList] = useState([]);
    const [resultFlag, setResultFlag] = useState(false);
    const [enable, setEnable] = useState(false);

    const handleQuestions = (optionValue) => {
        console.log(optionValue)
        setAnswerList([...answerList, optionValue])
        setCurrentItem(currentItem + 1);
        if (currentItem === values.length - 1) {
            setEnable(true);
            setCurrentItem(values.length - 1);
        }
        console.log(answerList)
    }
    const [message, setMessage] = useState("")
    const handleResult = () => {
        console.log(answerList)
        var score = 0;
        values.forEach((question, index) => {
            if (answerList[index] === question.correctAnswer) {
                score++;
            }
            setResultFlag(true);
        });
        console.log(Math.round((score*70)/100))
       if(score > Math.round((score*70)/100))
       {
        setMessage("Congratulations");
       }
       else{
        setMessage("Failed");
       }
    }

    const handleQuestionId = (questionDetails)=>{
        console.log(questionDetails)
    }
    return (
        <div className='test-container'>
            <h1 className='heading'>{title}</h1>
            {resultFlag ? (
                <div className="result-container">
                    <h1 className='result message'>{message}</h1>
                    <p className='result-description-text'>{message === "Failed" ? `You need to learn more`: `You have scored 4/4`}</p>
                    <Link className='link-button' to="/">Dashboard</Link>
                </div>
            ) : (
                <>
                    <div className="quiz-list-button">
                        {quizValue[0].questions.map((question, index) => (
                            <button className='list-button' key={index} onClick={()=> {handleQuestionId(question)}}>{question.id}</button>
                        ))}
                    </div>
                    <div className="qna-container">
                        <p className='qna'>Q{currentItem + 1} {values[currentItem].question}</p>
                        <div className="options-container">
                            {values[currentItem].options.map((option, index) => (
                                <button className='option-button' key={index} onClick={() => handleQuestions(option)}>{option}</button>
                            ))}
                        </div>
                    </div>
                    <div className="control-button-container">
                        {enable ? (
                            <button className='submit-button' onClick={handleResult}>Submit</button>
                        ) : (
                            <button className='submit-button-disabled' disabled>Submit</button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default QuizTest
