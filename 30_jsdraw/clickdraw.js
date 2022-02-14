//   Team (Liu)^2 :: Sophie Liu, Qina Liu
//   SoftDev pd2
//   K30 -- ???
//   2022-02-14
// --------------------------------------------------

// retrieve node in DOM via ID
let c = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
let ctx = c.getContext("2d");

//init global state var
var mode = "rect";

var bToggler = document.getElementById("buttonToggle");
var clearB = document.getElementById("buttonClear");

var toggleMode = function(e) {
  e = mode;
  if (e == "rect") {
    bToggler.innerHTML = "Circle";
    mode = "circle";
    console.log(mode);
  }
  else {
    bToggler.innerHTML = "Rectangle";
    mode = "rect";
    console.log(mode);
  }
}


bToggler.addEventListener('click', toggleMode);
