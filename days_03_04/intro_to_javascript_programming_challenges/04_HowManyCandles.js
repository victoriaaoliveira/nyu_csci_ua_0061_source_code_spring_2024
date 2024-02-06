// Programming Challenge:

// Ask the user for their age
let age = parseInt(prompt("How old are you?"));

// Check if the result not a number (NaN) or less than 0
// If so, write a paragraph to the page that says "Not a valid number!"
if(isNaN(age) == true || age <= 0){
    document.write("<p>Not a valid number!</p>")
}
// Otherwise, display that many candle images on a web page.
else {
    for(i = 0; i < age; i++){
        let chance = parseInt(Math.random() * 3);
        document.write("<img src = 'images/candle${chance}'>");
        /* if (chance == 0){
            document.write("<img src='images/candle1.png'>");
        }
        if (chance == 1){
            document.write("<img src='images/candle2.png'>");
        }
        else{
            document.write("<img src='images/candle3.png'>");
        } */
    }
}
// There are 3 different candle images in the images folder – pick them at random!
