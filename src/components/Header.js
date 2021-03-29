import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Accordion
      </Link>
      <Link to='/dropdown' className='item'>
        Dropdown
      </Link>
      <Link to='/list' className='item'>
        Search
      </Link>
    </div>
  );
};

export default Header;
