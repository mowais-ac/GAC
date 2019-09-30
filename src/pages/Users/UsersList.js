import React from 'react';
import {NavLink} from 'react-router-dom';
//Global
import { Sidebar, Segment, Container, Pagination, Form, Input, Radio, Checkbox, Label, Dropdown, Select, TextArea, Icon, Button, Table} from 'semantic-ui-react';
import MainHeader from "../../components/common/header/header";
import MainMenu from '../../components/common/header/MainMenu/MainMenu';
import './UsersList.scss';
import {MainHeading, currencyList} from '../../modules/modules';

const UsersListActions = (props) => (
    <Button.Group basic size='small'>
        <Button icon='pencil' onClick={() => window.location.href='/user-management/edit/'+props.userId} />
        <Button icon='eye' />
        <Button icon='mail' />
    </Button.Group>
)

export default class UsersList extends React.Component{
    constructor(){
        super();
        this.state = {value : 'yes'}
    }
    render(){
        return(
            <main id="main">
                <Sidebar.Pushable>
                    <Sidebar animation='push' direction='left' visible inverted>
                        <MainMenu/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <div id="content-wrapper">
                            <MainHeader/>
                            <MainHeading heading={"User Management"}/>
                            <div className="content-area">
                                {/*Container - [Start]*/}
                                <Container>
                                    <Segment color='grey'>
                                        <Form>
                                            <Table size='small' celled>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell textAlign={'center'} className="basecolor1">Name</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign={'center'} className="basecolor1">Email</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign={'center'} className="basecolor1">Mobile</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign={'center'} className="basecolor1">Roles</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign={'center'} className="basecolor1">Actions</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={1}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={2}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell className="lh-13">Terry S. Berry <small className="dp-block lightgray">United States</small></Table.Cell>
                                                        <Table.Cell textAlign={'center'}>terry@domain.com</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>+971 55 1234567</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>Administrator, Country manager</Table.Cell>
                                                        <Table.Cell textAlign={'center'}>
                                                            <UsersListActions userId={3}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                </Table.Body>
                                                <Table.Footer>
                                                    <Table.Row>
                                                        <Table.HeaderCell colSpan={6} textAlign={'center'}>
                                                            <Pagination defaultActivePage={5} totalPages={10} />
                                                        </Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Footer>
                                            </Table>
                                        </Form>
                                    </Segment>
                                </Container>
                                {/*Container - [/end]*/}
                            </div>
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </main>
        )
    }
}