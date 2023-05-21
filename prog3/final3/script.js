
let socket = io()
var side = 10;


function setup() {

    frameRate();
    createCanvas(50 * side + 1, 50 * side + 1);
    background('#acacac');

}
let color = ["", "green", "yellow", "#00cc99", "black", "blue","red"]
function draw2(matrix) {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            fill(color[matrix[y][x]])
            rect(x * side, y * side, side, side);
        }
    }

}


socket.on("send matrix", draw2)

const title = document.querySelector("h1");


const winterBtn = document.getElementById("winter")
let winter = ["", "#dfd6cd", "#fff0a9", "#ec33ec", "black", "#bebebe", "red"]
winterBtn.addEventListener("click", () => {
    color = winter;
})

const autumnBtn = document.getElementById("autumn")
let autumn = ["", "orange", "purple", "#yellow", "black", "#6bb9e8", "red"]
autumnBtn.addEventListener("click", () => {
    color = autumn;
})

const springBtn = document.getElementById("spring")
let spring = ["", "green", "#7b1113", "#ff4b00", "black", "#8aa8ac", "red"]
springBtn.addEventListener("click", () => {
    color = spring;
})

const summerBtn = document.getElementById("summer")

let summer = ["", "green", "yellow", "#ff97d1", "black", "#a7d8de", "red"]

summerBtn.addEventListener("click", () => {
    color = summer;
})







