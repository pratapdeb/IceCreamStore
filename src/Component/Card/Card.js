import React, { Component } from "react";
import "./Card.css";
import Button from "../../UI/Button/Button";
import Image from "../Image/Image";
import CardData from "../CardData/CardData";
/*
const cardNo=[1,2,3,4,5];



const listItem=cardNo.map((nums)=>{
  return(

  <li>{nums}</li>
);
}
);
  console.log(listItem);
<h1>{this.props.num}</h1>

 */
class Card extends Component {
  state = { data: 1 };

  saveClickhandler = num => {
    console.log("savedId :" + num);
    let d = { savedId: num };
    fetch("https://pratapgrobal.firebaseio.com/data.json", {
      method: "post",
      body: JSON.stringify(d)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {});
  };
  likeClickhandler = num => {
    //console.log(" like working");
    let l = { likedId: num };
    console.log("likedId :" + num);
    fetch("https://pratapgrobal.firebaseio.com/data.json", {
      method: "post",
      body: JSON.stringify(l)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {});
  };
  render() {
    return (
      <div className="divCon">
        <div className="innerDiv">
          <h4>{this.props.num}</h4>
          <div>
            <div className="btnCon">
              <Button
                storeData={() => this.saveClickhandler(this.props.num)}
                btnType="Save"
              />
              <Button
                storeData={() => this.likeClickhandler(this.props.num)}
                btnType="Like"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
