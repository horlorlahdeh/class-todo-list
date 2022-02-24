import React from 'react';

const Header = ({ title, description }) => {
  return (
    <header className='App-header'>
      <h1 className='mt-5 text-center'>{title}</h1>
      <p className='text-center'>{description}</p>
    </header>
  );
};

export default Header;
