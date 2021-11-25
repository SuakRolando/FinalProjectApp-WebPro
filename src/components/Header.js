import React from 'react';
import '../assets/styless.css';

const Header = () => {
  return(
    <header className="bg-lilac py-5">
      <div className="container px-4 px-lg-5 my-2">
        <div className="text-center text-light">
          <h1 className="display-4 fw-bolder">Covid-19 App</h1>
          <p className="lead fw-normal text-white-50 mb-0">Find cases of covid in Indonesia</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
