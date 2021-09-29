import React from 'react';
import Home from "../pages/Home";
import {NavLink} from "react-router-dom";
import img from "../img.png";

const CommonPage = (props) => {
    return (
        <>
            <section id="header" className={"d-flex align-items-center"} >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                                    <h1>
                                        {props.heading}
                                        <div><strong className={"brand-name"}>  Dr. Momin</strong></div>
                                    </h1>
                                    <h2 className="my-4">
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className="mt-4">
                                        <NavLink to={props.btn_link} className=" btn-get-started">
                                            {props.btn_text}
                                        </NavLink>
                                    </div>

                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={img} className={"img-fluid animated main-img"} alt={"home imagee"}/>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommonPage;
