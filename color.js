const background = document.getElementById("background");
const btn = document.querySelector("#color");
const main = document.querySelector("#main");

let colorArr = ["red","yellow","blue","green","orange","brown"];

btn.addEventListener("click", function(){
    let randomColor = colorArr[getRandomColor()];
    main.style.backgroundColor = randomColor;
    background.textContent = randomColor;
});

function getRandomColor(){
    return Math.floor(Math.random() * colorArr.length);
}
console.log(getRandomColor())