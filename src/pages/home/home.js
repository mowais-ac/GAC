import React from 'react';
//Global
import { Sidebar, Segment, Container, Grid, Form, Input, Radio, Dropdown, Select, TextArea, Icon, Button, Table} from 'semantic-ui-react';
import MainHeader from "../../components/common/header/header";
import MainMenu from '../../components/common/header/MainMenu/MainMenu';
import './home.sass';
import {currencyList, MainHeading} from '../../modules/modules';

export default class Home extends React.Component{
    render(){
        return(
            <main id="main">
                <Sidebar.Pushable>
                    <Sidebar.Pusher>
                        <div id="content-wrapper">
                            <MainHeader/>
                            <MainHeading heading={'Login'}/>
                            <div className="content-area">
                                {/*Container - [Start]*/}
                                <Container text>
                                    <Segment color='grey'>
                                        <Form>
                                            <Form.Group  widths={'equal'}>
                                                <Form.Field control={Input} label={'Username / Email'} placeholder={'Username / Email'}/>
                                            </Form.Group>
                                            <Form.Group  widths={'equal'}>
                                                <Form.Field control={Input} label={'Password'} placeholder={'********'}/>
                                            </Form.Group>
                                            <Form.Group className="dp-table mauto">
                                                <Form.Button primary size={'big'}>Save</Form.Button>
                                            </Form.Group>
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