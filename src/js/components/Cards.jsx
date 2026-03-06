import React from "react";

const Card = () => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src="https://placehold.co/500x325/bg-light/777?text=500+x+325"
          className="card-img-top"
        />

        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;