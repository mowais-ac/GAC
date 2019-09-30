import React from "react";
import ReactDOM from "react-dom";
import {Menu, Accordion, Icon} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';

export default class MainMenu extends React.Component{
    state = { activeIndex: 0 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        const { activeIndex } = this.state
        return(
            <Menu vertical fluid inverted>
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        User Management
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <NavLink className={'menu item'} to='/user-management'>User List</NavLink>
                        <NavLink className={'menu item'} to='/user-management/edit/2'>Add New User</NavLink>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        Roles Management
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Roles List</NavLink>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Add New Role</NavLink>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        Other Management 2
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Roles List</NavLink>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Add New Role</NavLink>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        Other Management 3
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Roles List</NavLink>
                        <NavLink className={'menu item'} to='/expenditure-calculator'>Add New Role</NavLink>
                    </Accordion.Content>
                </Accordion>
            </Menu>
        )
    }
}