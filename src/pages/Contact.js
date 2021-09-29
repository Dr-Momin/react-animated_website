import React from 'react';
import Navbar from "../components/Navbar";
import '../../src/style.css';

const Contact = () => {
    return (
        <>

            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <dib className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter your name"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input required type="number" className="form-control" id="exampleFormControlInput1"
                                       placeholder="Enter your phone number"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input required type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className={"btn btn-primary"}>Submit</button>
                        </form>
                    </div>
                </div>
            </dib>

        </>
    );
}

export default Contact;