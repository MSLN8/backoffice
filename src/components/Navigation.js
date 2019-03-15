import React from "react";
import "../style/App.css";
import "../style/Doctor-list.css";

const Navigation = () => {
  var Logo = require("../style/img/magnifier.svg");
  var searchIcon = require("../style/img/Leah_logo_green.png");
  return (
    <div>
      <header>
        <img id="searchIcon" src={Logo} alt="search" width="7%" height="auto" />

        <div id="Logo">
          <img
            className="logo"
            src={searchIcon}
            alt="logo"
            width="10%"
            height="auto"
          />
          <h1> Leah </h1>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
