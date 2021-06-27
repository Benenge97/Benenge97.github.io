import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Projects from "./components/projects";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Nav from "./components/nav";


function App() {
  return (
    <Router>
      <Nav />
        <Switch>
          <Route component= {About} path="/about">
          </Route>
          <Route component= {Contact} path="/contact">
          </Route>
          <Route component= {Home} path="/">
          </Route>
          <Route component= {Projects} path="/Projects">
          </Route>
        </Switch>
    </Router>
  )
}

export default App;