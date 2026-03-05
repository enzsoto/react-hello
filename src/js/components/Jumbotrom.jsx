import React from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Jumbotrom = () => {
  return (
    <div class="row">
        <div class="col-12 p-4 mb-4 bg-light rounded-3">
            <div class="container-fluid py-4">
                <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
                <p class="col-md-12 fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                exercitationem repudiandae dignissimos enim unde maxime! Porro,
                laudantium quaerat totam, error, tenetur eos commodi enim iste
                aspernatur quod magni. Sit, consectetur!
                </p>
                <button class="btn btn-primary btn-lg" type="button">
                Call to action!
                </button>
            </div>
        </div>
    </div>
  );
};

export default Jumbotrom;
