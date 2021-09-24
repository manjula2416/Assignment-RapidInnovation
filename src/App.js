import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeKit from './Components/SectionOne/WelcomeKit';
import BuyNow from './Layout/BuyNow';
import Layout from './Layout/Layout';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={WelcomeKit} />
            <Route path='/buy' component={BuyNow} />
          </Layout>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
