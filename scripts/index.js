import whoIsTheWinner from "./algoritm.js"

const button = document.querySelector('.circle')
const board = document.querySelector('.board')
const divOfTheWinner = document.querySelector(".winner")
const restartButton = document.querySelector(".restart")
const divNextPlayer = document.querySelector(".next-player")
let Player = "X"
let game = []
let counter = 0
let winner = "None";
let state = localStorage.getItem("isLightTheme") || false
removeAndAddClasslist(document.body,"dark-theme","light-theme")
setDivDisplayMessage("none","")

button.addEventListener('click',e => {
   changeTheme();
 
})

function changeTheme() {
   state = !state
   localStorage.setItem("isLightTheme", state)
   if (state) return removeAndAddClasslist(document.body,"dark-theme","light-theme")
   removeAndAddClasslist(document.body,"light-theme","dark-theme")
}

function removeAndAddClasslist(element,themeToRemove,themeToAdd) {
   element.classList.remove(themeToRemove)
   element.classList.add(themeToAdd)
}
function setDivDisplayMessage(display,message) {
   divOfTheWinner.style.display = display
   divOfTheWinner.innerText = message
}

restartButton.addEventListener("click",e => {
   divOfTheWinner.style.display = "none"
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
	  winner == "None"  ? game = [] : setDivDisplayMessage("",`VENCEDOR: ${winner}`)
	  if (winner == "None" && counter == 9) setDivDisplayMessage('', "VENCEDOR: NENHUM")
   } 
})
