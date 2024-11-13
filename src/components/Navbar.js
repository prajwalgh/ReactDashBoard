import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation without reloading the page

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/claims">Claims</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
