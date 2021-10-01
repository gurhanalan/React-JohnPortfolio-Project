import React, { useContext } from "react";
import styles from "./contact.module.scss";
import { ThemeContext } from "../../context";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className={styles.c}>
            <div className={styles.c__left}>
                <h1>Let's discuss your project</h1>
                <div className={styles.c__left__info}>
                    <div className={styles.c__left__info__item}>
                        <img src={Phone} alt="" />
                        +1 1234 556 75
                    </div>
                    <div className={styles.c__left__info__item}>
                        <img src={Email} alt="" />
                        contact@alan.dev
                    </div>
                    <div className={styles.c__left__info__item}>
                        <img src={Address} alt="" />
                        245 King Street, Touterie Victoria 8520 Australia
                    </div>
                </div>
            </div>
            <div className={styles.c__right}>
                <p>
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form action="" className={styles.c__form}>
                    <input
                        style={{
                            backgroundColor: theme.state.darkMode && "#333",
                            color: theme.state.darkMode && "white",
                        }}
                        type="text"
                        placeholder="Name"
                        name="user_name"
                    />
                    <input
                        style={{
                            backgroundColor: theme.state.darkMode && "#333",
                            color: theme.state.darkMode && "white",
                        }}
                        type="text"
                        placeholder="Subject"
                        name="user_subject"
                    />
                    <input
                        style={{
                            backgroundColor: theme.state.darkMode && "#333",
                            color: theme.state.darkMode && "white",
                        }}
                        type="text"
                        placeholder="Email"
                        name="user_email"
                    />
                    <textarea
                        style={{
                            backgroundColor: theme.state.darkMode && "#333",
                            color: theme.state.darkMode && "white",
                        }}
                        name="message"
                        placeholder="Message"
                        rows="5"
                    ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
