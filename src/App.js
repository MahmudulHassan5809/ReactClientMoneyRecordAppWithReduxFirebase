import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Switch }   from "react-router-dom";
import { Provider }  from 'react-redux';
import store  from './store';
import { UserIsAuthenticated , UserIsNotAuthenticated}  from './helpers/auth';

import './App.css';

import AppNavbar  from './components/layout/AppNavbar';
import Dashboard  from './components/layout/Dashboard';
import AddClients  from './components/clients/AddClients';
import ClientDetails  from './components/clients/ClientDetails';
import EditClient  from './components/clients/EditClient';
import Login  from './components/auth/Login';
import Register  from './components/auth/Register';
import Settings  from './components/settings/Settings';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <AppNavbar />
        <div className="container">
           <Switch>
           	<Route exact path="/" component={ UserIsAuthenticated(Dashboard) } />
            <Route exact path="/client/add" component={ UserIsAuthenticated(AddClients) } />
            <Route exact path="/client/:id" component={ UserIsAuthenticated(ClientDetails) } />
            <Route exact path="/login" component={ UserIsNotAuthenticated(Login)} />
            <Route exact path="/settings" component={ UserIsAuthenticated(Settings) } />
            <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
            <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
           </Switch>
        </div>
      </div>
    </Router>
    </Provider>
    );
  }
}

export default App;
