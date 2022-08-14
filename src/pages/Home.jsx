import React from "react";
import BeersImage from "../assets/beers.png";
import RandomBeerImage from "../assets/random-beer.png";
import NewBeerImage from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/beers">
          <img src={BeersImage} alt="ListOfBeers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptatibus accusantium excepturi consequuntur quae exercitationem
            est maiores rem consectetur! Nesciunt, esse enim illo cumque autem
            deserunt dolorum ex nulla pariatur.
          </p>
        </Link>
        <hr />
      </div>
      <div>
        <Link to="/random-beer">
          <img src={RandomBeerImage} alt="ListOfBeers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            aut nostrum magnam temporibus nobis soluta eius earum molestias
            consequatur excepturi! Ipsum excepturi quas ratione eaque possimus.
            Quae tenetur error necessitatibus.
          </p>
        </Link>
        <hr />
      </div>
      <div>
        <Link to="/new-beer">
          <img src={NewBeerImage} alt="ListOfBeers" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est.
            Inventore sit minima ullam est recusandae dignissimos, enim incidunt
            magnam eius alias nisi ipsam placeat sequi, esse cupiditate sapiente
            a.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
