let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 100
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
   
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
        console.log(cards.length[i])
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw another card ?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "Darn it! You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message  
}
function newCard() {
    if (isAlive) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}






























// function checkBlackJack() {
//     if (sum === 21) {
//         message = "Blackjack!"
//         hasBlackJack = true
//     }
// }

// function checkBust() {  
//     if (sum > 21) {
//         message = "Darn it! You are out of the game!"
//         isAlive = false
//     }
// }
