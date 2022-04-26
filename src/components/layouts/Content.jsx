import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../views/exemples/About";
import Home from "../../views/exemples/Home";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </main>
);
export default Content;
