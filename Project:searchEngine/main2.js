var imageSources = ["img/Rick&MortyAlt1.jpg", "img/Rick&MortyAlt2.jpg", "img/Rick&MortyAlt3.jpg"];
var index = 0;

setInterval(function() {
    if(index === imageSources.length) {
        index = 0;
    }
    document.getElementById("rickmorty").src = imageSources[index];
    index++;
}, 1000);