// tsc Turtle.ts --watch

// The requestAnimationFrame method is extremely useful. It functions a lot like setTimeout
// in that it will call your callback at approximate 60 calls per second (read: 60fps). What makes it 
class Turtle{
    
    constructor( private x:number, private y:number, private angle:number,private ctx:any) 
    {
        // ctx = ctx.getContext("2d");
        // ctx.fillStyle = "red"
        // ctx.arc(x,y,25,2 * Math.PI,false)
        // ctx.fill()
        console.log("A new Turtle was created!")
    }

    draw(){
        // this.ctx = this.ctx.getContext("2d");
        this.ctx.fillStyle = "red"
        this.ctx.arc(x,y,25,2 * Math.PI,false)
        this.ctx.fill()
        console.log(" Turtle was Drawn!")
    }

    // rotate orientation delta degrees counterclockwise
    turnLeft( delta:number) {
        this.angle += delta;
    }
    // rotate orientation delta degrees clockwise
    turnRight( delta:number) {
        this.angle -= delta;
    }

    line(oldx:number, oldy:number, x:number, y:number){
        this.ctx.beginPath();       // Start a new path
        this.ctx.fillStyle = 'blue';
        this.ctx.moveTo(oldx, oldy);    // Move the pen to (oldx:number, oldy:number)
        this.ctx.lineTo(x, y);  // Draw a line to (x:number, y:number)
        this.ctx.stroke();  
        this.ctx.closePath();
    }
    // move forward the given amount, with the pen down
    goForward(step:number) {
        let oldx = this.x;
        let oldy = this.y;
        // Angle in radians = Angle in degrees x PI / 180.
        this.x += step * Math.cos(this.angle * Math.PI/180);
        this.y += step * Math.sin(this.angle * Math.PI/180);
        this.line(oldx, oldy, this.x, this.y);
    }

}

// // setting up a canvas and grabbing its 2D context
var canvas = document.createElement('canvas');
var width = 400;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');


let x:number = 100; let y:number = 100; let angle:number = 90;
let turt = new Turtle( x,  y, angle, context);

// better than just using setTimeout is that your browser can perform optimizations on the 
// call. For instance, if the tab isn’t active it will stop making calls until it becomes active again.
var animate = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
//            window.mozRequestAnimationFrame ||//Turtle.ts:9:10 - error TS2339: Property 'mozRequestAnimationFrame' does not exist on type 'Window'.
              function(callback) { window.setTimeout(callback, 1000/60) };

// The step function will be responsible for doing three things.
// First it will update all of our objects:
// Next it will render those objects. And lastly, it will use requestAnimationFrame to call the step function again:
var step = function() {
    update();
    render();
    animate(step);
  };

var update = function() { // Define the next movements of the Turtle(s)
    turt.goForward(5);
 };
var render = function() { // Render the updated Turtle(s)
    turt.draw();
 };


 window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
  };