import React from 'react';
import Navbar from "../components/Navbar";
import '../../src/style.css';
import CommonPage from "../components/CommonPage";

const About = () => {
    return (
        <>
            <CommonPage
                heading={"Welcome to"}
                btn_text={"Contact Us"}
                btn_link={"/contact"}
            />
        </>
    );
};

export default About;