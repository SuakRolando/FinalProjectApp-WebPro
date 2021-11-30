import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../assets/styless.css';

const About = () => {
  return (
    <>
      <Navigation />

      <div className="container my-5 text-dongker">
        <h1>About this Application</h1>
        <h5 className="fw-light mb-5">
          This Web App is made to figure out the infromations entirely about
          cases of Covid-19 which exist over the World.
        </h5>
        <h1>About me</h1>
        <h5 className="fw-normal">
          Full Name :<span className="fw-light"> Pandelaki, Mikha Patricia</span>
        </h5>
        <h5 className="fw-normal">
          NIM :<span className="fw-light"> 105011910056</span>
        </h5>
        <h5 className="fw-normal">
          Program Study :<span className="fw-light"> Information System</span>
        </h5>
      </div>
      
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};

export default About;
