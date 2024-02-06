// Programming Challenge: 
// Generate three random integers between 0 and 256 (with 256 not inclusive) for your red, green, and blue values
let r1 = parseInt(Math.random() * 256);
let r2 = parseInt(Math.random() * 256);
let r3 = parseInt(Math.random() * 256);


// Output these colors to the browser
document.write("First Color: " + r1 + " " + "\n");
document.write("Second Color: " + r2 + " ")+ "\n";
document.write("Third Color: " + r3 + " "+ "\n");


// Create a string that packages up these colors as a CSS RGB color descriptor
let colorCombo = "rgb(" + r1 +", " + r2 + ", " + r3 + ")"
// Output a div (give it the class colorBox) on the page that will use this color
document.write(`<div class="colorBox" style="background-color: ${colorCombo}"></div`)