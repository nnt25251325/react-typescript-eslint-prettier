import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <ul className="c-main-header">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MainHeader;
