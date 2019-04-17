import React, { Component } from "react";
import "./Cart.css";

//var p = [1, 2, 3];
//let s='fpoajglkhsa';
class cart extends Component {
  state = { save: [], like: [] };
  fetchUsers() {
    fetch(`https://pratapgrobal.firebaseio.com/data.json`)
      .then(response => response.json())
      .then(data => {
        //console.log("DATA : " + data);
        let save = [],
          like = [];
        for (let id in data) {
          if (data[id]["savedId"]) save.push(data[id]["savedId"]);
          else like.push(data[id]["likedId"]);
        }
        console.log("save" + save);
        console.log("like" + like);
        let s = save.filter((v, i, a) => a.indexOf(v) === i);
        let l = like.filter((v, i, a) => a.indexOf(v) === i);
        this.setState({ save: s, like: l });
      })
      .catch(error => console.log("Error"));
  }

  componentWillMount() {
    this.fetchUsers();
  }
  render() {
    return (
      <div className="Cart">
        <div>
          <h2>Saved : </h2>
          {this.state.save.map(p => {
            return <h3 key={Math.random()}>{p}</h3>;
          })}
        </div>

        <div>
          <h2>Liked : </h2>
          {this.state.like.map(p => {
            return <h3 key={Math.random()}>{p}</h3>;
          })}
        </div>
      </div>
    );
  }
}
export default cart;
