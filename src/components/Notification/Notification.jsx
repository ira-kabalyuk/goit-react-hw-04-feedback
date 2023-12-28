import React from "react";

import styles from './Notification.module.scss';


const Notification = ({message}) => {
  return (
    <p className={styles.message}>{message}</p>
  );
};

export { Notification };