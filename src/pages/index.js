import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// importing components and styles
import About from "../components/about";
import NavBar from "../components/navBar";
import PreEvents from "../components/preEvents";
import Seo from "../components/seo"
import "../components/globalStyles/index.module.css"

const IndexPage = () => {
    const [activeComponentID, setActiveComponentID] = useState(0);
    const indexQueue = [
        <About setActiveComponentID={setActiveComponentID}/>,
        <PreEvents setActiveComponentID={setActiveComponentID}/>
    ];

    const incrementActiveComponentID = () => {

    }

    const decrementActiveComponentID = () => {

    }


    return (
        <div style={{width: "100%", height: "100%"}}>
            <Seo title="Home" />
            {/*Add NavBar and Active Component here*/}
            <NavBar activeComponentID={activeComponentID}/>
            {indexQueue[activeComponentID]}
        </div>
    );
}




export default IndexPage
