import React from 'react'
import Cards from './Cards'
import Partners from './Partners'
import Welcome from './Welcome'
import SectionTwo from '../SectionTwo/SectionTwo'

const customStyles = {
    display : 'flex',
    flexDirection : 'column'
}
function WelcomeKit() {
    return (
        <React.Fragment>
            <div style={customStyles}>
                <Welcome />
                <Cards />
                <Partners />
                <SectionTwo />
            </div>
        </React.Fragment>
    )
}

export default WelcomeKit
