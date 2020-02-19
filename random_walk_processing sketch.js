let x;
let y;
let gameOn;
let max;
let min;
let max2;
let min2;
let intervalX;
let intervalY;

function minMaxSetup() {
intervalX = Math.random() * (max2 - min2) + min2;
intervalY = Math.random() * (max - min) + min;
}


function setup() {
createCanvas(700, 400);
x = width /2 ;
y = height /2;
gameOn = true;

max = 4;
min = -4;

max2 = 6;
min2 = -6;

intervalX = Math.random() * (max2 - min2) + min2;
intervalY = Math.random() * (max - min) + min;
setInterval(minMaxSetup, 1000);
}

function draw() {

console.log(`width: ${width}, height:${height}`);
console.log(`X: ${x}, Y:${y}`);

background(25);
background(220);

  if( gameOn ){
  x += intervalX;
  y += intervalY;
  }


//   x boundary check
if( x > width ){
  console.log(" x > width ");
  x = 0; 
}

if( x < 0 ){
  console.log(" x < 0 ");
  x = width;
}
  

// y boundary check
if( y > height )
  y = 0;
if( y < 0 )
  y = height;



ellipse(x,y,80,80);
}