import React from "react";
import "../assets/styless.css";

const Header = () => {
  return (
    <header className="bg-dongker py-5">
      <div className="container px-4 px-lg-5 my-2">
        <div className="text-center text-dongker">
          <h1 className="display-4 fw-bolder">Covid-19 App</h1>
          <p className="lead fw-normal text-dongker-50 mb-0">
            Find out cases of Covid-19 in the World
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
