function whoIsTheWinner(game) {   
   if (game[0] == "X" && game[3] == "X" && game[6] == "X") return "X"
   if (game[0] == "X" && game[1] == "X" && game[2] == "X") return "X"
   if (game[3] == "X" && game[4] == "X" && game[5] == "X") return "X"
   if (game[6] == "X" && game[7] == "X" && game[8] == "X") return "X"
   if (game[1] == "X" && game[4] == "X" && game[7] == "X") return "X"
   if (game[2]== "X" && game[5] == "X" && game[8] == "X") return "X"
   if (game[0] == "X" && game[4] == "X" && game[8] == "X") return "X"
   if (game[2] == "X" && game[4] == "X" && game[6] == "X") return "X"

   if (game[0] == "O" && game[3] == "O" && game[6] == "O") return "O"
   if (game[0] == "O" && game[1] == "O" && game[2] == "O") return "O"
   if (game[3] == "O" && game[4] == "O" && game[5] == "O") return "O"
   if (game[6] == "O" && game[7] == "O" && game[8] == "O") return "O"
   if (game[1] == "O" && game[4] == "O" && game[7] == "O") return "O"
   if (game[2]== "O" && game[5] == "O" && game[8] == "O") return "O"
   if (game[0] == "O" && game[4] == "O" && game[8] == "O") return "O"
   if (game[2] == "O" && game[4] == "O" && game[6] == "O") return "O"
   return "None"



 
}

export default whoIsTheWinner
