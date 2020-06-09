document.addEventListener('DOMContentLoaded', () => {
    const imgArray = [
        {
            name: 'ananas',
            value: 'images/ananas.png'
        },
        {
            name: 'ball',
            value: 'images/ball.png'
        },
        {
            name: 'melon',
            value: 'images/melon.png'
        },
        {
            name: 'summer',
            value: 'images/summer.png'
        },
        {
            name: 'sun',
            value: 'images/sun.png'
        },
        {
            name: 'watermelon',
            value: 'images/watermelon.png'
        },
    ]

    const cardArray = [...imgArray, ...imgArray].sort(() => 0.5 - Math.random());
    let chosenCards = [];
    let chosenCardsId = [];
    const wonCards = [];

    const grid = document.querySelector('.grid');

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/cover.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    // check for match
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const cardOneId = chosenCardsId[0];
        const cardTwoId = chosenCardsId[1];
        if (chosenCards[0] === chosenCards[1]) {
            alert('You found a match');
            cards[cardOneId].setAttribute('src', 'images/blank.png');
            cards[cardTwoId].setAttribute('src', 'images/blank.png');
            wonCards.push(chosenCards);
        } else {
            alert('Sorry, try again');
            cards[cardOneId].setAttribute('src', 'images/cover.png');
            cards[cardTwoId].setAttribute('src', 'images/cover.png');
        }

        chosenCards = [];
        chosenCardsId = [];
    }

    // flip your card
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        chosenCards.push(cardArray[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cardArray[cardId].value);
        if (chosenCards.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})


