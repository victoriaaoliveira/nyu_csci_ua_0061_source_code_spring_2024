// Programming Challenge:
// Ask the user for their name
// Then have the website welcome the user using an <h1> tag
// Next, ask the user for a hex color code
// Use this code to create a div (give it a class of colorBox) on the screen with the correct color

let colorBox = document.querySelector(".colorBox");
let name = prompt("What is your name?");
document.write(`<h1>Hello ${name}!</h1`)

let boxColor = prompt("Provide a hex color code:");
document.write(`<div class="colorBox" 
style="background-color:#${boxColor};"></div>`);





