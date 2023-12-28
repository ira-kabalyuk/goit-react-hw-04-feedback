import React from "react";

import styles from './FeedbackOptions.module.scss';
import { Section } from '../Section'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Section title="Please leave feedback">
      {options.map(option => (
        <button key={option} className={styles.button} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </Section>
  );
};


export { FeedbackOptions };
