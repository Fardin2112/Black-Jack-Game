
let sum = 0
let cards = [];
let have_blackjack = false
let isAlive = false
let message = " "
let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("card-el")
let playerEL = document.getElementById("player-id")

// player details
let player ={
    name : "player",
    coins : 100
}
playerEL.textContent = player.name +": $" + player.coins

// for genrating random number
function generateRandomCard(){
  // below code genrate number from 1 to 13  
  let num = Math.floor(Math.random()*13) + 1
  if(num == 1){
    num = 11
  }else if(num > 10){
    num = 10
  }
  return num
}

// function to start game
function StartGame(){
    isAlive = true
    let first_card = generateRandomCard()
    let second_card = generateRandomCard()
    cards=[first_card,second_card]
    sum = first_card + second_card
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum : "+ sum
    cardEl.textContent = "Cards :";
    // loop for show our card data 
    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] +" , "
    }
    // condition to know our game status
    if(sum < 21){
        message = ("Do you want to draw a new card ? 🙂")
    }else if(sum === 21){
        message = ("Hurry! You've the Black Jack 🥳😍")
        have_black_jack = true
        player.coins +=20
    }else {
        message = ("You Loose 😒🥲")
        isAlive = false
        player.coins -= 10
    }
    // saving to our game status message
    messageEL.innerText = message   
    // player coins status
    playerEL.textContent = player.name +": $" + player.coins
}

// function to create new card
function NewCard(){
    if(isAlive == true && have_blackjack == false){
    let new_card = generateRandomCard()  
    sum += new_card
    cards.push(new_card)
    renderGame()  
    }
}


