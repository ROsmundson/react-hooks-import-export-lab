**component
function ColoradoStateParks() {
  return <h1>Colorado State Parks!</h1>;
}

**File Structure**
├── README.md
├── public
└── src
     ├── App.js
     ├── ColoradoStateParks.js
     └── index.js

**export default**
rc/parks/howManyParks.js
function howManyParks() {
  console.log("42 parks!");
}
export default howManyParks;

**import keyword to access exported variable**
src/ColoradoStateParks.js
import React from "react";
import howManyParks from "./parks/howManyParks";
function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

**component**
src/parks/MesaVerde.js
import React from "react";
function MesaVerde() {
  return <h1>Mesa Verde National Park</h1>;
}
export default MesaVerde;

**import component to another file**
src/ColoradoStateParks.js
import React from "react";
import MesaVerde from "./parks/MesaVerde";
function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
export default ColoradoStateParks;


**Named Exports**
src/parks/RockyMountain.js
const trees = "Aspen and Pine";
function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}
function elevation() {
  console.log("9583 ft");
}
// named export syntax:
export { trees, wildlife };

**import named exports**
src/ColoradoStateParks.js
import { trees, wildlife } from "./parks/RockyMountain";
console.log(trees);
// => "Aspen and Pine"
wildlife();
// => "Elk, Bighorn Sheep, Moose"

**write named exports next to function definition**
// src/parks/RockyMountain.js
export const trees = "Aspen and Pine";

export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
  //error

**import multiple variables**
//import *from syntax - imports all of the variables that have been exported from a given module.
src/ColoradoStateParks.js
import * as RMFunctions from "./parks/RockyMountain";
console.log(RMFunctions.trees);
// => "Aspen and Pine"
RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"
RMFunctions.elevation();
// => Attempted import error

**file structure**
└── src
     ├── parks
     |   ├── RockyMountain.js
     |   ├── MesaVerde.js
     |   └── howManyParks.js
     ├── ColoradoStateParks.js
     └── index.js

**go from ColoradoStateParks.js to RockyMountain.js**
//stay in src directory, then navigate to parks, where RockyMountain.js is

**import { variable } from syntax**
src/ColoradoStateParks.js
import { trees, wildlife } from "./parks/RockyMountain";
console.log(trees);
// > "Aspen and Pine"
wildlife();
// > "Elk, Bighorn Sheep, Moose"

**rename variables inside import statement**
src/ColoradoStateParks.js
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
console.log(parkTrees);
// > "Aspen and Pine"
parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

**Importing Node Modules**
src/ColoradoStateParks.js
//Any time we are using code from an npm package, we must also import it in whatever file we're using it in.
->import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
