console.log("SCRIPT OK");
const menu = document.getElementById("menu");
const shopButton = document.getElementById("shopButton");
const closeShop = document.getElementById("closeShop");
const shop = document.getElementById("shop");





closeShop.addEventListener("click", () => {

    menu.classList.remove("expanded");

    shop.style.display = "none";

});
const inventory = {
    colors:["white"],
    designs:["normal"],
    trails:["."]
};
const shopItems = [

{type:"color",id:"blue",price:100},
{type:"color",id:"yellow",price:100},
{type:"color",id:"red",price:100},
{type:"color",id:"green",price:100},
{type:"color",id:"orange",price:100},
{type:"color",id:"purple",price:100},
{type:"color",id:"black",price:100},
{type:"color",id:"gray",price:100},
{type:"color",id:"gold",price:150},
{type:"color",id:"pink",price:150},

{type:"design",id:"round",price:250},
{type:"design",id:"border",price:250},
{type:"design",id:"dots",price:250},
{type:"design",id:"stripes",price:250},
{type:"design",id:"spikes",price:250},

{type:"trail",id:":",price:150},
{type:"trail",id:"(",price:150},
{type:"trail",id:"-",price:150},
{type:"trail",id:"67",price:200},
{type:"trail",id:"F",price:200},
{type:"trail",id:"I",price:200},
{type:"trail",id:"o",price:150},
{type:"trail",id:'"',price:150}

];
let points = 0;
let multiplier = 1;

const pointsText =
document.getElementById("points");


const notificationContainer =
document.getElementById("notificationContainer");
const speechBubble = document.getElementById("speechBubble");

const messages = [

"¡Buenos días! Hoy es una nueva oportunidad para brillar.",
"¡Qué alegría verte! Presiento que hoy vas a lograr algo genial.",

"¡Oye, lo estás haciendo increíble! No te rindas.",
"¡Eso estuvo espectacular! Sabía que podías lograrlo.",
"Si las cosas se ponen difíciles, recuerda que yo confío en ti al 100%.",

"No olvides estirarte un poquito y tomar agua hoy, ¿vale?",
"¡Un descanso también es parte del éxito! Respira hondo.",
"Paso a recordarte que eres una persona súper valiosa.",

"Diste lo mejor de ti hoy, ¡estoy muy orgulloso!",
"A descansar, campeón. Mañana será otro gran día.",

"¡El primer paso es el más importante y ya lo diste!",
"No tienes que ser perfecto, ¡con que seas tú mismo es más que suficiente!",
"¡Atrévete a intentar algo nuevo hoy! Yo te echo porras desde aquí.",
"Tus metas son grandes, ¡pero tú eres mucho más grande que ellas!",

"Cámbiate el 'no puedo' por el 'voy a ver cómo lo logro'.",
"Está bien tener días grises, recuerda que después de la tormenta siempre sale el sol.",
"¡Ey, respira! Todo va a salir bien, vas a ver que sí.",

"¡Choca esos cinco! Tu esfuerzo de hoy valió totalmente la pena.",
"Cada pequeño avance cuenta. ¡Celébralo!",
"Gracias por contagiarme tu buena vibra."

];
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
function notify(text){

    const div =
    document.createElement("div");

    div.className = "notification";

    div.textContent = text;

    notificationContainer.appendChild(div);

    setTimeout(() => {
        div.remove();
    },5000);
}
setInterval(() => {

    points += multiplier;

    pointsText.textContent = points;

},1000);
setInterval(() => {

    let roll = Math.random();

    if(energyMode){

        roll -= 0.10;
    }

    if(roll < 0.05){

        multiplier = 5;

        notify("🔥 Multiplicador x5");

    }else if(roll < 0.20){

        multiplier = 3;

        notify("⚡ Multiplicador x3");

    }else if(roll < 0.50){

        multiplier = 2;

        notify("✨ Multiplicador x2");

    }else{

        multiplier = 1;
    }

},10000);notify("🤖 Bono del Bot activo");
notify("🤖 Bono del Bot finalizado");
function botBrain() {

    if (Date.now() < nextDecision) return;

    nextDecision = Date.now() + 800 + Math.random() * 2500;

    const action = Math.random();

    if (action < 0.45) {

        moveDirection = -1;
        const speedBoost =
    energyMode ? 2.2 : 1;

desiredSpeed =
    (2 + Math.random() * 2) *
    speedBoost;

    } else if (action < 0.90) {

        moveDirection = 1;
        desiredSpeed = 2 + Math.random() * 2;

    } else {

        desiredSpeed = 0;
    }

    const onGround = y >= floor();

    if (onGround && Math.random() < 0.35) {
        velocityY =
    energyMode
        ? -14 - Math.random() * 4
        : -8 - Math.random() * 2;
    }
}
function say(message){

    speechBubble.textContent = message;

    speechBubble.classList.add("show");

    setTimeout(() => {
        speechBubble.classList.remove("show");
    }, 9000);
}
function buildShop(){

    shopContent.innerHTML = "";

    shopItems.forEach(item => {

        const btn =
        document.createElement("button");

        btn.textContent =
        `${item.id} - ${item.price}`;

        btn.onclick = () => {

            if(points < item.price){
                notify("❌ Puntos insuficientes");
                return;
            }

            points -= item.price;

            inventory[
                item.type + "s"
            ].push(item.id);

            notify(
                `✅ Comprado ${item.id}`
            );

            pointsText.textContent =
            points;
        };

        shopContent.appendChild(btn);
        shopContent.appendChild(
            document.createElement("br")
        );

    });
}
shopButton.onclick = () => {

    buildShop();

    shop.style.display = "block";
};

