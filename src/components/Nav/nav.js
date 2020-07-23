import React from 'react';
import "./nav.css";
import {Link} from "react-router-dom";

function nav() {
    const navStyle ={
        color: "white",
        textDecoration: "none"
    }

    return (
        <nav className="nav-main">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/contacts"><li>Contacts</li></Link>
                <Link style={navStyle} to="/files"><li>Files</li></Link>
                <Link style={navStyle} to="/tools"><li>Tools</li></Link>
                <Link style={navStyle} to="/docs"><li>Docs</li></Link>
                <Link style={navStyle} to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default nav
