import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, flags, population } = country;
  const [visited, setVisited] = useState(false);

  const handleBtn = () => {
    // console.log(handleBtn);
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // setVisited(visited ? false : true);
    setVisited(!visited);
    // console.log("handle visited countries");
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={flags.flags.png} alt={flags.flags.alt} />
      <h2>Country : {name.common}</h2>
      <h3>Population: {population.population} </h3>
      <h4>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </h4>
      <button onClick={handleBtn}>{visited ? "Visited" : "Not Visited"}</button>
      <button onClick={() => handleVisitedFlag(flags.flags.png)}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
