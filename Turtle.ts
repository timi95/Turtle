// tsc Turtle.ts --watch

// The requestAnimationFrame method is extremely useful. It functions a lot like setTimeout
// in that it will call your callback at approximate 60 calls per second (read: 60fps). What makes it
class Turtle{
     offset_x:number = 350;
     offset_y:number = 200;

    constructor(
         public x:number,
				 public y:number,
				 private angle:number,
				 private ctx:any,
				 private fillColor:any)
				{ console.log("A new Turtle was created!"); }

    draw(){
        // let rand255 = Math.floor((Math.random() * 255) + 1);
        let rand55 = Math.floor((Math.random() * 55) + 1);
        this.ctx.fillStyle = "rgba("+this.x+","+this.y+","+this.x+",1)";
        this.ctx.arc(this.x+this.offset_x,this.y+this.offset_y,25,2 * Math.PI,false);
        this.ctx.fill();
        this.ctx.closePath();
        console.log(" Turtle was Drawn!");

    }

    // rotate orientation delta degrees counterclockwise
    turnLeft( delta:number) {
        this.angle += delta;
		console.log("turning left!")
    }
    // rotate orientation delta degrees clockwise
    turnRight( delta:number) {
        this.angle -= delta;
		console.log("turning right!")
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
        // this.line(oldx, oldy, this.x, this.y);
    }

    goBackward(step:number) {
      let oldx = this.x;
      let oldy = this.y;
      // Angle in radians = Angle in degrees x PI / 180.
      this.x -= step * Math.cos(this.angle * Math.PI/180);
      this.y -= step * Math.sin(this.angle * Math.PI/180);
      // this.line(oldx, oldy, this.x, this.y);
  }

}

// setting up a canvas and grabbing its 2D context
let canvas = <HTMLCanvasElement> document.getElementById('Plane');
var context = canvas.getContext('2d');
let color: any = 'blue';


let x:number = 100; let y:number = 100; let angle:number = 90;
let countUp:boolean = true; let countDown:boolean = false; let count:number = 0;
let turt = new Turtle( x,  y, angle, context, color);

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


  if(turt.x < 50 && turt.x > 0 
    || turt.y < 50 && turt.y > 0){
      turt.goForward(2);
      console.log("Position: x=>",turt.x," y=>", turt.y); 
  } else {
    turt.goBackward(2);
  }

	// incomplete bouncing logic
	if(countUp){
		// turt.turnLeft(3);
		count++;
		console.log("count: ",count);
	  } else {
		// turt.turnRight(2);
		count--
		console.log("count: ",count);
  	}
  //
  let TERMINAL_VALUE:number = 20;
	if( count >= TERMINAL_VALUE ) {
    countUp = false;
    turt.turnLeft(Math.floor(Math.random() * 100) + 50  );
    } else if( count <= 0 ) {
       countUp = true;
       turt.turnRight(Math.floor(Math.random() * 100) + 50  );
     }

 };
var render = function() { // Render the updated Turtle(s)
    turt.draw();

 };


 window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
  };
