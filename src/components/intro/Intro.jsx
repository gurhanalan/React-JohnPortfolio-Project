import React from "react";
import styles from "./intro.module.scss";
import guyimg from "../../img/guy2.png";
import { CgScrollV } from "react-icons/cg";

const Intro = () => {
    return (
        <div className={styles.i}>
            <div className={styles.i__left}>
                <div className={styles.i__left__wrapper}>
                    <h2>Hello, My name is</h2>
                    <h1>John Burton</h1>
                    <div className={styles.title}>
                        <div className={styles.title__wrapper}>
                            <div className={styles.title__item}>
                                Web Developer
                            </div>
                            <div className={styles.title__item}>
                                UI/UX Designer
                            </div>
                            <div className={styles.title__item}>
                                Photographer
                            </div>
                            <div className={styles.title__item}>Writer</div>
                            <div className={styles.title__item}>
                                Content Creator
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        I design and develop services for customers of all
                        sizes, specializing in creating stylish, modern
                        websites, web services and online stores.
                    </p>

                    <CgScrollV />
                </div>
            </div>
            <div className={styles.i__right}>
                <img src={guyimg} alt="" className={styles.i__right__img} />
                <div className={styles.i__right__background}></div>
            </div>
        </div>
    );
};

export default Intro;
