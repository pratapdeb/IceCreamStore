import React from "react";

const imgArr = [];
const imgNums = [2170586, 762960];

for (let i = 0; i < 10; i++) {
  i++;
  let img = "https://source.unsplash.com/collection/";
  imgArr.push(img + imgNums[i]);
}
const image = props => {
  return <img src={ftnImg()} alt="img" />;
};

function ftnImg() {
  return imgArr[Math.floor(Math.random() * 3)];
}
export default image;
