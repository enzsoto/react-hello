import React from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Jumbotrom from "./Jumbotrom";
import Card from "./Cards";
import Footer from "./Footer";

const ContainerBody = () => {

    return(
        <>
        <div className="container pt-4">
            <Jumbotrom />

         <div className="row mt-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    
        </div>

        <Footer />
    </>

        

        

    );

};

export default ContainerBody;