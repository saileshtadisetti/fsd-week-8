import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={dark ? "dark app" : "app"}>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/user/1">User Profile</NavLink>

          <button onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/user/:userId"
            element={<UserProfile />}
          />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;