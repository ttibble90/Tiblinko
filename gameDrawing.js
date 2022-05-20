// const circ = new Circle(100, 100, 20);
//
gameDrawCtx = GAME_CANVAS.getContext("2d");
// //Define the circle
// function Circle(x, y, r) {
//     "use strict";
//     this.x = (x === null) ? 0 : x;
//     this.y = (y === null) ? 0 : y;
//     this.r = (r === null) ? 0 : r;
//
//     this.fill = function(ctx) {
//
//     }
// }

//Draw the circle as object


function drawBall (ballpos, ballRadius){
    let ctx = gameDrawCtx;
    console.log(ballpos);
    //Stroke
    ctx.beginPath();
    ctx.arc( ballpos.x, ballpos.y, ballRadius, 0,Math.PI*2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = `rgb(022,022,022)`;
    ctx.stroke();
    //fill
    ctx.beginPath();
    ctx.arc( ballpos.x, ballpos.y, ballRadius, 0,Math.PI*2);
    ctx.fillStyle =  `rgb(200,055,055)`;
    ctx.fill();
}