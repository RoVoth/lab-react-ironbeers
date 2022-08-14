import React from "react";

function NewBeer() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" />
        <br />
        <label htmlFor="description">Description</label>
        <textarea type="text" />
        <br />
        <label htmlFor="first_brewed ">First Brewed</label>
        <input type="text" />
        <br />
        <label htmlFor="brewers_tips ">Brewers Tips</label>
        <input type="text" />
        <br />
        <label htmlFor="attenuation_level ">Attenuation Level</label>
        <input type="number" />
        <br />
        <label htmlFor="contributed_by ">Contributed By</label>
        <input type="text" />
      </form>
    </div>
  );
}

export default NewBeer;
