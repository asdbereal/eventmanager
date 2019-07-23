import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './components/events/Events';
import AddEvent from './components/events/AddEvent';
import EditEvent from './components/events/EditEvent';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App" >
            <Header branding="Event Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />
                <Route exact path="/event/edit/:id" component={EditEvent} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />

              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
