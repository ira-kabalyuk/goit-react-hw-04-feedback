import React from "react";

import styles from './Section.module.scss';


const Section = ({title, children}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      { children }
    </div>
  );
};

export { Section };