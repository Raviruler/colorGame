
//Selector

var numberOfSquare=6;
var color =GenerateRandomColor(numberOfSquare);
var square=document.querySelectorAll(".square");
var pickedcolor=choose();
var colordisplay=document.getElementById("spann");
colordisplay.textContent=pickedcolor;
var displaymessage=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyButton = document.querySelector("#easyb");
var hardButton = document.querySelector("#hardb");

//Display Message

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=color[i];

    square[i].addEventListener("click" , function(){
        var cc=this.style.backgroundColor;
        if(cc===pickedcolor){
           displaymessage.textContent="Correct!";
           changecolor(cc);
           h1.style.background=cc;
           resetButton.textContent="Play Again?"
        }
        else{
            this.style.backgroundColor="#232323";
            displaymessage.textContent="Try Again!"
        }
    });
}

//Assigning Random colors

function changecolor(color) {
    for(var i=0; i<square.length; i++){
        square[i].style.backgroundColor=color;
    }
}

//Random Color Generator

function choose() {
    var pp=Math.floor(Math.random()*color.length);
    return color[pp];
}

function GenerateRandomColor(num) {
    var arr=[]
    for(var i=0;i<num;i++){
        arr.push(RandomColor())
    }
    return arr;
}


function RandomColor() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

//Reset Button

resetButton.addEventListener("click",function(){
    color =GenerateRandomColor(numberOfSquare);
    pickedcolor=choose();
    colordisplay.textContent=pickedcolor;
    h1.style.background="steelblue";
    resetButton.textContent="New Color";
    displaymessage.textContent="";

    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=color[i];
    }

})

//Easy Button

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfSquare=3;
    color =GenerateRandomColor(numberOfSquare);
    pickedcolor=choose();
    colordisplay.textContent=pickedcolor;
    
    for(var i=0;i<square.length;i++){
        if(color[i]){
            square[i].style.backgroundColor=color[i];
        }
        else{
            square[i].style.display="none";
        }

    }

})

//Hard Button

hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numberOfSquare=6;
    color =GenerateRandomColor(numberOfSquare);
    pickedcolor=choose();
    colordisplay.textContent=pickedcolor;
    
    for(var i=0;i<square.length;i++){

            square[i].style.backgroundColor=color[i];
            square[i].style.display="block";
    }

})