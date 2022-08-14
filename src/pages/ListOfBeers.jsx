import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListOfBeers() {
  const [beers, setBeers] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllTheBeers();
  }, []);

  const getAllTheBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeers(response.data);
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
      <h2>List Of Beers</h2>
      {beers.map((eachbeer) => {
        return (
          <div>
            <Link to={`/beers/${eachbeer._id}`}>
              <div className="card">
                <div>
                  <img
                    src={eachbeer.image_url}
                    alt={eachbeer.name}
                    style={{ width: "100px" }}
                  />
                </div>
                <div>
                  <h3>{eachbeer.name}</h3>
                  <h4>{eachbeer.tagline}</h4>
                  <p>
                    <strong>Create by:</strong> {eachbeer.name}
                  </p>
                  <hr />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListOfBeers;

// asi viene la data
/*{
    "image_url": "https://images.punkapi.com/v2/keg.png",
    "_id": "5fb6a86265b9c209606e10e2",
    "name": "Buzz",
    "tagline": "A Real Bitter Experience.",
    "first_brewed": "09/2007",
    "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    "abv": 4.5,
    "ibu": 60,
    "target_fg": 1010,
    "target_og": 1044,
    "ebc": 20,
    "srm": 10,
    "ph": 4.4,
    "attenuation_level": 75,
    "volume": {
        "value": 20,
        "unit": "liters"
    },
    "boil_volume": {
        "value": 25,
        "unit": "liters"
    },
    "method": {
        "mash_temp": [
            {
                "temp": {
                    "value": 64,
                    "unit": "celsius"
                },
                "duration": 75
            }
        ],
        "fermentation": {
            "temp": {
                "value": 19,
                "unit": "celsius"
            }
        },
        "twist": null
    },
    "ingredients": {
        "malt": [
            {
                "name": "Maris Otter Extra Pale",
                "amount": {
                    "value": 3.3,
                    "unit": "kilograms"
                }
            },
            {
                "name": "Caramalt",
                "amount": {
                    "value": 0.2,
                    "unit": "kilograms"
                }
            },
            {
                "name": "Munich",
                "amount": {
                    "value": 0.4,
                    "unit": "kilograms"
                }
            }
        ],
        "hops": [
            {
                "name": "Fuggles",
                "amount": {
                    "value": 25,
                    "unit": "grams"
                },
                "add": "start",
                "attribute": "bitter"
            },
            {
                "name": "First Gold",
                "amount": {
                    "value": 25,
                    "unit": "grams"
                },
                "add": "start",
                "attribute": "bitter"
            },
            {
                "name": "Fuggles",
                "amount": {
                    "value": 37.5,
                    "unit": "grams"
                },
                "add": "middle",
                "attribute": "flavour"
            },
            {
                "name": "First Gold",
                "amount": {
                    "value": 37.5,
                    "unit": "grams"
                },
                "add": "middle",
                "attribute": "flavour"
            },
            {
                "name": "Cascade",
                "amount": {
                    "value": 37.5,
                    "unit": "grams"
                },
                "add": "end",
                "attribute": "flavour"
            }
        ],
        "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
        "Spicy chicken tikka masala",
        "Grilled chicken quesadilla",
        "Caramel toffee cake"
    ],
    "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    "contributed_by": "Sam Mason <samjbmason>",
    "expireAt": "2022-08-14T20:15:22.675Z"
}*/
