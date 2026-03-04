import React from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export const menu = [
    { label: "Home", colorText: "text-white", url: "#" },
    { label: "About", colorText: "text-secondary", url: "#" },
    { label: "Services", colorText: "text-secondary", url: "#" },
    { label: "Contact", colorText: "text-secondary", url: "#"}
];

const Navbar = (props) => {

  const links = props.items.map((element) => {

    return (
        <li class="nav-item">
            <a class={`nav-link ${element.colorText}`} aria-current="page" href={element.url}>
                {element.label}
            </a>
        </li>
    )
  });

  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
                {links}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;