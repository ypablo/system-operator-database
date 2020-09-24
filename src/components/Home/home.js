import React, {useState} from 'react';
import "./Home.css";
import { AiOutlineCaretDown } from 'react-icons/ai';

//import {Link} from "react-router-dom";

function Home() {
    const [showFrame, setFrame] = useState(false)

    const navStyle ={
        color: "black",
        textDecoration: "none",
        padding: "0 25px"
    }
    
    return (
        <div className="home">
           <h1 className="home-title">Home</h1>
           <h2 className="home-subtitle">Files</h2>

           <h2 className="home-subtitle">Tools
            <button className="button-arrow" type="button" onClick={() => setFrame(!showFrame)}><AiOutlineCaretDown/></button></h2>
                {showFrame ? (
                <div> 
                     {/*<iframe title="Modal Embed" className="frames" src={"http://192.168.16.79/cgi-bin/gsm.pl"}/>*/}



                    <p>
                        <a 
                        className="nav-style" 
                        href="http://10.0.64.131:10080/unit_unavailability" 
                        target="_blank" rel="noopener noreferrer">Unit unavailability</a>    
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://10.0.64.131:10080/scheduling" 
                        target="_blank" rel="noopener noreferrer">Scheduling</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://10.0.64.131:10080/forecast_management" 
                        target="_blank" rel="noopener noreferrer">Forecast management</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://10.0.64.131:10080/unit_configuration" 
                        target="_blank" rel="noopener noreferrer">Unit configuration</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://reports.vm.martinenergy.local/~iainh/boa.py" 
                        target="_blank" rel="noopener noreferrer">BOA</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="https://www.unlimitedhorizon.co.uk/webapp/signin" 
                        target="_blank" rel="noopener noreferrer">Horizon</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://192.168.16.79/cgi-bin/gsm.pl" 
                        target="_blank" rel="noopener noreferrer">Rebooter</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://reports.vm.martinenergy.local/~iainh/containers.py" 
                        target="_blank" rel="noopener noreferrer">SoC</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://wiki.vm.martinenergy.local/mediawiki/index.php/Wikitricity_Home" 
                        target="_blank" rel="noopener noreferrer">Wiki</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://reports.vm.martinenergy.local/~iainh/raw_plc.py" 
                        target="_blank" rel="noopener noreferrer">PLC schedule 1</a>
                    </p>
                    <p>
                        <a style={navStyle} 
                        href="http://reports.vm.martinenergy.local/~iainh/plc.py" 
                        target="_blank" rel="noopener noreferrer">PLC schedule 2</a>
                        </p>
                    <p>
                        <a style={navStyle} 
                        href="https://10.0.64.23/gp/uuc/" 
                        target="_blank" rel="noopener noreferrer">STOR UUC</a>
                    </p>
                 </div>) : null }
           <h2 className="home-subtitle">Contacts</h2>
           <h2 className="home-subtitle">Docs</h2>

           <div>
                <button type="button" onClick={() => setFrame(!showFrame) } className="button-close">Close</button>
                {showFrame ? (
                    <iframe title="Modal Embed" className="frames" src={"http://192.168.16.79/cgi-bin/gsm.pl"}/>
                ): null}    
           </div>
        </div>
        
    )
}

export default Home
