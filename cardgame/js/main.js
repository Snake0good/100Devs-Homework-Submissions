if (!localStorage.getItem("deckId")) {
  getADeck()  

  localStorage.setItem('player1Score', 0);
  localStorage.setItem('player2Score', 0);
}

function getADeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          // save the deck id and set it in local storage
          deckId = data.deck_id
          localStorage.setItem('deckId', deckId)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
      
      
document.querySelector('button').addEventListener('click', drawTwo)


// show the scores on start-up
let localPlay1Score = Number(localStorage.getItem("player1Score"))      
let localPlay2Score = Number(localStorage.getItem("player2Score"))

document.querySelector('.play1score').innerText = localPlay1Score;
document.querySelector('.play2score').innerText = localPlay2Score;

// select the war-cards div to show and hide on war
const warCardsDiv1 = document.querySelector('.war-cards-1')
const warCardsDiv2 = document.querySelector('.war-cards-2')

function drawTwo() { 
  // hide and show divs
  p1CardDiv.style.opacity = 1;
  p2CardDiv.style.opacity = 1;
  warCardsDiv1.style.opacity = 0;
  warCardsDiv2.style.opacity = 0;

  // reset the cards to the center
  // shift player cards to the left
  p1CardDiv.style.transform = ``;
  p2CardDiv.style.transform = ``;


  // set button text to Deal 2 Cards
  document.querySelector('#btn').innerText = 'Deal Cards'


  let localDeck = localStorage.getItem("deckId");
  url = `https://deckofcardsapi.com/api/deck/${localDeck}/draw/?count=2`

  fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)

          data = data;

          // check for reshuffling
          reshuffle(data)

          document.querySelector('#player1').src = data.cards[0].image
          document.querySelector('#player2').src = data.cards[1].image

          // use a helper function for edge cases
          let player1Val = convertToNum(data.cards[0].value)
          let player2Val = convertToNum(data.cards[1].value)

          if(player1Val > player2Val) {
            document.querySelector('h3').innerText = 'Player 1 Wins This Round'
            
            // showing player scores
            // localPlay1Score = Number(localStorage.getItem("player1Score"))            
            localPlay1Score += 1
            localStorage.setItem("player1Score", localPlay1Score)   
            document.querySelector('.play1score').innerText = localPlay1Score;
         
          } else if (player1Val < player2Val) {
            document.querySelector('h3').innerText = 'Player 2 Wins This Round'
            
            // show player scores
            localPlay2Score += 1
            localStorage.setItem("player2Score", localPlay2Score)
            document.querySelector('.play2score').innerText = localPlay2Score;
            

            // // this is for testing wwiii
            // playWWIII(data)
          } else if (player1Val === player2Val) {
            document.querySelector('h3').innerText = 'Time for War'
            
            playWWIII(data)

          }

        })
        .catch(err => {
          console.log(`error ${err}`)
        });

}



// wwiii function 
function playWWIII(data) {
  if (data.remaining < 10) {
    getADeck()
  }

  // shift player cards to the left
  p1CardDiv.style.transform = `translateX(-150px)`;
  p2CardDiv.style.transform = `translateX(-150px)`;

  // show warcards div
  warCardsDiv1.style.opacity = 1;
  warCardsDiv2.style.opacity = 1;

  // loop trhough war cards div to select all of them and display
  let warDivs = document.querySelectorAll('.war-cards');
  console.log(warDivs)
  for (let i=0; i<warDivs.length; i++) {
    warDivs[i].style.display = 'flex'
  }

  let localDeck = localStorage.getItem("deckId");

  fetch(`https://deckofcardsapi.com/api/deck/${localDeck}/draw/?count=8`) 
    .then(res => res.json())
    .then(data => {
      for (let i=0; i<3; i++) {
        document.querySelector(`#war-1-${i+1}`).src = data.cards[i].image
        document.querySelector(`#war-2-${i+1}`).src = data.cards[i+5].image
      }
      
      document.querySelector('#war-1-0').src = data.cards[3].image
      document.querySelector('#war-2-0').src = data.cards[4].image
    
      // use a helper function for WAR CARD value
      let player1Val = convertToNum(data.cards[3].value)
      let player2Val = convertToNum(data.cards[4].value)

      if(player1Val > player2Val) {
        document.querySelector('h3').innerText = 'WAR WINNER to Player 1'           
        localPlay1Score += 5
        localStorage.setItem("player1Score", localPlay1Score)   
        document.querySelector('.play1score').innerText = localPlay1Score;
    
      } else if (player1Val < player2Val) {
        document.querySelector('h3').innerText = 'WAR WINNER to Player 2'
        
        // show player scores
        localPlay2Score += 5
        localStorage.setItem("player2Score", localPlay2Score)
        document.querySelector('.play2score').innerText = localPlay2Score;
      }

    })

    .catch(err => console.log(err))

}


// helper function
function convertToNum(val) {
  if(val === 'ACE') {
    return 14
  } else if (val === 'KING') {
    return 13
  } else if (val === 'QUEEN') {
    return 12
  } else if (val === 'JACK') {
    return 11
  } else {
    return Number(val)
  }
}


const p1CardDiv = document.querySelector('#player1Cards')
const p2CardDiv = document.querySelector('#player2Cards')

// reshuffle function
function reshuffle(data) {
  if (data.remaining === 0) {
    document.querySelector('h3').innerText = 'Sorry, gotta reshuffle the deck...'
    getADeck()
  }
}