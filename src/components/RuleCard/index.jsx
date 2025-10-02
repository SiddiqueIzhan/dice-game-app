import { IoMdClose } from "react-icons/io";
import styles from "./RuleCard.module.scss";

const RuleCard = ({ setIsCard }) => {
  return (
    <div className={styles.card}>
      <IoMdClose className={styles.close} onClick={() => setIsCard(false)} />
      <h3>How to play dice game</h3>
      <br />
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted</p>
    </div>
  );
};

export default RuleCard;
