import React, { useState } from "react";
import "./nav.css";
import { Logo } from "../../Assets/export";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Nav = () => {
  const [active, setActive] = useState("/");
  const [toggleNav, setToggleNav] = useState(true);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const variants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="app__nav">
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

        {/* Mobile Menu*/}

        <AnimatePresence>
          <motion.div
            className="app__nav-mobileMenu"
            initial={{ width: 0 }}
            animate={{
              width: 30,
            }}
            exit={{
              width: 0,
              transition: { delay: 1, duration: 0.3 },
            }}
          >
            {toggleNav ? (
              <GiHamburgerMenu
                size={27}
                color="000"
                onClick={() => setToggleNav(!toggleNav)}
              />
            ) : (
              <motion.div
                className="app__nav-mobileMenu-container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
              >
                <IoMdClose
                  size={27}
                  color="000"
                  className="icons"
                  onClick={() => setToggleNav(!toggleNav)}
                />

                <ui
                  className="app__nav-links"
                  onClick={() => setToggleNav(!toggleNav)}
                >
                  <motion.li
                    className="nav-link"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      to="/"
                      className={active === "/" ? "active" : " "}
                      onClick={() => setActive("/")}
                    >
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-link"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      to="/skills"
                      className={active === "/skills" ? "active" : " "}
                      onClick={() => setActive("/skills")}
                    >
                      Skills
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-link"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      to="/about"
                      className={active === "/about" ? "active" : " "}
                      onClick={() => setActive("/about")}
                    >
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-link"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      to="/portfolio"
                      className={active === "/portfolio" ? "active" : " "}
                      onClick={() => setActive("/portfolio")}
                    >
                      Portfolio
                    </Link>
                  </motion.li>
                  <motion.li
                    className="nav-link"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Link
                      to="/contact"
                      className={active === "/contact" ? "active" : " "}
                      onClick={() => setActive("/contact")}
                    >
                      Contact
                    </Link>
                  </motion.li>
                </ui>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
