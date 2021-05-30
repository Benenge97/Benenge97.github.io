import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/About";
import Projects from "./components/projects";
import Nav from "./components/nav";
import image from "./Beholi.jpeg";

function App() {
  return (
    <div className= "container">
    <Router>
      <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route component= {About} path="/about">
            <About />
          </Route>
          <Route component= {Contact} path="/contact">
            <Contact />
          </Route>
          <Route component= {Home} path="/" exact>
            <Home />
          </Route>
          <Route component= {Projects} path="/projects">
            <Projects />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;