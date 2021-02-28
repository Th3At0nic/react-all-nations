import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  const { name, capital, population, flag } = props.country;
  const handleAddCountry = props.handleAddCountry;
//   console.log(handleAddCountry);

  return (
    <div className="country-detail">
      <h2>This is {name}</h2>
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
      <img className="flag-img" src={flag} alt="" />
      <br />
      <br />
      <button
        onClick={() => handleAddCountry(props.country)}
        className="country-btn"
      >
        Country Detail
      </button>
    </div>
  );
};

export default Country;
