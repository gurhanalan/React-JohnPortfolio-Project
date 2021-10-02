import React, { useContext } from "react";
import styles from "./toggle.module.scss";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };
    return (
        <div className={styles.t} onClick={handleClick}>
            <img src={sun} alt="" className={styles.t__icon} />
            <img src={moon} alt="" className={styles.t__icon} />
            <div
                className={styles.t__button}
                style={{ left: theme.state.darkMode && "0" }}
            ></div>
        </div>
    );
};

export default Toggle;
