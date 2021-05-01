const cards = [
    { 
        question: 'How does this works?', 
        answer: 'Add new card in button at the top and write some questions!'
    },
    {
        question: 'Who u? ', 
        answer: 'Do u care?'
    },
    {
        question: 'Who u? 2', 
        answer: 'Do u care?'
    },
    {
        question: 'Who u? 3 ', 
        answer: 'Do u care?'
    },
    {
        question: 'Who u? 4', 
        answer: 'Do u care?'
    },
    {
        question: 'Who u? 5', 
        answer: 'Do u care?'
    },
];

const   card = document.querySelector('.card'), 
        question = card.querySelector('.question'), 
        answer = card.querySelector('.answer'), 
        showAnswer = card.querySelector('.show-answer'),
        prevButton = document.querySelector('.prev'), 
        nextButton = document.querySelector('.next'), 
        total = document.querySelector('.current')


let currentQuestion = 0;
let totalCount = cards.length;
question.innerHTML = cards[currentQuestion].question;
answer.innerHTML = cards[currentQuestion].answer;
changeTotalStatus();

nextButton.onclick = () => {
    if(currentQuestion < (totalCount-1)){
        currentQuestion++; 
        question.innerHTML = cards[currentQuestion].question;
        answer.innerHTML = cards[currentQuestion].answer;
        changeTotalStatus()
    }
}

prevButton.onclick = () => {
    if(currentQuestion > 0){
        currentQuestion --; 
        question.innerHTML = cards[currentQuestion].question;
        answer.innerHTML = cards[currentQuestion].answer;
        changeTotalStatus()
    }
}


showAnswer.onclick = () => {
    answer.style.opacity = '1';
}


function changeTotalStatus() {
    total.innerHTML = `${currentQuestion+1}/${totalCount}`;
}






