
import { Nouns } from "./nouns";
import { Adjectives } from "./adjectives";

interface RGBA_colour {
  red:number;
  green:number;
  blue:number;
  alpha:number;
}

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




var animate = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
//            window.mozRequestAnimationFrame ||//Turtle.ts:9:10 - error TS2339: Property 'mozRequestAnimationFrame' does not exist on type 'Window'.
              function(callback) { window.setTimeout(callback, 1000/60) };

window.onload = function() {
  //document.body.appendChild(canvas);
  animate(step);
};
