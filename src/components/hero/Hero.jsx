import styles from "./Hero.module.scss";
import React from "react";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__contain}>
        <div className={styles.Hero__infoContain}>
          <div className={styles.Hero__info}>
            <h3>
              👋 Hi, i'm <strong>Andy</strong>{" "}
            </h3>
            <p>
              Sono un <strong>Front-end Developer</strong> con passione anche
              per il <strong>Web Design</strong> , amo trasformare le mie idee
              in proggetti.
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
        <div className={styles.Hero__space}>
          <img src="/space.svg" alt="space" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
