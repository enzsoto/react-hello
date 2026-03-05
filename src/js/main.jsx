import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import Navbar, { menu } from "./components/Navbar";
import ContainerBody from "./components/ContainerBody";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar items={menu} />
    <ContainerBody />
  </React.StrictMode>,
);
