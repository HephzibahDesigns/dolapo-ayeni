import React, { useState } from "react";
import "./nav.css";
import { Logo } from "../../Assets/export";
import { Link } from "react-router-dom";
import { Header, Skills } from "../export";

const Nav = () => {
  const [active, setActive] = useState("/");

  return (
    <div className="app__nav ">
      <div className="app__nav-con ">
        <div className="app__nav-logo">
          <img src={Logo} alt="dolapo" />
        </div>

        <div className="app__nav-link-container">
          <ui className="app__nav-links">
            <li className="nav-link">
              <Link
                to="/"
                className={active === "/" ? "active" : " "}
                onClick={() => setActive("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/skills"
                className={active === "/skills" ? "active" : " "}
                onClick={() => setActive("/skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/about"
                className={active === "/about" ? "active" : " "}
                onClick={() => setActive("/about")}
              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/portfolio"
                className={active === "/portfolio" ? "active" : " "}
                onClick={() => setActive("/portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/contact"
                className={active === "/contact" ? "active" : " "}
                onClick={() => setActive("/contact")}
              >
                Contact
              </Link>
            </li>
          </ui>
        </div>
      </div>
    </div>
  );
};

export default Nav;
