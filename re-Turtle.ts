// class Turtle{

//   // when a turtle is created;
//   // x and y coordinates are initialised
//   // the angle/direction in which the turtle is pointing is setTimeout
//   // the color of the turtle is set
//   constructor(){}
// }
interface RGBA_colour {
  red:number;
  green:number;
  blue:number;
  alpha:number;
}

class Turtle {
  private xcoordinate:number;
  private ycoordinate:number;
  private colour:RGBA_colour;

 constructor( private x:number,
              private y:number,
              private angle:number,
              private ctx:any,
              private fillColor:any) { 
  console.log("A new Turtle was created!"); 
}

 draw(){
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

}
