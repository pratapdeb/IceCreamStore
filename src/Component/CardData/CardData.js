import React from "react";

const data = [1, 2, 3, 4, 5, 6];
const cardData = () => {
  const temp = data.map(d => {
    return <h4>{d}</h4>;
  });

  return <div>{temp}</div>;
};
export default cardData;
