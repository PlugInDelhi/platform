import React from 'react'

import './UserEngagementForm.css'

class UserEngagementForm extends React.Component {
    render() {
        return (
            <div className="user-engagement-form">
                <h1>Which of these best describe your interest in Delhi's Electric Vehicle Policy?</h1>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="starter-box">I am</p>
                    </button>
                    <div className="dropdown-menu">
                        <a href="#/hello">a citizen or community organiser</a>
                        <a href="#/hello">a manufacturer</a>
                        <a href="#/hello">an investor</a>
                        <a href="#/hello">a research scholar</a>
                        <a href="#/hello">a student</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default UserEngagementForm