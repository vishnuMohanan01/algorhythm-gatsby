import React from "react";
import * as styles from "./styles.module.css";

const About = ({setActiveComponentID}) => {
    return (
        <div className={styles.container}>
            hello
            <button onClick={setActiveComponentID((currentID) => currentID + 1)}>Update</button>
        </div>
    );
};

export default About;
