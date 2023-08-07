import React from "react";
import { Doly } from "../../Assets/export";

import { Skills, Portfolio } from "../export.js";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="app__header">
        <div className="app__header-left">
          <h1 className="app__header-left-h1">Hello!</h1>
          <h1 className="app__header-left-h1">
            I'm <span className="h1-blue">Dolapo Ayeni</span>{" "}
          </h1>

          <h1 className="app__header-left-h1">
            your next Digital Media <span className="h1-blue">Manager</span>{" "}
          </h1>
        </div>
        <div className="app__header-right">
          <img src={Doly} alt="dolapo" />
        </div>
      </div>

      <Skills />
      <Portfolio />
    </div>
  );
};

export default Header;
