import React from "react";
import * as styles from "./styles.module.css";

const PreEvent = ({setActiveComponentID}) => {
    return (
        <div className={styles.container}>
            Hii
            <button onClick={() => setActiveComponentID(currentID => currentID + 1)}>Update</button>
        </div>
    );
};

export default PreEvent;
