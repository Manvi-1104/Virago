import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/pages/Services.js';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import '@fortawesome/fontawesome-free/css/all.css';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />}></Route> 
         <Route path="services" element={<Services />}></Route> 
          <Route path='/products' element={<Products />}> </Route>
          <Route path='/sign-up' element={<SignUp/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}
// <Route path="/" element={<Home />}></Route> 


export default App;