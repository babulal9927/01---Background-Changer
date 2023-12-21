const button = document.querySelector("button");
const body = document.querySelector("body");



function changeTheBackground() {
    let r = parseInt(Math.random()*255).toString(16);
    let g = parseInt(Math.random()*255).toString(16);
    let b = parseInt(Math.random()*255).toString(16);
    let s = r+g+b
    console.log(s)
    body.style.backgroundColor = '#'+s;
};
body.style.backgroundColor='yellow';
button.addEventListener("click", changeTheBackground);