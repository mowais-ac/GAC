import React from 'react';
import {Container} from 'semantic-ui-react'
import logo from "../../../assets/images/logo.gif";
import './header.scss'
class MainHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            logo: '../../../assets/images/logo.gif',
            alt: 'Capstone Insurance'
        }
    }
    render(){
        return(
            <header id="main-header">
                <div className="ui container">
                    <div className="logo">
                        <img src={logo} alt={this.state.alt}/>
                    </div>
                </div>
            </header>
        )
    }
}
export default MainHeader