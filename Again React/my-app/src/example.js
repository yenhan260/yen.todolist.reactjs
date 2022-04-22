import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function Example() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Routes>
                    <Route expact path="/" element= {<Home />}/>
  
                    <Route expact path="/about" element = { <About/>}/>
                </Routes>

            </div>

        </Router>
    )
}