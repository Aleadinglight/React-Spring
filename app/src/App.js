//https://github.com/oktadeveloper/okta-spring-boot-react-crud-example
import React, { Component } from 'react';
import './App.css';
import GroupEdit from './components/GroupEdit';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './components/GroupList';
import UserList from './components/UserList';
import EventList from './components/EventList';
import UserEdit from './components/UserEdit';
import EventEdit from './components/EventEdit';
import EventUser from './components/EventUser';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/users' exact={true} component={UserList}/>
          <Route path='/events' exact={true} component={EventList}/>
          <Route path='/users/:id' component={UserEdit}/>
          <Route path='/groups/:id' component={GroupEdit}/>
          <Route path='/events/:id' component={EventEdit}/>
          <Route path='/eventusers/:id' component={EventUser}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
