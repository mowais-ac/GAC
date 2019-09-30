import React from 'react';
import {NavLink} from 'react-router-dom';
//Global
import { Sidebar, Grid, Segment, Container, Divider, Pagination, Form, Input, Radio, Checkbox, Label, Dropdown, Select, TextArea, Icon, Button, Table} from 'semantic-ui-react';
import MainHeader from "../../components/common/header/header";
import MainMenu from '../../components/common/header/MainMenu/MainMenu';
import './UsersList.scss';
import {MainHeading, regions, companies, countryOptions, familyName, Relationship, gender} from '../../modules/modules';

import {DateInput} from 'semantic-ui-calendar-react';

export default class UserEdit extends React.Component{
    constructor(){
        super();
        this.state = {
            value : 'yes',
            dateOfBirth: '',
            defaultRegions: [1,2],
            defaultCountries: [2,3],
        }
    }
    render(){
        const {defaultRegions, defaultCountries} = this.state;
        return(
            <main id="main">
                <Sidebar.Pushable>
                    <Sidebar animation='push' direction='left' visible inverted>
                        <MainMenu/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <div id="content-wrapper">
                            <MainHeader/>
                            <MainHeading heading={"Terry S. Berry"}/>
                            <div className="content-area">
                                {/*Container - [Start]*/}
                                <Container>
                                    <Grid>
                                        <Grid.Row columns={2}>
                                            <Grid.Column>
                                                <Segment color='grey'>
                                                    <h2>Client</h2>
                                                    <Form>
                                                        <Form.Group>
                                                            <Form.Field control={Select} label='Family name' options={familyName} placeholder='Mr. / Mrs. / MS.' width={6} value={3} />
                                                            <Form.Field control={Input} label='First name' placeholder='First name' width={10} value={'Terry S. Berry'} />
                                                        </Form.Group>
                                                        <Form.Group widths={'equal'}>
                                                            <Form.Field control={Select} label={'Gender'} options={gender} placeholder={'Gender'} value={2}/>
                                                            <Form.Field control={Input} type={'number'} label={'Date of birth'} placeholder={'MM/DD/YYYY'} />
                                                            <Form.Field control={Input} type={'number'} label={'Age'} placeholder={'Your age'}/>
                                                        </Form.Group>
                                                        <h4>Contact Details</h4>
                                                        <Form.Group widths={'equal'}>
                                                            <Form.Field control={Input} label={'Home phone'} placeholder={'Home phone'}/>
                                                            <Form.Field control={Input} label={'Work phone'} placeholder={'Work phone'}/>
                                                        </Form.Group>
                                                        <Form.Group widths={'equal'}>
                                                            <Form.Field control={Input} label={'Mobile'} placeholder={'Mobile'}/>
                                                            <Form.Field control={Input} type={'Email'} label={'Email'} placeholder={'mail@domain.com'}/>
                                                        </Form.Group>
                                                        <Form.Group widths={'equal'}>
                                                            <Form.Field search control={Select} label={'Nationality'} placeholder={'Please Select'} options={countryOptions}/>
                                                        </Form.Group>
                                                        <h4 className={'left floated'}>Assigned Roles</h4>

                                                        <Checkbox label='Administrator'/>
                                                        <Divider/>

                                                        <Checkbox label='Lead investigator'/>
                                                        <Divider/>

                                                        <Checkbox label='Regional Manager'/>
                                                        <Dropdown placeholder='Select one or more region' fluid multiple selection options={regions} defaultValue={defaultRegions} />
                                                        <Divider/>

                                                        <Checkbox label='Company Manager'/>
                                                        <Dropdown placeholder='Select one or more companies' fluid multiple selection options={companies} defaultValue={defaultCountries} />
                                                        <Divider/>

                                                        <Checkbox label='Quality Manager'/>
                                                        <Dropdown placeholder='Select one or more companies' fluid multiple selection options={companies} />
                                                        <Divider/>

                                                        <Checkbox label='Security Manager'/>
                                                        <Dropdown placeholder='Select one or more companies' fluid multiple selection options={companies} />
                                                        <Divider/>

                                                        <Form.Group>
                                                            <Form.Button primary size={'big'}>Submit</Form.Button>
                                                        </Form.Group>
                                                    </Form>
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
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