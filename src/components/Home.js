import React from "react";
import {username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

/***import multiple variables**
//import *from syntax - imports all of the variables that have been exported from a given module.
src/ColoradoStateParks.js
import * as RMFunctions from "./parks/RockyMountain";
console.log(RMFunctions.trees);
// => "Aspen and Pine"
RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"
RMFunctions.elevation();
// => Attempted import error
*/
