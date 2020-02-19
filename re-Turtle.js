// import { Nouns } from "./nouns";
// import { Adjectives } from "./adjectives";
// Agent behaviour is  sense - plan - act cycle
var Turtle_V2 = /** @class */ (function () {
    function Turtle_V2(x, y, angle, ctx, fillColor) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.ctx = ctx;
        this.fillColor = fillColor;
        this.offset_x = 350;
        this.offset_y = 200;
        console.log("A new Turtle was created!");
        // this.myName = this.generateName();
    }
    // ********  Low level functions  ***************
    // generateName(): string {
    //   let nameArray:string[] = Nouns.nouns;
    //   let adjectiveArray:string[] = Adjectives.adjectives;
    //   let randomSeed:number = Math.random()*adjectiveArray.length;
    //   let randomSeed2:number = Math.random()*nameArray.length;
    //   return `The ${adjectiveArray[randomSeed]} ${nameArray[randomSeed2]}`;
    // }
    Turtle_V2.prototype.draw = function () {
        // console.log(`Turtle ${this.myName} has been drawn !`);
        var rand55 = Math.floor((Math.random() * 55) + 1);
        this.ctx.fillStyle = "rgba(" + this.x + "," + this.y + "," + this.x + ",1)";
        this.ctx.arc(this.x + this.offset_x, this.y + this.offset_y, 25, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.closePath();
        console.log(" Turtle was Drawn!");
    };
    Turtle_V2.prototype.checkPosition = function () {
    };
    // rotate orientation delta degrees counterclockwise
    Turtle_V2.prototype.turnLeft = function (delta) {
    };
    // rotate orientation delta degrees clockwise
    Turtle_V2.prototype.turnRight = function (delta) {
    };
    Turtle_V2.prototype.line = function (oldx, oldy, x, y) {
    };
    // move forward the given amount, with the pen down
    Turtle_V2.prototype.goForward = function (step) {
    };
    // ************** Turtle behaviours *******************
    // A random walk for this turtle
    Turtle_V2.prototype.wander = function () {
        console.log(this.myName + " the turtle is wandering");
    };
    Turtle_V2.prototype.follow = function (myPosition, followingPosition) {
        console.log(this.myName + " the turtle is following: " + followingPosition);
    };
    return Turtle_V2;
}());
// setting up a canvas and grabbing its 2D context
var canvas = document.getElementById('Plane');
console.log('this is the canvas', canvas);
canvas.setAttribute("style", "border: 2px solid black; background-color: silver;");
canvas.setAttribute('width', '1000');
var context = canvas.getContext('2d');
var width = window.innerWidth;
var height = 400;
canvas.width = width;
canvas.height = height;
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    //            window.mozRequestAnimationFrame ||//Turtle.ts:9:10 - error TS2339: Property 'mozRequestAnimationFrame' does not exist on type 'Window'.
    function (callback) { window.setTimeout(callback, 1000 / 60); };
// The step function will be responsible for doing three things.
// First it will update all of our objects: the player’s paddle, the computer’s paddle, and the ball.
// Next it will render those objects. And lastly, it will use requestAnimationFrame to call the step function again:
var step = function () {
    update();
    render();
    animate(step);
};
//   To get something on the screen let’s implement update as a no-op and for our render
//    function we’ll set the background of our game to #FF00FF by using the fillStyle and fillRect 
//    methods provided by the context:
var update = function () {
};
var render = function () {
    context.fillStyle = "#cdcdcd";
    context.fillRect(0, 0, width, height);
};
window.onload = function () {
    document.body.appendChild(canvas);
    animate(step);
};
