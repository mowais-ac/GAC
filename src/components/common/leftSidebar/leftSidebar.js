import React from 'react';
//Global
import { Sidebar } from 'semantic-ui-react'
import MainMenu from '../../common/header/MainMenu/MainMenu';
export default class leftSidebar extends React.Component{
    render(){
        return(
            <Sidebar
                animation='push'
                direction='left'
                visible
                inverted>
                <MainMenu/>
            </Sidebar>
        )
    }
}