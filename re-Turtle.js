"use strict";
exports.__esModule = true;
var nouns_1 = require("./nouns");
var adjectives_1 = require("./adjectives");
// Agent behaviour is  sense - plan - act cycle
var Turtle_V2 = /** @class */ (function () {
    function Turtle_V2() {
        console.log("A new Turtle was created!");
        this.myName = this.generateName();
    }
    // ********  Low level functions  ***************
    Turtle_V2.prototype.generateName = function () {
        var nameArray = nouns_1.Nouns.nouns;
        var adjectiveArray = adjectives_1.Adjectives.adjectives;
        var randomSeed = Math.random() * adjectiveArray.length;
        var randomSeed2 = Math.random() * nameArray.length;
        return "The " + adjectiveArray[randomSeed] + " " + nameArray[randomSeed2];
    };
    Turtle_V2.prototype.draw = function () {
        console.log("Turtle " + this.myName + " has been drawn !");
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
var width = 400;
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
