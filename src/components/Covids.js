import React from "react";
import CovidItems from "./CovidItems";
import { useState, useEffect } from "react";

const Covids = () => {
  const [text, setText] = useState("");
  const [covids, setCovids] = useState([]);

  useEffect(() => {
    fetch("https://covid19-api.com/country/all")
      .then((response) => response.json())
      .then((data) => setCovids(data));

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://covid19-api.com/country?name=${text}`)
      .then((response) => response.json())
      .then((data) => setCovids(data));

    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <section className="py-5">
      <div className="container py-5">
        <h2 className="text-dongker">Search Country :</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control btn-light shadow"
            value={text}
            onChange={handleChange}
            placeholder="e.g indonesia"
          />
        </form>

        <div className="row row-cols-2   justify-content-center my-3">
          {covids.map((covid) => (
            <CovidItems key={covid.code} covid={covid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Covids;
