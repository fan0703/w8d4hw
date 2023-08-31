import { Link } from "react-router-dom";
import React from "react";

export default function Nav(props) {
  return (
    <div className="Nav">
      <Link to="/">
        <div>iStock</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
