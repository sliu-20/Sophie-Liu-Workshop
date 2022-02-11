/*
   your PPTASK:

   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.

    		Write with your future self or teammates in mind.

    		If you find yourself falling out of flow mode, consult
    		other teams
    		MDN

   A few comments have been pre-filled for you...

   (delete this block comment once you are done)
*/

// Team Phantom Tollbooth :: Sophie Liu, Rayat Roy
// SoftDev pd0
// K29: DOMfoolery++
// 2022-02-09
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
// FAC

let fact = (n) => {
  if (n == 0) {
    return 1;
  }
  else {
    return (fact(n - 1) * n);
  }
}

// prints fact 5 directly into dev console; gives 120, fact works!
console.log(fact(5));

let fib = function(n) {
  if (n <= 1){
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
}
console.log(fib(5));

// GCD
let gcd = function(a, b) {
  if (a < 0){
    return gcd (a*-1, b);
  }
  if (b < 0){
    return gcd (a, b*-1);
  }
  if (a == 0){
    return b;
  }
  if (a > b) {
    return gcd(b, a)
  }
  let r = b % a;
  if (r == 0) {
    return a;
  }
  else {
    return gcd(r, a);
  }
}
var r = document.getElementById('result');
let fib_test = document.getElementById('fib');

let fib_button = function(){
  let random = Math.floor(Math.random() * 21);
  r.innerHTML = "Fibonacci number " + random + " is: " + fib(random);
};
fib_test.addEventListener('click', fib_button);

let fact_test = document.getElementById('fact');
let fact_button = function(){
  let random = Math.floor(Math.random() * 11);
  r.innerHTML = random + " factorial is: " + fact(random);
};
fact_test.addEventListener('click', fact_button);

let gcd_test = document.getElementById('GCD');
let gcd_button = function(){
  let random1 = Math.floor(Math.random() * 101);
  let random2 = Math.floor(Math.random() * 101);
  r.innerHTML = "The greatest common denominator between " + random1+ " and " + random2 + " is: " + gcd(random1,random2);
};
gcd_test.addEventListener('click', gcd_button);

let try_test = document.getElementById('trying');
let try_button = function() {
  let a = document.createElement("div");
  a.innerHTML = "hi?";
  let rand = Math.floor(Math.random() * 3);
  if (rand == 0) {
    a.setAttribute('Class', "red");
  }
  else if (rand == 1) {
    a.setAttribute('Class', "blue");
  }
  else {
    a.setAttribute('Class', "green");
  }
  let b = document.getElementById("divTest");
  b.appendChild(a);
}
try_test.addEventListener('click', try_button);
