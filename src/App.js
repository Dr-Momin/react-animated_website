import './App.css';
import Home from  './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact'



import {Redirect, Route, Switch} from "react-router";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <>
        <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/service" component={Service}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to={"/"} />

          </Switch>

    </>
  );
}

export default App;
