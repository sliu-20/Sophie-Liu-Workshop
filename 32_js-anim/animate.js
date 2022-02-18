// Team Electric Bread :: Sophie Liu, Roshani Shrestha
// SoftDev pd2
// K32 -- More Moving Parts
// 2022-02-17r
// time spent: 45 minutes

// model for HTML5 canvas-based animation

// SKEELTON

//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON
var movieButton = document.getElementById("buttonMovie"); // GET MOVIE BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = 'purple';

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.clientWidth, c.clientHeight); //clears canvas
};

var radius = 0;
var growing = true;
var growingX = true;
var growingY = true;

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  clear();
  window.cancelAnimationFrame(requestID);
  ctx.beginPath();
  ctx.arc(c.clientWidth/2, c.clientHeight/2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if (radius === (Math.min(c.clientWidth,c.clientHeight) / 2)) {
    growing = false;
  }
  if (radius === 0) {
    growing = true;
   }
  if (growing) {
    radius++;
  }
  else {
    radius--;
  }
  requestID = window.requestAnimationFrame(drawDot);
};

var dvdX;
var dvdY;
var movie = () => {
  console.log("movie");
  clear();
  window.cancelAnimationFrame(requestID);
  var dvdImage = new Image(100);
  dvdImage.src = 'logo_dvd.jpg';
  ctx.drawImage(dvdImage, dvdX, dvdY, 100, 50);
  if (dvdX === c.clientWidth - 100) {
    growingX = false;
  }
  if (dvdX === 0) {
    growingX = true;
  }
  if (dvdY === c.clientHeight - 50) {
    growingY = false;
  }
  if (dvdY === 0) {
    growingY = true;
  }
  if (growingX) {
    dvdX++;
  }
  else {
    dvdX--;
  }
  if (growingY) {
    dvdY++;
  }
  else {
    dvdY--;
  }
  requestID = window.requestAnimationFrame(movie);
};

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
movieButton.addEventListener( "click", function (event) {
  dvdX = Math.floor(Math.random() * (c.clientWidth - 100));
  dvdY = Math.floor(Math.random() * (c.clientHeight - 50));
  movie();
});
