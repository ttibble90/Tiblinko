/**
 * Created by tomdt on 6/23/2017.
 */
const GAME_CANVAS = document.getElementById("gamecanvas");
const CTX = GAME_CANVAS.getContext("2d");

const COUNTDOWN_START_SECS = 10;

//UI event handlers
let clickHandlerLoaded = false;
let gameState = "starting";
// sound effect triggers

let initHeight = CTX.canvas.clientHeight /2;
let ballPosCenter = {x: CTX.canvas.clientWidth / 2, y: initHeight}
const ballRadius  = CTX.canvas.clientWidth /40;
const worldUnit = ballRadius * 2; // 1 /20 th of the screen

const worldHeight = 40 * worldUnit;

let ballWorldX = 20 * worldUnit;
let ballWorldY = worldHeight;

    // 20;

//Start game loop
window.onload = ( ) => {

    initGame();
    // The game loop should be a setInterval that way the screen size can be adjusted
    //since the games physics loop will be tied to the animation window, I am using a set interval vs a window.request animation frame.
    // this means that my game may be laggier than the other way, but I would rather have that than calls to physics at 144 hz
    setInterval(gameLoop, 20); //  a touch <60 FPS

};

function initGame(){
     initBackground();
}

function gameLoop(){
    screenReset();
     drawBg();
    drawBall(ballPosCenter,ballRadius);
    switch(gameState){
        case "preRace":
            screenReset();
            drawStartScreen(CTX ,BG_CTX, WIDTH, HEIGHT, horseHeight);
            if (horses.length === 4){
                if (!clickHandlerLoaded){
                let handler = function (event) {
                        gameState = 'countdownStart';
                        console.log ("Horses loaded, transitioning to countdown");
                        removeEventListener('click', handler, false);
                        clickHandlerLoaded = false;
                    } ;
                        window.addEventListener("click",handler,false);
                    clickHandlerLoaded = true;
                }
            }
            break;
        case "countdownStart":
                startCountdown(COUNTDOWN_START_SECS,BG_CTX);
            break;
        case "running":
            screenReset();
            runRace(CTX,BG_CTX);
            break;
        case "finishing":
            screenReset();
            runRace(CTX,BG_CTX);
            break;

        case "finished":
            //quick and dirty fanfare check
            if (!fanfarePlayedFlag){
                playFanfare();
                fanfarePlayedFlag = true;
                setTimeout(()=>{
                    gameState = "WinnerCloseUp";
                }, 7 * 1000);
            }
            CTX.clearRect(0, 0, WIDTH, HEIGHT);
            drawResults(BG_CTX, WIDTH, HEIGHT, horseHeight, finalPlaces);
            break;
        case "WinnerCloseUp":
            drawWinnerCloseUp(BG_CTX, WIDTH, HEIGHT, horseHeight, finalPlaces);
            if (!clickHandlerLoaded){
                let handler = function () {
                    console.log("Restarting game....")
                    initGame();
                    gameState = "preRace"
                    removeEventListener('click', handler, false);
                    clickHandlerLoaded = false;
                };
                clickHandlerLoaded = true;
                addEventListener('click', handler, false);
            }
            break;

        default:
            break;
    }
}



function screenReset(){
        HEIGHT = GAME_CANVAS.height = BG_CANVAS.height = window.innerHeight;
        WIDTH = GAME_CANVAS.width = BG_CANVAS.width = window.innerWidth;
        horseWidth = horseHeight = WIDTH / 8;
}

