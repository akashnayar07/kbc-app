import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "./../assets/play.mp3";
import correct from "./../assets/correct.mp3";
import wrong from "./../assets/wrong.mp3";

const SingleQueation = ({
  data,
  setStop,
  questionNumber,
  setquestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setClassName] = useState("answerbox");
  const [letsplay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);


  useEffect(() => {
    letsplay();
  }, [letsplay]);
  useEffect(() => {

    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  // console.log(question, "SingleQuestion");
  // console.log(question, "SingleQuestion");

  //this delay function is used to answer button animation and 3 seconds
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswerClick = (item) => {
    setselectedAnswer(item);
    setClassName("answerbox active");

    //   setTimeout(() => {
    //   setClassName(item.correct ? "answerbox correct" : "answerbox wrong");
    // }, 3000);
    // for button animation 3 second
    delay(3000, () => {
      setClassName(item.correct ? "answerbox correct" : "answerbox wrong");
    });
    delay(5000, () => {
      if (item.correct) {
         correctAnswer();
           delay(1000, () => {
              setquestionNumber((prev) => prev + 1);
              setselectedAnswer(null);
           })
       
      } else {
          wrongAnswer();
          delay(1000, () => {
                setStop(true);
          });
    
    
      }
    });
  };
  return (
    <>
      <h2 className="questiontitle">{question?.question}</h2>
      <div className="row mt-5">
        {question?.answers.map((item, index) => {
          return (
            <div className="col-sm-6" key={index}>
              <h4
                className={selectedAnswer === item ? className : "answerbox"}
                onClick={() => handleAnswerClick(item)}
              >
                {item.text}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleQueation;
