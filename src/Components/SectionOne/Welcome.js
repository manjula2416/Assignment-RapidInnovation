import React from 'react'
import './Welcome.css'

function Welcome() {
    return (
        <React.Fragment>
            <div className="welcome">
                <div className="welcomekit1">
                    <div className="welcome-text">Welcome to <span>LandKit</span>.</div>
                    <div className="welcome-text">Develop anything.</div>
                    <p>Build a beautiful, modern website with flexible <br/>Bootstrap components built from scratch.</p>
                    <span><button className="view">View all pages &#8594;</button></span>
                    <span><button className="docs">Documentation</button></span>
                </div>
                <div className="welcomekit2">
                    <img src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Welcome
