
let socket = io()
var side = 10;


function setup() {

    frameRate();
    createCanvas(50 * side + 1, 50 * side + 1);
    background('#acacac');

}
let color = ["", "green", "yellow", "red", "black", "blue"]
function draw2(matrix) {
    // console.log(grassArr)
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
let winter = ["", "white", "#fff0a9", "#ff4b00", "black", "#ff57f4"]
winterBtn.addEventListener("click", () => {
    color = winter;
})

const autumnBtn = document.getElementById("autumn")
let autumn = ["", "orange", "purple", "#yellow", "black", "red"]
autumnBtn.addEventListener("click", () => {
    color = autumn;
})

const springBtn = document.getElementById("spring")
let spring = ["", "green", "red", "#ff4b00", "black", "blue"]
springBtn.addEventListener("click", () => {
    color = spring;
})

const summerBtn = document.getElementById("summer")

let summer = ["", "green", "yellow", "red", "black", "#3b4ff4"]

summerBtn.addEventListener("click", () => {
    color = summer;
})






