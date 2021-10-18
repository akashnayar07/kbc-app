import React, { useState } from "react";
 export const moneylist = [
   { id: 1, Amout: 1000 },
   { id: 2, Amout: 2000 },
   { id: 3, Amout: 5000 },
   { id: 4, Amout: 10000 },
   { id: 5, Amout: 20000 },
   { id: 6, Amout: 50000 },
   { id: 7, Amout: 100000 },
   { id: 8, Amout: 200000 },
   { id: 9, Amout: 500000 },
   { id: 10, Amout: 100000 },
   { id: 11, Amout: 200000 },
   { id: 12, Amout: 500000 },
   { id: 13, Amout: 100000 },
   { id: 14, Amout: 200000 },
   { id: 15, Amout: 500000 },
 ].reverse();
const PrizeMoneyList = (props) => {
 


  return (
    <>
      <ul className="prizeMoneyList">
        {moneylist.map((item) => {
          return (
            <li className={props.questionNumber === item.id ? "active" : ""} key={item.id}>
              <span className="prizeMoneyListQuestion">{item.id}</span>
              <span className="prizeMoneyListAmount">&#8377; {item.Amout}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PrizeMoneyList;
