import React, {useState} from 'react';
import "./Home.css";
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';

//import {Link} from "react-router-dom";


function Home() {
    const [showLinks1, setLinks1] = useState(false)
    const [showLinks2, setLinks2] = useState(false)
    //const onClick = () => setFrame(false)
    const files = ["bm calls", "battery calculator", "declarations", "STOR calls", "BM planner", "Ops Update Files"];
    const tools = ["bm", "boa", "horizon", "rebooter", "soc", "wiki", "plc1", "plc2", "stor uuc", "battery monitor"];
    const [myPro, setMyPro] = useState("");

    //const navStyle = {
    //    color: "black",
    //    textDecoration: "none",
    //    padding: "0 25px"
    //}
    
    
    return (
        <div className="home">
           <h1 className="home-title">Home</h1>
           
        {/*First link - Files */}
           <div className="div-outline" onClick={() => setLinks1(!showLinks1)}>
                <h2 className="home-subtitle">Files
                    {showLinks1 ? 
                        <button className="button-arrow-down" type="button" ><AiOutlineCaretDown/></button> 
                        :
                        <button className="button-arrow-up" type="button" ><AiFillCaretUp/></button> }
                </h2>
            </div>
            {showLinks1 ?
            <div>

            </div>
            :
            null}

        {/*Second link - Tools */}
            <div className="div-outline" onClick={() => setLinks2(!showLinks2)}>
                <h2 className="home-subtitle">Tools
                    {showLinks2 ? 
                        <button className="button-arrow-down" type="button" ><AiOutlineCaretDown/></button> 
                        :
                        <button className="button-arrow-up" type="button" ><AiFillCaretUp/></button> }
                </h2>
            </div>
            {showLinks2 ?
            <div>  
                {tools.map(tool => (
                    <button
                    key={tool}
                    className="buttons-submenu"
                    onClick={() => setMyPro(tool)}>
                        {tool.toLocaleUpperCase()}
                    </button>
                    ))}
                    {myPro === "bm" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame1" className="frames" src={"http://10.0.64.131:10080/unit_unavailability"}/>
                        </>
                    )}
                    {myPro === "boa" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame2" className="frames" src={"http://reports.vm.martinenergy.local/~iainh/boa.py"}/>
                        </>
                    )}
                    {myPro === "horizon" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame3" className="frames" src={"https://www.unlimitedhorizon.co.uk/webapp/signin"}/>
                        </>
                    )}
                    {myPro === "rebooter" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame4" className="frames" src={"http://192.168.16.79/cgi-bin/gsm.pl"}/>
                        </>
                    )}
                    {myPro === "soc" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame5" className="frames" src={"http://reports.vm.martinenergy.local/~iainh/containers.py"}/>
                        </>
                    )}
                    {myPro === "wiki" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame6" className="frames" src={"http://wiki.vm.martinenergy.local/mediawiki/index.php/Wikitricity_Home"}/>
                        </>
                    )}
                    {myPro === "plc1" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame7" className="frames" src={"http://reports.vm.martinenergy.local/~iainh/raw_plc.py"}/>
                        </>
                    )}
                    {myPro === "plc2" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame8" className="frames" src={"http://reports.vm.martinenergy.local/~iainh/plc.py"}/>
                        </>
                    )}
                    {myPro === "stor uuc" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame9" className="frames" src={"https://10.0.64.23/gp/uuc/"}/>
                        </>
                    )}
                    {myPro === "battery monitor" && (
                        <>
                        <button type="button" onClick={() => setMyPro(null) } className="button-close">Close</button>
                        <iframe title="Frame10" className="frames" src={"http://192.168.16.74:8888/"}/>
                        </>
                    )}            
            </div>
            : 
            null }
           <h2 className="home-subtitle">Contacts</h2>
           <h2 className="home-subtitle">Docs</h2>

        </div>
        
    )
}

export default Home
