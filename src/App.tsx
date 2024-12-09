import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './page/about';
import Home from './page/home';
import Users from './page/users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
