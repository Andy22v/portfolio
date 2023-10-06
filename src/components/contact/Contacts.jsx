import React from "react";
import styles from "./Contacts.module.scss";
import Image from "next/image";

//image
import GitHub from "@/../public/github.svg";
import Linkedin from "@/../public/linkedin.svg";

const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <a id="contact"></a>
      <h3>Connect with me</h3>
      <div className={styles.Contacts__socials}>
        <p>Email: andy444v@gmail.com</p>
        <div className={styles.Contacts__connectLinks}>
          <a href="https://github.com/Andy22v">
            <Image
              className={styles.Contacts__social}
              src={GitHub}
              alt="html"
              width={40}
              height={40}
              draggable={false}
            />
          </a>
          <a href="https://www.linkedin.com/in/andy-voda-av/">
            <Image
              className={styles.Contacts__social}
              src={Linkedin}
              alt="html"
              width={40}
              height={40}
              draggable={false}
            />
          </a>
        </div>
      </div>
      <div className={styles.Contacts__personal}>
        <p>
          Created with 💙 by <a href="https://github.com/Andy22v">Andy</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Contacts;