closeShop.onclick = () => {

    shop.style.display = "none";
};
function randomMessage(){

    const msg =
        messages[Math.floor(Math.random() * messages.length)];

    say(msg);
}
setTimeout(() => {
    randomMessage();
}, 2000);
setInterval(() => {

    if(Math.random() < 0.35){
        randomMessage();
    }

}, 45000);
let energyMode = false;
let energyEnd = 0;
function activateEnergyBoost(){

    energyMode = true;

    energyEnd =
        Date.now() + 30000;

    player.classList.add("energyMode");

    say("⚡ ¡Tengo un impulso de energía! ¡Vamos allá!");
}

function updateEnergyBoost(){

    if(
        energyMode &&
        Date.now() > energyEnd
    ){
        energyMode = false;
        player.classList.remove("energyMode");

        say("😌 Ya me siento más tranquilo.");
    }
}
setInterval(() => {

    if(Math.random() < 0.20){

        if(!energyMode){
            activateEnergyBoost();
        }

    }

}, 60000);
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
updateEnergyBoost();
    requestAnimationFrame(gameLoop);
}

gameLoop();

const colorSelect = document.getElementById("colorSelect");
const designSelect = document.getElementById("designSelect");
const trailSelect = document.getElementById("trailSelect");
const trailContainer = document.getElementById("trailContainer");

const colorMap = {
    white:"#ffffff",
    blue:"#00aaff",
    yellow:"#ffff00",
    red:"#ff3333",
    green:"#00ff66",
    orange:"#ff8800",
    purple:"#bb55ff",
    black:"#111111",
    gray:"#999999",
    gold:"#ffd700",
    pink:"#ff66cc"
};

function applyColor(){

    const color = colorMap[colorSelect.value];

    player.style.background = color;
    player.style.borderColor = color;

    player.style.boxShadow = `
        0 0 5px ${color},
        0 0 10px ${color},
        0 0 20px ${color},
        0 0 40px ${color}
    `;
}

function applyDesign(){

    player.classList.remove(
        "design-round",
        "design-border",
        "design-dots",
        "design-stripes",
        "design-spikes"
    );

    switch(designSelect.value){

        case "round":
            player.classList.add("design-round");
            break;

        case "border":
            player.classList.add("design-border");
            break;

        case "dots":
            player.classList.add("design-dots");
            break;

        case "stripes":
            player.classList.add("design-stripes");
            break;

        case "spikes":
            player.classList.add("design-spikes");
            break;
    }
}

setInterval(() => {

    const mark = document.createElement("div");

    mark.className = "trail";
    mark.textContent = trailSelect.value;

    mark.style.left = (x + 10) + "px";
    mark.style.top = (y + 10) + "px";

    trailContainer.appendChild(mark);

    setTimeout(() => {
        mark.remove();
    },1500);

},120);

colorSelect.addEventListener("change",applyColor);
designSelect.addEventListener("change",applyDesign);

applyColor();
applyDesign();
