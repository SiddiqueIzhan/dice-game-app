import React from "react";
import styles from "./Intro.module.scss";
import Button from "../../components/Button/index";
import { Link, NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <img src="/Images/dices 1.svg" alt="dice" height={522} width={648} />
        <div className={styles.textWrapper}>
          <h1>DICE GAME</h1>
          <Link to="/game">
            <Button>Play Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
