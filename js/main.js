var cloudLeft,cloundRight,roulette;
var windowHeight,windowWidth;

window.addEventListener("load", () => {    
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    cloudLeft = document.getElementById("left");
    cloundRight = document.getElementById("right");
    roulette = document.getElementById("roulette");
    moveCloudLeft();
    moveCloundRight();
    moveRoulette1(); 

    setTimeout(function(){
        hideCloudLeft();
        hideCloudRight();
        hideRoulette();
    },5000);

});

window.addEventListener("resize", () => {

});

function moveCloudLeft(){
    let pos = 636;
    const interval = setInterval(function(){
        pos-=10;
        cloudLeft.style.left = `-${pos}px`;         
        if(pos < 0){
            clearInterval(interval);
        }
    },10);
}

function moveCloundRight(){
    let pos = 636;
    const interval = setInterval(function(){
        pos-=10;
        cloundRight.style.right = `-${pos}px`; 
        if(pos < 0){
            clearInterval(interval);
        }
    },10);
}

function moveRoulette1(){
    let pos = 220;    
    let vertical = windowWidth/2 - 110;  

    const interval = setInterval(function(){
        pos-=10;
        roulette.style.left = `${vertical}px`;
        roulette.style.top = `-${pos}px`; 
        if(pos == 0){ 
            clearInterval(interval);           
            moveRoulette2(); 
        }
    },10);
}


function moveRoulette2(){
    let pos = 0;    
    let vertical = windowWidth/2 - 110;
    let horizontal = windowHeight/2 - 110;

    console.log("roulette: " + pos);
    const interval = setInterval(function(){
        pos+=10;
        roulette.style.left = `${vertical}px`;
        roulette.style.top = `${pos}px`; 
        if(pos > horizontal){                        
            clearInterval(interval);
        }
    },10);
}

function hideCloudLeft(){
    let pos = 0;
    const interval = setInterval(function(){
        pos+=10;
        cloudLeft.style.left = `-${pos}px`; 
        if(pos > 636){
            clearInterval(interval);
        }
    },10);
}

function hideCloudRight(){
    let pos = 0;
    const interval = setInterval(function(){
        pos+=10;
        cloundRight.style.right = `-${pos}px`; 
        if(pos > 636){
            clearInterval(interval);
        }
    },10);
}

function hideRoulette(){
       
    let vertical = windowWidth/2 - 110;
    let horizontal = windowHeight/2 - 110;

    console.log("roulette: " + horizontal);
    const interval = setInterval(function(){
        horizontal+=10;
        roulette.style.left = `${vertical}px`;
        roulette.style.top = `${horizontal}px`; 
        if(horizontal > windowHeight ){                        
            clearInterval(interval);
        }
    },10);
}

