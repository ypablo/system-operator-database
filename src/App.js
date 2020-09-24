import React from 'react';
import './App.css';
import Nav from "./components/Nav/nav";
//import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/contacts";
import Files from "./components/Files/files";
import Tools from "./components/Tools/tools";
import Docs from "./components/Docs/docs";
import About from "./components/About/about";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contacts" component={Contacts}/>
          <Route path="/Files" component={Files}/>
          <Route path="/Tools" component={Tools}/>
          <Route path="/Docs" component={Docs}/>
          <Route path="/About" component={About}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
