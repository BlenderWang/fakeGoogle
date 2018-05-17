var searchText = document.getElementById("inputbox");
var counter = 0;
var text = "";

window.addEventListener("keyup", checkKeyPressed, false);

function checkKeyPressed(e) {
    console.log(e);
    if (e.keyCode || e.type === 'click') {
        //alert("The 'a' key is pressed.");
        text = makeString();
        searchText.value = text;

        if(e.keyCode == "13") {
            console.log("enter is pressed");
            redirect();
        }
    }
}

function redirect() {
  if(counter === 15) {
      window.location.href = 'result.html';
  }
}

/*
searchText.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn1").click();
    }
});
*/

function makeString() {
    var temp = "";
    var search = "Go to next page";

    if(counter < 15){
        counter = counter + 1;
    }
    console.log(counter);
    for(var i = 0; i<counter; i++) {
        temp = temp.concat(search[i]);
    }
    return temp;
}

function init() {
    window.addEventListener("keydown", checkKeyPressed, false);
    document.getElementById("inputbox").focus();
    document.querySelector(".btn").addEventListener("click", redirect, false);
}

//Listens for window load event runs function init()
window.addEventListener("load", init, false);

//Block normal key input
//F5 key is 116
function allowKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return false;
}

