import React, { useEffect, useState } from "react";
import TopWrapper from "../../components/TopWrapper";
import CenterWrapper from "../../components/CenterWrapper";
import RuleCard from "../../components/RuleCard";
import styles from "./GamePage.module.scss";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [isCard, setIsCard] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (window.performance && window.performance.getEntriesByType) {
      const [nav] = window.performance.getEntriesByType("navigation");
      if (nav?.type === "reload" && window.location.pathname !== "/") {
        window.location.replace("/");
      }
    }
  }, []);

  return (
    <>
      <div className={styles.pageContainer}>
        <TopWrapper
          score={score}
          setScore={setScore}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          error={error}
          setError={setError}
        />
        <CenterWrapper
          score={score}
          setScore={setScore}
          isCard={isCard}
          setIsCard={setIsCard}
          activeIndex={activeIndex}
          error={error}
          setError={setError}
          setActiveIndex={setActiveIndex}
        />
        {isCard && (
          <div className={styles.blackOverlay}>
            <RuleCard setIsCard={setIsCard} />
          </div>
        )}
      </div>
    </>
  );
};

export default GamePage;
