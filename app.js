const cardArray = [
    {
        name: '1',
        img: '/images/1.jpg'
    },
    {
        name: '2',
        img: '/images/2.jpg'
    },
    {
        name: '3',
        img: '/images/3.jpg'
    },
    {
        name: '4',
        img: '/images/4.jpg'
    },
    {
        name: '5',
        img: '/images/5.jpg'
    },
    {
        name: '6',
        img: '/images/6.jpg'
    },
    {
        name: '1',
        img: '/images/1.jpg'
    },
    {
        name: '2',
        img: '/images/2.jpg'
    },
    {
        name: '3',
        img: '/images/3.jpg'
    },
    {
        name: '4',
        img: '/images/4.jpg'
    },
    {
        name: '5',
        img: '/images/5.jpg'
    },
    {
        name: '6',
        img: '/images/6.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random()) // me dara de una forma random y facil 

const grid = document.getElementById('grid')
let result = document.getElementById('result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        //console.log(card,i)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOne = cardsChosenIds[0]
    const optionTwo = cardsChosenIds[1]
    console.log(cards)
    if(optionOne == optionTwo){
        cards[optionOne].setAttribute('src', 'images/blank.jpg')
        cards[optionTwo].setAttribute('src', 'images/blank.jpg')
        console.log('Has seleccionado la misma imagen')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        console.log('there is a match')
        cards[optionOne].setAttribute('src', 'images/white.png')
        cards[optionTwo].setAttribute('src', 'images/white.png')
        cards[optionOne].removeEventListener('click', flipCard)
        cards[optionTwo].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOne].setAttribute('src', '/images/blank.jpg')
        cards[optionTwo].setAttribute('src', '/images/blank.jpg')
    }
    result.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == (cardArray.length/2) ){
        result.textContent = 'Te ganaste una moradita!'
    }
}


function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    //console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500 )
    }
}


