import React from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import Home from '../Home/Home'
import Kontakt from '../Kontakt/Kontakt'
import Shop from '../Shop/Shop'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function Nav() {
    return (
        <div className="navHandler">
            <ul className="navBar">
                <Link className="navLink" to="home" offset={-100} smooth={true} duration={500}>Home</Link>
                <Link className="navLink" to="kontakt" offset={-100} smooth={true} duration={500}>Contact</Link>
            </ul>
        </div>
            
    )
}
