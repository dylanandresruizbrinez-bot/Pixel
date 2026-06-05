const player = document.getElementById("player");

const SIZE = 32;

let x = window.innerWidth / 2;
let y = 100;

let velocityX = 0;
let velocityY = 0;

const gravity = 0.45;
const friction = 0.97;

let moveDirection = 1;
let desiredSpeed = 0;

let nextDecision = Date.now() + 1000;

function botBrain() {

    if (Date.now() < nextDecision) return;

    nextDecision = Date.now() + 800 + Math.random() * 2500;

    const action = Math.random();

    if (action < 0.45) {

        moveDirection = -1;
        desiredSpeed = 2 + Math.random() * 2;

    } else if (action < 0.90) {

        moveDirection = 1;
        desiredSpeed = 2 + Math.random() * 2;

    } else {

        desiredSpeed = 0;
    }

    const onGround = y >= floor();

    if (onGround && Math.random() < 0.35) {
        velocityY = -8 - Math.random() * 2;
    }
}

function floor() {
    return window.innerHeight - SIZE - 4;
}

function updatePhysics() {

    botBrain();

    velocityX += (moveDirection * desiredSpeed - velocityX) * 0.03;

    velocityX *= friction;

    velocityY += gravity;

    x += velocityX;
    y += velocityY;

    if (y > floor()) {
        y = floor();
        velocityY = 0;
    }

    if (x < 0) {
        x = 0;
        velocityX = 0;
        moveDirection = 1;
    }

    if (x > window.innerWidth - SIZE) {
        x = window.innerWidth - SIZE;
        velocityX = 0;
        moveDirection = -1;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";
}

function gameLoop() {

    updatePhysics();

    requestAnimationFrame(gameLoop);
}

gameLoop();
