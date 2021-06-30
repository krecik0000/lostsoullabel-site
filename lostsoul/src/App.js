import Nav from './components/Nav/Nav'
import Start from './components/Start/Start'
import Home from './components/Home/Home'
import Kontakt from './components/Kontakt/Kontakt'
import Info from './components/Info/Info'
import Stats from './components/Stats/Stats'
import Footer from './components/Footer/Footer'
import Build from './components/inBuild/Build'
import './App.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Build/>
        <Nav/>
        <Home />
        <Kontakt/>
        <Footer/>
    </div>
  );
}

export default App;
