import React from "react";
import Content from "../components/layouts/Content";
import Menu from "../components/layouts/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./exemples/Home";
import About from "./exemples/About";

const App = (props) => (
  <div className="App">
    <BrowserRouter>
        <Menu></Menu>
        <Content></Content> 
    </BrowserRouter>
  </div>
);
export default App;
