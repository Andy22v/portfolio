import styles from "./Hero.module.scss";
import React from "react";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__contain}>
        <div className={styles.Hero__infoContain}>
          <div className={styles.Hero__info}>
            <h3>👋 Hi, i'm Andy</h3>
            <p>
              I'm a Front-End developer passionate about crafting engaging and
              user-friendly web experiences. I'm dedicated to continually
              improving my skills and knowledge in the world of web development.
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1dEe1F_y4iK2PTQ_hSo3QCUm-5NrILl0Q/view?usp=drive_link">
            <button className={styles.Hero__btn}>Download CV</button>
          </a>
        </div>
        <div className={styles.Hero__imgContain}>
          <div className={styles.Hero__svg}>
            <img className={styles.Hero__photo} src="/andy2.png" alt="io" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
