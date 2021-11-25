import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styless.css';

const Home = () => {
  return(
    <div className="bg-all">
      <Navigation />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
