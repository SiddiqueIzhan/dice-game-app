import styles from "./CenterWrapper.module.scss";
import Button from "../Button";
import { useEffect, useState } from "react";

const CenterWrapper = ({
  setScore,
  isCard,
  setIsCard,
  activeIndex,
  setActiveIndex,
  setError,
}) => {
  const [diceNumber, setDiceNumber] = useState(1);
  const diceRollSound = new Audio("Audio/dice-sound.mp3");
  let timerId = null;
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleUpdateScore = (result) => {
    if (activeIndex === result) {
      setScore((prevScore) => prevScore + result);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
  };

  const handleDiceResult = () => {
    if (activeIndex === 0) {
      setError(true);
    } else {
      let count = 50,
        newDiceNumber;
      diceRollSound.loop = true; // Loop the sound
      diceRollSound.play();
      timerId = setInterval(() => {
        newDiceNumber = getRandomNumber(1, 7); // Generate the new dice number
        setDiceNumber(newDiceNumber); // Update the state with the new dice number
        count--;
        if (count === 0) {
          diceRollSound.pause();
          diceRollSound.currentTime = 0;
          clearInterval(timerId);
          handleUpdateScore(newDiceNumber);
        }
      }, 50);
    }
  };

  const handleResetScore = () => {
    setScore(0);
    setActiveIndex(0);
    setDiceNumber(1);
  };

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.dice} onClick={handleDiceResult}>
          <img
            src={`/Images/dice_${diceNumber}.svg`}
            alt="dice"
            height={250}
            width={250}
          />
        </div>
        Click on Dice to roll
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.button} onClick={handleResetScore}>
          Reset Score
        </Button>
        <Button className={styles.button} onClick={() => setIsCard(!isCard)}>
          Show Rules
        </Button>
      </div>
    </div>
  );
};

export default CenterWrapper;
