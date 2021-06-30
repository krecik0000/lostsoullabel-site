import React from 'react'
import './Home.css'
import Social from '../Social/Social'

export default function Home() {
    return (
        <div className="mainLogo" id="home">
            <div className="Title">
                <h1>LOSTSOUL</h1>
                <p>LABEL</p>
            </div>
            <Social/>
        </div>
    )
}
