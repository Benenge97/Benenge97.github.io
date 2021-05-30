import React from "react";
import image from "./Beholi.jpeg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
  <main>
    <h2>Welcome!</h2>;
    <img src={image} className= "self portrait" alt= "portrait" />
    </main>
  );
}

function About() {
  return <h2>About me</h2>;
}

function Contact() {
  return <h2>Contact me</h2>;
}

function Projects() {
  return <h2>Some art works</h2>
}