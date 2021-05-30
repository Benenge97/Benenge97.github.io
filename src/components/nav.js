import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Nav() {
    return (
        <header>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/" exact>Home</Link>
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
          </div>
        </header>
      )
}