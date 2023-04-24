import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return(
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

