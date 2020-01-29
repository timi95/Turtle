
import { Nouns } from "./nouns";
import { Adjectives } from "./adjectives";

interface RGBA_colour {
  red:number;
  green:number;
  blue:number;
  alpha:number;
}

// Agent behaviour is  sense - plan - act cycle
class Turtle_V2 {
  private myName:string;
  private xcoordinate:number;
  private ycoordinate:number;
  private angle:number;
  private ctx:any;
  private fillColor:any;

  private colour:RGBA_colour;

  private centreCoordinate:number[];
  private bodyArea:number;

 constructor() { 
  console.log("A new Turtle was created!"); 
    this.myName = this.generateName();
  }

  // ********  Low level functions  ***************
  generateName(): string {
    let nameArray:string[] = Nouns.nouns;
    let adjectiveArray:string[] = Adjectives.adjectives;
    let randomSeed:number = Math.random()*adjectiveArray.length;
    let randomSeed2:number = Math.random()*nameArray.length;

    return `The ${adjectiveArray[randomSeed]} ${nameArray[randomSeed2]}`;
  }

  draw(){
    console.log(`Turtle ${this.myName} has been drawn !`);
    
  }

  checkPosition(){
  }
  // rotate orientation delta degrees counterclockwise
  turnLeft( delta:number) {
  }
  // rotate orientation delta degrees clockwise
  turnRight( delta:number) {
  }

  line(oldx:number, oldy:number, x:number, y:number){
  }
  // move forward the given amount, with the pen down
  goForward(step:number) {
  }


  // ************** Turtle behaviours *******************

  // A random walk for this turtle
  wander(){
    console.log(`${this.myName} the turtle is wandering`);
    
  }
  follow( myPosition:number[], followingPosition:number[] ){
    console.log(`${this.myName} the turtle is following: ${followingPosition}`);
    
  }

}


// setting up a canvas and grabbing its 2D context
let canvas = <HTMLCanvasElement> document.getElementById('Plane');
console.log('this is the canvas',canvas);

canvas.setAttribute("style", "border: 2px solid black; background-color: silver;");
canvas.setAttribute('width', '1000');
let context = canvas.getContext('2d');
var width = 400;
var height = 400;
canvas.width = width;
canvas.height = height;



var animate = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
//            window.mozRequestAnimationFrame ||//Turtle.ts:9:10 - error TS2339: Property 'mozRequestAnimationFrame' does not exist on type 'Window'.
              function(callback) { window.setTimeout(callback, 1000/60) };



// The step function will be responsible for doing three things.
// First it will update all of our objects: the player’s paddle, the computer’s paddle, and the ball.
// Next it will render those objects. And lastly, it will use requestAnimationFrame to call the step function again:
var step = function() {
  update();
  render();
  animate(step);
};


//   To get something on the screen let’s implement update as a no-op and for our render
//    function we’ll set the background of our game to #FF00FF by using the fillStyle and fillRect 
//    methods provided by the context:
var update = function() {
};

var render = function() {
  context.fillStyle = "#cdcdcd";
  context.fillRect(0, 0, width, height);
};

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};
