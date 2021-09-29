import React from 'react';
import Navbar from "../components/Navbar";
import '../../src/style.css';
import img from '../img.png';
import Service from '../pages/Service';
import {NavLink} from "react-router-dom";
import CommonPage from "../components/CommonPage";


const Home = () => {
    return (
        <>
            <CommonPage
            heading={"Grow business with"}
            btn_text={"Get Started"}
            btn_link={"/service"}
            />
        </>
    );
};

export default Home;
