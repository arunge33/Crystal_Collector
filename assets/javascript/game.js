


$( document ).ready(function(){
  var Random=Math.floor(Math.random()*120+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120

  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var emerald = Math.floor(Math.random()*11+1)
  var ruby = Math.floor(Math.random()*11+1)
  var purple = Math.floor(Math.random()*11+1)
  var yellow = Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  //
  var totalScore= 0;
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWin').text(wins);
$('#numberLose').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      emerald = Math.floor(Math.random()*11+1);
      ruby = Math.floor(Math.random()*11+1);
      purple = Math.floor(Math.random()*11+1);
      yellow = Math.floor(Math.random()*11+1);
      totalScore = 0;
      $('#finalTotal').text(totalScore);
      }
//adds the wins to the totalScore
function win(){
alert("You Have Won the Treasure of the Cave of Wonders!");
  wins++;
  $('#numberWin').text(wins);
  reset();
}
//addes the losses to the totalScore
function lose(){
alert ("You Lose, You Have Been Cursed!");
  losses++;
  $('#numberLose').text(losses);
  reset()
}
//sets up click for jewels
  $('#emerald').on ('click', function(){
    totalScore = totalScore + emerald;
    console.log("New totalScore= " + totalScore);
    $('#finalTotal').text(totalScore);
          //sets win/lose conditions
        if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          lose();
        }
  })
  $('#ruby').on ('click', function(){
    totalScore = totalScore + ruby;
    console.log("New totalScore= " + totalScore);
    $('#finalTotal').text(totalScore);
        if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          lose();
        }
  })
  $('#purple').on ('click', function(){
    totalScore = totalScore + purple;
    console.log("New totalScore= " + totalScore);
    $('#finalTotal').text(totalScore);
//sets win/lose conditions
          if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          lose();
        }
  })
  $('#yellow').on ('click', function(){
    totalScore = totalScore + yellow;
    console.log("New totalScore= " + totalScore);
    $('#finalTotal').text(totalScore);

          if (totalScore == Random){
          win();
        }
        else if ( totalScore > Random){
          lose();
        }
  });
});
