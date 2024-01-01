import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browser from "./components/Browser";
import Arrived from "./components/Arrived";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";
import Clients from "./components/Clients";


function App() {
  return (
      <>
        <Header/>
        <Hero/>
        <Browser/>
        <Arrived/>
        <Clients />
        <AsideMenu />
        <Footer />
      </>
  );
}

export default App;
