const btn = document.querySelector("button")
const img = document.querySelector("img")
let isLigthOn = true;

btn.addEventListener("click", function() {
    if (isLigthOn === false) {
    img.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
    btn.innerHTML = "off" 
    document.body.style.backgroundColor = "beige";

    isLigthOn = true;

    } else {
    img.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
    btn.innerHTML = "on" 
    document.body.style.backgroundColor = "black";
    isLigthOn = false
    }
})
