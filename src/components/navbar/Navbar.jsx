import React from "react";
import styles from "./Navar.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <a id="hero"></a>
      <div className={styles.Navbar__logoContain}>
        <img className={styles.Navbar__logo} src="./mylogo.png" alt="" />
      </div>
      <ul className={styles.Navbar__list}>
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-2000}
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
            Work
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
