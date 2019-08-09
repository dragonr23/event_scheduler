import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

function Header() {

    return (
      <header className="Header">
        <nav className="navbar navbar-light bg-light">
          <NavLink to='/' className="navbar-brand">Schedule</NavLink>
          <NavLink to='/events' className="navbar-brand">Events</NavLink>

        </nav>
      </header>
    );

}

export default Header;
