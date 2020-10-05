import React, {useState} from 'react';
import "./Home.css";
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';

//import {Link} from "react-router-dom";

function Home() {
    const [showLinks, setLinks] = useState(false)
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
            <div className="div-outline" onClick={() => setLinks(!showLinks)}>
                <h2 className="home-subtitle">Tools
                    {showLinks ? 
                        <button className="button-arrow-down" type="button" ><AiOutlineCaretDown/></button> 
                        :
                        <button className="button-arrow-up" type="button" ><AiFillCaretUp/></button> }
                </h2>
            </div>
                {showLinks ? (
                <div> 
                     {showFrame ? 
                        ( <div>
                            <button type="button" onClick={() => setFrame(!showFrame) } className="button-close">Close</button>
                            <iframe title="Modal1" className="frames" src={"http://10.0.64.131:10080/unit_unavailability"}/>
                        </div> ): 
                    <p className="frame-link" onClick={()=> setFrame(!showFrame)}>Unit unavailability / Schduling / Forecast management / Unit configuration</p>}    

                    

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
