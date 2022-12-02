console.log("welcome to tictactoe")

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

const checkWin = () =>{
    let textbox = document.getElementsByClassName('textbox');
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [6, 7, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7],
    ]
    wins.forEach(e =>{
        if((textbox[e[0]].innerText === textbox[e[1]].innerText ) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = textbox[e[0]].innerText + "won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "256px"
        }

        

    })
}



music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let textbox = element.querySelector('.textbox')
    element.addEventListener('click', ()=>{
            if (textbox.innerText === '') {
                textbox.innerText = turn
                turn = changeTurn()
                audioTurn.play()
                checkWin();
                if(!isgameover){
                    document.getElementsByClassName("info")[0].innerText = "turn for" + turn

                }
            }
        })
}

)

reset.addEventListener ('click', ()=>{
    let textboxes = document.querySelectorAll('.textbox');
    Array.from(textboxes).forEach(element  =>{
        element.innerText = ""

    });
    turn = 'X'
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "turn for" + turn

}

)

