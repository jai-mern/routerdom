// App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="active">All</NavLink></li>
            <li><NavLink to="/full-stack" activeClassName="active">Full Stack Development</NavLink></li>
            <li><NavLink to="/data-science" activeClassName="active">Data Science</NavLink></li>
            <li><NavLink to="/cyber-security" activeClassName="active">Cyber Security</NavLink></li>
            <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/full-stack" component={FullStack} />
          <Route path="/data-science" component={DataScience} />
          <Route path="/cyber-security" component={CyberSecurity} />
          <Route path="/career" component={Career} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
