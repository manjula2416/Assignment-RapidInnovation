import React from 'react'
import {useHistory} from 'react-router-dom'
import './Header.css'

function Header() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/buy');
    }
    const handleBrandClick = () => {
        history.push('/')
    }
    return (
        <React.Fragment>
            <header className="header">
                <div className="brand-name">
                    <button onClick={handleBrandClick}>
                        <img src={require('./icons/brand.svg').default} alt="Brand Name" />
                    </button>
                </div>
                <div id="nav-links">
                    <a href="#landings">Landings</a>
                    <a href="#pages">Pages</a>
                    <a href="#account">Account</a>
                    <a href="#docs">Documentation</a>
                </div>
                <button className="buy-btn" onClick={handleClick}>Buy Now</button>
            </header>
        </React.Fragment>
    )
}

export default Header
