import React from "react";
import Card from "../../Component/Card/Card";
import "./CardContainer.css";
const cardNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const cardContainer = function(props) {
  return (
    <div className="divCon">
      {cardNo.map(nums => {
        return <Card key={Math.random()} num={nums} />;
      })}
    </div>
  );
};

export default cardContainer;
