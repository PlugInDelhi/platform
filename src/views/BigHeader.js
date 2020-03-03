import React from 'react'
import { Link } from 'react-router-dom'
import './BigHeader.css'
import logo from '../images/logo_with_initiative.svg'

class BigHeader extends React.Component {
    render() {
        return (
            <header>
                <img className="logo-img" src={logo} alt="PlugInDelhi Logo"/>
                <ul>
                    <li>
                        <Link to="/ev">Home</Link>
                    </li>
                    <li>
                        <Link to="/ev/policy">EV Policy</Link>
                    </li>
                    <li>
                        <Link to="/ev/hub">Knowledge Hub</Link>
                    </li>
                    <li>
                        <Link to="/ev/events">Events Near You</Link>
                    </li>
                    <li>
                        <Link to="/ev/engagement">Citizen Engagement</Link>
                    </li>

                </ul>
            </header>
            
        )
    }
}

export default BigHeader