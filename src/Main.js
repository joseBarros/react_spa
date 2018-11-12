import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Portfolio from "./portfolio";
import Contact from "./Contact";
import {Navbar} from 'react-materialize'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <Navbar class="blue" left>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </Navbar>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Portfolio" component={Portfolio}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;