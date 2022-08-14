import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getARandomBeer();
  }, []);

  const getARandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      setRandomBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };
  if (isFetching) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <div>
        <img
          src={randomBeer.image_url}
          alt={randomBeer.name}
          style={{ width: "100px" }}
        />
      </div>
      <div>
        <h2>{randomBeer.name}</h2> <h3>{randomBeer.attenuation_level}</h3>
      </div>
      <div>
        <h4>{randomBeer.tagline}</h4> <h4>{randomBeer.first_brewed}</h4>
      </div>
      <p>{randomBeer.description}</p>
      <div>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
