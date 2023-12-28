import React from "react";

import styles from './Statistics.module.scss';
import { Notification } from '../Notification';
import { Section } from '../Section';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <Section title="Statistic">
      {total > 0 ?
        <>
          <p className={styles.item}>Good: <span>{good}</span></p>
          <p className={styles.item}>Neutral: <span>{neutral}</span></p>
          <p className={styles.item}>Bad: <span>{bad}</span></p>
          <p className={styles.item}>Total: <span>{total}</span></p>
          <p className={styles.item}>Positive feedback:
            {positivePercentage > 0 ?
              <span>{positivePercentage}%</span> : 0
            }
          </p>
        </>
        : <Notification message="here is no feedback"/>
        }
    </Section>
  );
};

export { Statistics };