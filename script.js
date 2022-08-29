console.log("Welcome to tic tac toe");
let turn = "X";
let oneClick = false;
let isWinner = false;
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};



const checkWinner = () => {
  let boxTexts = document.getElementsByClassName("Box");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      isWinner = true;
      document.getElementsByClassName('child')[0].setAttribute('style', 'display: block');
    }
  });
};

let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxText");
  box.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWinner();
      if (isWinner === true) {
        document.getElementsByClassName("info")[0].innerText = changeTurn() + " Won";
      } 
      else {
        if(document.getElementsByClassName('child')[0].getAttribute('style') === 'display: none'){
            document.getElementsByClassName("info")[0].innerText =
            "Turn for " + turn;
        }
        else{
            if (oneClick===true){document.getElementsByClassName("info")[0].innerText = "Draw";}
            
        }
      }
      onclick=true
    }
  });
});


reset.addEventListener('click', () => {
    document.getElementsByClassName('info')[0].innerText = "Turn for X";
    document.getElementsByClassName('child')[0].setAttribute('style', 'display: none');
    let boxTexts=document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach((boxText) => {
        boxText.innerText = '';
    });

})