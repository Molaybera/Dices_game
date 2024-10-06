//                      dices

// var number1 = Math.random()*6+1;
// var randomNumber1 = Math.floor(number1);
// var number2 = Math.random()*6+1;
// var randomNumber2 = Math.floor(number2);

// var image1 = document.getElementById("img1");
// image1.setAttribute("src","./images/dice"+randomNumber1+".png");

// var image2 = document.getElementById("img2");
// image2.setAttribute("src","./images/dice"+randomNumber2+".png");

// if( randomNumber1 > randomNumber2){ 
//     document.querySelector("h1").innerHTML = "player 1 win 🚩";
// } else if( randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "player 2 win 🚩";
// } else{
//     document.querySelector("h1").innerHTML = "draw";
// }


                    // Ai modified 

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
  
    // Function to roll the dice and update the dice images and result text
    function rollDice() {
      // Generate a random number between 1 and 6 for Player 1's dice
      var number1 = Math.floor(Math.random() * 6) + 1;
      // Generate a random number between 1 and 6 for Player 2's dice
      var number2 = Math.floor(Math.random() * 6) + 1;
  
      // Get the image element for Player 1's dice using its ID
      var image1 = document.getElementById("img1");
      // Get the image element for Player 2's dice using its ID
      var image2 = document.getElementById("img2");
  
      // Set the source attribute of Player 1's dice image to the corresponding dice image file
      image1.setAttribute("src", "./images/dice" + number1 + ".png");
      // Set the source attribute of Player 2's dice image to the corresponding dice image file
      image2.setAttribute("src", "./images/dice" + number2 + ".png");
        
      // Compare the dice values to determine the winner and update the heading text
      if (number1 > number2) {
        // If Player 1's dice value is greater, display that Player 1 wins
        document.getElementById("Refresh").innerHTML = "Player 1 Wins 🚩";
      } else if (number1 < number2) {
        // If Player 2's dice value is greater, display that Player 2 wins
        document.getElementById("Refresh").innerHTML = "Player 2 Wins 🚩";
      } else {
        // If both dice values are equal, display that it's a draw
        document.getElementById("Refresh").innerHTML = "It's a Draw";
      }
    }
  
    // Initial roll of the dice when the page first loads
    rollDice();
  
    // Get the button element by its ID
    var rollButton = document.getElementById("rollButton");
    // Add an event listener to the button to roll the dice when clicked
    rollButton.addEventListener("click", rollDice);
  });
  