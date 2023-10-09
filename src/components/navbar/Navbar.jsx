import React from "react";
import styles from "./Navar.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <a id="hero"></a>
      <h1 className={styles.Navbar__title}>Portfolio.</h1>
      <ul className={styles.Navbar__list}>
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={1000}
            duration={1000}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
