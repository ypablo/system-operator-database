import React from 'react'
import "./home.css"
import {Link} from "react-router-dom";

function home() {
    const navStyle ={
        color: "black",
        textDecoration: "none"
    }
    return (
        <div className="home">
           <h1 className="home-title">Home</h1>
           <h2 className="home-subtitle">Files</h2>
           <h2 className="home-subtitle">Tools</h2>
           <p><Link style={navStyle} to={"10.0.64.131:10080/scheduling"}>Scheduling</Link></p>
           <p><a href="http://10.0.64.131:10080/scheduling" target="_blank" rel="noopener noreferrer">Scheduling 2</a></p>
           <h2 className="home-subtitle">Contacts</h2>
           <h2 className="home-subtitle">Docs</h2>
        </div>
    )
}

export default home
