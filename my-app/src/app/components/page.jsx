import React from "react";
import styles from "./page.module.css";
const news = (props) => {
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div>
      <div className={styles.card}>
        <img src={imageUrl} className={styles.cardImg} />
        <div className={styles.body}>
          <h5 className={styles.title}> {title} ... </h5>
          <p className={styles.text}> {description} </p>
          <a href={newsUrl} target="_blank" className={styles.btn}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default news;
