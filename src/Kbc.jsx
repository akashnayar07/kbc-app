import React, {useState} from "react";
import "./kbc.css";
import PrizeMoneyList from "./components/PrizeMoneyList";
import Questions from "./components/Questions";

const Kbc = () => {
    const [questionNumber, setquestionNumber] = useState(1);
  return (
    <div className="">
      <div className="row no-gutters text-white ml-0 mainbox">
        <div className="col-sm-9">
          <div className="main">
            <Questions
              questionNumber={questionNumber}
              setquestionNumber={setquestionNumber}
            />
          </div>
        </div>
        <div className="col-sm-3 d-flex align-items-center justify-content-center">
          <PrizeMoneyList
            questionNumber={questionNumber}
       
          />
        </div>
      </div>
    </div>
  );
};

export default Kbc;
