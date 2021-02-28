import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { name, capital, population, flag } = props.country;
  return (
    <div className="country-detail">
      <h2>This is {name}</h2>
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
      <img className="flag-img" src={flag} alt="" />
    </div>
  );
};

export default Country;
