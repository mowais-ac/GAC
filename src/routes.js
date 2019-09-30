import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/home/home";
import UsersList from "./pages/Users/UsersList";
import UserEdit from "./pages/Users/UserEdit";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route activeClassName="active" path={"/"} exact component={Home}/>
            <Route activeClassName="active" path={"/home"} exact component={Home}/>
            <Route activeClassName="active" path={"/user-management"} exact component={UsersList}/>
            <Route activeClassName="active" path={"/user-management/edit/:id"} exact component={UserEdit}/>
        </Switch>
    </BrowserRouter>
);