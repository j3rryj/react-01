import React from "react";

const Person = ({
  name = "n/a",
  height = "n/a",
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld = "n/a",
  films,
  species,
  vehicles,
  starships,
  created,
  edited,
  url
}) => (
  <>
    <div>Name: {name}</div>
    <div>Height: {height}</div>
    <div>Homeworld: {homeworld}</div>
  </>
);

export default Person;
