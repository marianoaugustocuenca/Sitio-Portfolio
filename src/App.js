
import React from "react";
/*import "./App.css";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/homePage';
import NosotrosPage from './pages/nosotrosPage';
import NovedadesPage from './pages/novedadesPage';
import ContactoPage from './pages/contactoPage';
import GaleriaPage from './pages/galeriaPage';

function App() {
  return (
     <Router>
     <Header />
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/galeria" exact element={<GaleriaPage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

