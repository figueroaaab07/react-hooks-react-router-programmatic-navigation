import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function onLogout() {
    setIsLoggedIn(false);
  }

  function onLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {/* <Navbar setIsLoggedIn={setIsLoggedIn} /> */}
      <Navbar onLogout={onLogout} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
