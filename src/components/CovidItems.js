import React from "react";
import "../assets/styless.css";

const CovidItems = (props) => {
  return (
    <div className="col my-4 ">
      <div className="card h-100 shadow">
        <div className="card-body px-4">
          <div className="text-center">
            <h5 className="fw-bolder text-dongker">{props.covid.country}</h5>
          </div>
        </div>

        <div className="text-center text-dongker bg-dongker mb-4 mx-3 py-2 rounded shadow">
          <h3 className="display-4 fw-bolder">{props.covid.confirmed}</h3>
          <h6>Confirmed</h6>
        </div>

        <div className="collapse " id="showDetails">
          <div className="text-center text-light bg-success mb-4 mx-3 py-2 rounded shadow">
            <h3 className="display-4 fw-bolder">{props.covid.recovered}</h3>
            <h6>Recovered</h6>
          </div>
          <div className="text-center text-light bg-danger mb-4 mx-3 py-2 rounded shadow">
            <h3 className="display-4 fw-bolder">{props.covid.deaths}</h3>
            <h6>Deaths</h6>
          </div>
          <div className="text-center text-light bg-warning mb-4 mx-3 py-2 rounded shadow">
            <h3 className="display-4 fw-bolder">{props.covid.critical}</h3>
            <h6>Critical</h6>
          </div>
          <div className="text-center text-light bg-dark mb-4 mx-3 py-4 rounded shadow">
            <h6>
              Last Change:
              <span className="fw-light">{props.covid.lastChange}</span>
            </h6>
            <h6>
              Last Update:
              <span className="fw-light">{props.covid.lastUpdate}</span>
            </h6>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark text-dongker"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#showDetails"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidItems;