import React from 'react'
import './Social.css'
import YT from './Youtube/Yt'
import Sc from './SC/Sc'
import Insta from './Insta/Insta'
import Fb from './Fb/Fb'
import Dc from './Dc/Dc'

export default function Social() {
    return (
        <div className="Social">
            <h3 className="sTitle">Jesteśmy na:</h3>
            <YT/>
            <Sc/>
            <Insta/>
            <Dc/>
            <Fb/>
        </div>
    )
}
