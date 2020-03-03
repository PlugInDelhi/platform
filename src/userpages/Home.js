import React from 'react';

import UserEngagementForm from '../views/UserEngagementForm'
import CityGraphics from '../views/CityGraphics/CityGraphics'
import MarkdownContent from '../views/MarkdownContent'

import './Home.scss'
import Content from './mk.md'


class Home extends React.Component {

    render() {
        return (
            <>
                <UserEngagementForm/>
                <CityGraphics/>
                <MarkdownContent className="content" text={Content} />
            </>
        );
    }
}

export default Home;
