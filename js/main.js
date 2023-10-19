const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item--grabbed");
itemGrabbed.setAttribute("visible", false);
let grabbed = false;

item.onmouseenter = function() {
    if (item.getAttribute("visible") === true) {
        item.setAttribute("visible", false)
        itemGrabbed.setAttribute("visible", true)
        grabbed = true;
    }
    pickaxeGrabbed.setAttribute("visible", false);
    canIChopwood = false;
    canIChopstone = false;
}


const yellowSpheres = document.getElementsByClassName("js--sphere");
const invisibleBox = document.getElementById("js--invisible--box");

for (let i = 0; i < yellowSpheres.length; i++) {
    yellowSpheres[i].onmouseenter = function() {
        if (yellowSpheres[i].getAttribute("visible") === false || grabbed === false) {
            return;
        }
        let position = yellowSpheres[i].getAttribute("position");
        position.y = position.y + 1;
        yellowSpheres[i].setAttribute("visible", false);
        invisibleBox.setAttribute("position", position);
        invisibleBox.setAttribute("visible", true);
        itemGrabbed.setAttribute("visible", false);
        grabbed = false;
    }
}

const trees = document.getElementsByClassName("js--tree");
let wood = 0;

const kasteel = document.getElementsByClassName("js--kasteel");
let stone = 0;

const pickaxe = document.getElementById("js--pickaxe");
const pickaxeGrabbed = document.getElementById("js--pickaxe--grabbed");
pickaxeGrabbed.setAttribute("visible", false);

pickaxe.onmouseenter = function() {
    if (pickaxe.getAttribute("visible") === true) {
        pickaxe.setAttribute("visible", false);
        pickaxeGrabbed.setAttribute("visible", true)
        itemGrabbed.setAttribute("visible", false)
        canIChopwood = true;
        canIChopstone = true;
    }
}

let canIChopwood = false;

for (let i = 0; i < trees.length; i++) {
    trees[i].onmouseenter = function() {
        if (trees[i].getAttribute("visible") === true && canIChopwood === true) {
            trees[i].setAttribute("visible", false);
            wood = wood + 1;
            console.log(wood);
            document.getElementById("js--wood").innerText = wood;
        }
    }
}

let canIChopstone = false;

for (let i = 0; i < kasteel.length; i++) {
    kasteel[i].onmouseenter = function() {
        if (kasteel[i].getAttribute("visible") === true && canIChopstone === true) {
            kasteel[i].setAttribute("visible", false);
            stone = stone + 1;
            console.log(stone);
            document.getElementById("js--stone").innerText = stone;
        }
    }
}