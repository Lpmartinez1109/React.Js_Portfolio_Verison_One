import React from 'react';
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects"
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
