import whoIsTheWinner from "./algoritm.js"
const board = document.querySelector('.board')
const divOfTheWinner = document.querySelector(".winner")
const restartButton = document.querySelector(".restart")
const divNextPlayer = document.querySelector(".next-player")
let Player = "X"
let game = []
let counter = 0
let winner = "None";
restartButton.addEventListener("click",e => {
   game = []
   winner = 'None'
   counter = 0
   document.querySelectorAll(".cell").forEach(div =>  div.innerText = "")
   divOfTheWinner.innerText = ""
   divNextPlayer.innerText = `Jogador atual:${Player == "O" ? "X" : "O"}`
})
board.addEventListener('click',e => {
   if (e.target.classList.contains("cell")) {
	  if (e.target.innerText != "" || (winner != "None")) return
	  if (Player == "X") {
		 Player = "O"
		 counter += 1
	  }else {
		 Player = "X"
		 counter += 1;
	  }
	  e.target.innerText = `${Player}`
	  divNextPlayer.innerText = `Proximo jogador:${Player == "O" ? "X" : "O"}`
   	  const cells = document.querySelectorAll(".cell")
	  for (let cell of cells ) {
		 game.push(cell.innerText)
	  }
	  winner = whoIsTheWinner(game);	  
	  winner == "None"  ? game = [] : divOfTheWinner.innerText = `VENCEDOR: ${winner}`
	  if (winner == "None" && counter == 9) divOfTheWinner.innerText = "VENCEDOR: NENHUM"
   } 
})
