import React, { useState, useEffect } from "react";
import { moneylist } from "./PrizeMoneyList";
import SingleQueation from './SingleQueation';
import Timer from "./Timer";

const Questions = (props) => {

    const [stop, setStop] = useState(false);
    const [earned, setearned] = useState(0);
    console.log(moneylist);
    console.log(moneylist[2].Amout);
    const data = [
      {
        id: 1,
        question:
          "Rolex is a company that specializes in what type of product?",
        answers: [
          {
            text: "Phone",
            correct: false,
          },
          {
            text: "Watches",
            correct: true,
          },
          {
            text: "Food",
            correct: false,
          },
          {
            text: "Cosmetic",
            correct: false,
          },
        ],
      },
      {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Who played the character of harry potter in movie?",
        answers: [
          {
            text: "Johnny Deep",
            correct: false,
          },
          {
            text: "Leonardo Di Caprio",
            correct: false,
          },
          {
            text: "Denzel Washington",
            correct: false,
          },
          {
            text: "Daniel Red Cliff",
            correct: true,
          },
        ],
      },
    ];
 


    useEffect(() => {
      props.questionNumber > 1 &&
        setearned(
          moneylist.find((m) => m.id === props.questionNumber - 1).Amout
        );
    }, [props.questionNumber]);
    return (
      <div className="questionBox">
        <div className="container questionBoxInner">
          {stop ? (<h1 className="earnmoneytext">You Earned : {earned} Rs </h1>) : (
            <>
              <div className="timer">
   
                <Timer
                  setStop={setStop}
                  questionNumber={props.questionNumber}
                />
              </div>
              <SingleQueation
                data={data}
                setStop={setStop}
                questionNumber={props.questionNumber}
                setquestionNumber={props.setquestionNumber}
              />
            </>
          )}
        </div>
      </div>
    );
}

export default Questions
