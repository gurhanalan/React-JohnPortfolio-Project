import React from "react";
import styles from "./about.module.scss";
import award from "../../img/award.png";

const About = () => {
    return (
        <div className={styles.a}>
            <div className={styles.a__left}>
                <div
                    className={`${styles.a__left__card} ${styles.a__left__card__bg}`}
                ></div>
                <div className={styles.a__left__card}>
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={styles.a__left__card__img}
                    />
                </div>
            </div>
            <div className={styles.a__right}>
                <h1 className={styles.a__right__title}>About Me</h1>
                <p className={styles.a__right__subtitle}>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                </p>
                <p className={styles.a__right__desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                    aute irure dolor in reprehende.
                </p>
                <div className={styles.a__right__award}>
                    <img src={award} alt="" />
                    <div className={styles.a__right__award__texts}>
                        <h4>International Design Awards 2021</h4>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur autodit and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
