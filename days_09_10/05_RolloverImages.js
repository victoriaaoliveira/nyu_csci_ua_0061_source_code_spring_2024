// set up event listeners for each img tag inside container div
let allImgTags = document.querySelectorAll('#container img');
for(let i = 0; i < allImgTags.length; i++){
    
    //when an image is hovered over, grab its data-rolloverimage property
    allImgTags[i].onmouseover = function(event){
        //switch our src attribute
        event.currentTarget.src = event.currentTarget.dataset.rolloverimage;
    }

    //when an image is hovered over, grab its data-rolloverimage property
    allImgTags[i].onmouseout = function(event){
        //switch our src attribute
        event.currentTarget.src = event.currentTarget.dataset.normalimage;
    }

}   