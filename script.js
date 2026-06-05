console.log("Juego iniciado");
const player = document.getElementById("player");

let y = 100;
let velocityY = 0;

const gravity = 0.5;
const floor = window.innerHeight - 36;

function gameLoop() {

    velocityY += gravity;
    y += velocityY;

    if (y > floor) {
        y = floor;
        velocityY = 0;
    }

    player.style.top = y + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop();
