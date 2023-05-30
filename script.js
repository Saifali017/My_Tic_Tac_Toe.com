console.log("Welcome to tic tac toe");
let music=new Audio("01-music-director-bawa-sushil-23699.mp3")
let aturn =new Audio("habbo-message-59428.mp3")
let agameover=new Audio("bad-apple-25394.mp3")
let turn="X"
let gameover=false;
const changeturn=()=>{
return turn=== "X"? "0":"X"
}
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let wins=[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,25,90],
    [0,4,8,3,18,45],
    [2,4,6,2,15,135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText )&& (boxtext[e[2]].innerText===boxtext[e[1]].innerText ) && boxtext[e[0]].innerText !==""){
       document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";

        gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="156px"
        document.querySelector(".line").style.width="25vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
 
    }

})
}
let boxes=document.getElementsByClassName("box");
music.play();
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeturn();
            aturn.play();
            checkwin();
            if(!gameover){
              document.getElementsByClassName("info")[0].innerText="Turn for "+turn;  
            }
            
        }
    })
})

 const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  // Reset the game logic here
  // ...
  let boxtexts =document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector(".line").style.width="0px";
});
