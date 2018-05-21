import React from "react";
import "./Headerbar.css";

const Headerbar = () =>(
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game</h1>
          <h4 className="lead">Click on an image to earn points - just don't click any more than once!</h4>
      </div>
    </div>
  </div>
);

export default Headerbar;