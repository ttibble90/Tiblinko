const BG_CANVAS = document.getElementById("bgcanvas");
const BG_CTX = BG_CANVAS.getContext("2d");
function initBackground () {
    finishLinePosition = -1000;
    finishLineDrawn = false;
    showWinnerText = true;
    winnerTextCounter = 0;

}

function drawBg () {
   const ctx = BG_CTX;
    const width = ctx.canvas.clientWidth;
    const height = ctx.canvas.clientHeight;
    // Create gradient
    const grd = ctx.createRadialGradient( width /2, height/2, 0.000, width/2, height/2, width/2);

    // Add colors
    grd.addColorStop(0.101, 'rgba(255, 255, 255, 1.000)');
    grd.addColorStop(1.000, 'rgba(116, 224, 224, 1.000)');

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);



}