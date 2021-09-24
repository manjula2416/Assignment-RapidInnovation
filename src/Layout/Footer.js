import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="social-media-icons">
                    <img src={require('./icons/brand.svg').default} alt="Brand Name" />
                    <p>A better way to build.</p>
                    <img src="https://landkit.goodthemes.co/assets/img/icons/social/instagram.svg" />
                    <img src="https://landkit.goodthemes.co/assets/img/icons/social/facebook.svg" />
                    <img src="https://landkit.goodthemes.co/assets/img/icons/social/twitter.svg" />
                    <img src="https://landkit.goodthemes.co/assets/img/icons/social/pinterest.svg" />
                </div>
                <div className="category">
                    <h6>PRODUCTS</h6>
                    <a href="#"> Page Builder </a>
                    <a href="#"> UI Kit </a>
                    <a href="#"> Styleguide </a>
                    <a href="#"> Documentation </a>
                    <a href="#"> Changelog </a>
                </div>
                <div className="category">
                    <h6>SERVICES</h6>
                    <a href="#"> Documentation </a>
                    <a href="#"> Changelog </a>
                    <a href="#"> Pagebuilder </a>
                    <a href="#"> UI Kit </a>
                </div>
                <div className="category">
                    <h6>CONNECT</h6>
                    <a href="#"> Page Builder </a>
                    <a href="#"> UI Kit </a>
                    <a href="#"> Styleguide </a>
                    <a href="#"> Documentation </a>
                    <a href="#"> Changelog </a>
                    <a href="#"> Documentation </a>
                    <a href="#"> Changelog </a>
                </div>
                <div className="category">
                    <h6>LEGAL</h6>
                    <a href="#"> Documentation </a>
                    <a href="#"> Changelog </a>
                    <a href="#"> Pagebuilder </a>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
