var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexGenerator = document.getElementById('colorgenerator');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
}

color1.addEventListener("input", setGradient)
color2.addEventListener('input', setGradient)

function hexValue() {
    return '#' + Math.random().toString(16).substring(2,8); 
}

function generator() {
    firstColor = hexValue();
    secondColor = hexValue();
    body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";
    color1.value = firstColor;
    color2.value = secondColor;
    css.textContent = "background: linear-gradient(to right, " + firstColor + ", " + secondColor + ");";
}

hexGenerator.addEventListener('click', generator);
