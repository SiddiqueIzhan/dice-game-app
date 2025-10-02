import styles from "./TopWrapper.module.scss";

const TopWrapper = ({
  score,
  setScore,
  activeIndex,
  setActiveIndex,
  error,
  setError,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const handleActiveIndex = (item, index) => {
    if (item === index + 1) {
      setActiveIndex(item);
      setError(false);
    }
  };
  return (
    <div className={styles.topWrapper}>
      {error && <span>You have not selected any number</span>}
      <div className={styles.score}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <div className={styles.selectSection}>
        <ul className={styles.numbersList}>
          {numbers.map((item, index) => {
            return (
              <li
                onClick={() => handleActiveIndex(item, index)}
                className={
                  activeIndex === index + 1
                    ? styles.selectedNumber
                    : styles.number
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
        <p>Select Number</p>
      </div>
    </div>
  );
};

export default TopWrapper;
