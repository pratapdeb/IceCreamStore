import React from "react";
import "./Button.css";

let btn;
const button = props => {
  return (
    <div
      className={props.btnType}
      style={{
        width: "40px",
        height: "20px",
        marginRight: "7px",
        float: "left"
      }}
    >
      <a href="#" onClick={props.storeData}>
        {props.btnType}
      </a>
    </div>
  );
};

export default button;
