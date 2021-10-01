import React from "react";
import styles from "./product.module.scss";

const Product = ({ img, link }) => {
    const imgPath = "/projects/";
    return (
        <div className={styles.p}>
            <div className={styles.p__bar}>
                <div className={styles.p__bar__circles}></div>
                <div className={styles.p__bar__circles}></div>
                <div className={styles.p__bar__circles}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={imgPath + img} alt="" className={styles.p__img} />
            </a>
        </div>
    );
};

export default Product;
