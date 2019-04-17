import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import CardContainer from "../src/Component/CardContainer/CardContainer";
import Cart from "../src/Component/Cart/Cart";
import "./styles.css";
const contact = () => {
  return (
    <div>
      <div className="Header">
        <ul>
          <li>
            <NavLink to="/">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Saved</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={CardContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
};

export default contact;
