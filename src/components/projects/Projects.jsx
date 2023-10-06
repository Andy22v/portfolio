import React from "react";
import styles from "./Projects.module.scss";

import Image from "next/image";

//import images
import HTML from "@/../public/html5.svg";
import CSS from "@/../public/css3.svg";
import SASS from "@/../public/sass.svg";
import JS from "@/../public/javascript.svg";
import REACT from "@/../public/react.svg";
import NEXT from "@/../public/next.svg";
import GIT from "@/../public/git.svg";
import NPM from "@/../public/npm.svg";
import IG from "@/../public/ig.png";
import Drinks from "@/../public/drinks.png";
import Sea from "@/../public/sea.png";
import FunTrade from "@/../public/funTrade.png";

const Projects = () => {
  const skills = [HTML, CSS, SASS, JS, REACT, NEXT, GIT, NPM];

  const mocks = [
    {
      id: 1,
      image: IG,
      title: "Instagram clone",
      url: "https://instagram-clone-andy22v.vercel.app/",
      skills: "HTML5, CSS, React",
    },
    {
      id: 2,
      image: Drinks,
      title: "Drinks App",
      url: "https://drinks-react-pearl.vercel.app",
      skills: "HTML5, CSS, React",
    },
    {
      id: 3,
      image: Sea,
      title: "Sea Adventures",
      url: "https://sea-adventures-one.vercel.app",
      skills: "HTML5, SCSS, React",
    },
    {
      id: 4,
      image: FunTrade,
      title: "Fun Trade",
      url: "https://fun-trade-cb7.vercel.app/",
      skills: "HTML5, SCSS, Next, Firebase",
    },
  ];

  return (
    <div className={styles.Projects}>
      <a id="projects"></a>
      <h1>Projects</h1>
      <div className={styles.Projects__contain}>
        {mocks &&
          mocks.map((project) => (
            <div key={project.id} className={styles.Projects__card}>
              <div className={styles.Projects__front}>
                <img
                  className={styles.Projects__img}
                  src={project.image.src}
                  alt={project.title}
                />
              </div>
              <div className={styles.Projects__back}>
                <p>
                  Title: <strong>{project.title}</strong>
                </p>
                <p>
                  Skills: <strong>{project.skills}</strong>
                </p>
                <div className={styles.Projects__btnContain}>
                  <a href={project.url}>
                    <button className={styles.Projects__btn}>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.Projects__skills}>
        <h1>Skills</h1>
        <div className={styles.Projects__skillsContain}>
          {skills.map((skill, index) => (
            <Image
              className={styles.Projects__skill}
              key={index}
              src={skill}
              alt="html"
              width={100}
              height={100}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
