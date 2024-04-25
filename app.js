const questions = [
    {
        question: "Which is the largest animal on the planet?",
        answers:[
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: " What is the biggest County in terms of Area?",
        answers:[
            { text: "Russia", correct: true },
            { text: "America", correct: false },
            { text: "Canada", correct: false },
            { text: "China", correct: false }
        ]
    },
    {
        question: "What is the most Spoken Language in the World?",
        answers:[
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin", correct: true },
            { text: "Arabic", correct: false }
        ]
    },
    {
        question: "What is the largest River in the World?",
        answers:[
            { text: "Amazon", correct: false },
            { text: "Nile", correct: false },
            { text: "Thames", correct: true },
            { text: "Indus", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = ()=>{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

const showQuestion = ()=>{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML  = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
         if(answer.correct){
           button.dataset.correct = answer.correct;  
         }
         button.addEventListener("click",selectAnswer);
     })
 } 

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

  const handleNextButton = ()=>{
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }

const showScore = ()=>{
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButto.innerHTML = "Play Again";
    nextButto.innerHTML = "Block";
}

 const selectAnswer = (e)=>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn. classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
        }
    );
    nextButton.style.display = "block";
}

const resetState = ()=>{
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


startQuiz();