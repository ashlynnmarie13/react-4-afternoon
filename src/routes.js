import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

// Now that we have all of our dependencies in routes.js, we can use an export
// default statement to export a router. We'll need an exact route at
// / to load the Home component and a route at /about to load the About component.
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={ClassList} path="/classlist/:class" />
    <Route component={Student} path="/student/:id" />
  </Switch>
);
