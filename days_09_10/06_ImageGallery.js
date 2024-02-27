let allImages = document.querySelectorAll("#container img");
let caption = document.getElementById('caption');
let bigImage = document.getElementById('bigimage');
let counterText = document.getElementById('counter');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

for(let i=0; i<allImages.length; i++){
    allImages[i].onclick = function(event){
        caption.textContent = event.currentTarget.dataset.info;
        bigImage.innerHTML = "<img src=" + event.currentTarget.dataset.bigimage + ">";

        if(i == 0){
            counter1++;
            counter.textContent = "You have clicked on this image " + counter1 + " times!";
        }
        else if(i == 1){
            counter2++;
            counter.textContent = "You have clicked on this image " + counter2 + " times!";
        }
        else{
            counter3++;
            counter.textContent = "You have clicked on this image " + counter3 + " times!";
        }
    }

}

/* Another approach to counter
if(event.currentTarget.dataset.counter == undefined){
    event.currentTarget.dataset.counter = 1;
} else{
    event.currentTarget.dataset.counter = parseInt(event.currentTarget.dataset.counter + 1);
}
*/