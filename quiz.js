let score = 0;
let currentQuestionIndex = 0;
 
let questions = [
    {
       question: 'Wie lange existiert schon die CSS?',
 
        answers: ['seit 1899','seit 1940','seit 1878','seit 1911'],
        correctAnswer: 0
    },
    {
        question: 'Wo ist der Hauptsitz der CSS?',
 
        answers: ['Stans','Zürich','Luzern','Genf'],
        correctAnswer: 2
    },
    {
        question: 'Was ist die CSS?',
 
        answers: ['eine Bank','eine Versicherung','eine Klinik','ein Bauunternehmen'],
        correctAnswer: 1
    },
    {
        question: 'Wie viele Mitarbeiter hat die CSS?',
 
        answers: ['500','1200','2450','2895'],
        correctAnswer: 3
    },
    {
        question: 'Wie viele Menschen versichert die CSS?',
 
        answers: ['ca.1mio','ca.1,7Mio','ca.500.000','ca.2Mio'],
        correctAnswer: 1
    },
    {
        question: 'Wofür steht die Abkürzung CSS?',
 
        answers: ['Chrichstlichsoziale Krankenkasse der Schweiz','Check Sicher und Stabil','Clever Sparen und Schützen','Contract Sicherung-Service'],
        correctAnswer: 0
    },
    {
        question: 'Welche Versicherung bietet die CSS an?',
 
        answers: ['Lebensversicherung','Rentenversicherung','Haftpflichtversicherung','Krankenversicherung'],
        correctAnswer: 3
    },
    {
        question: 'Welche Zusatzversicherung bietet die CSS?',
 
        answers: ['Reiseversicherung','Zahnzusatzversicherung','Autoversicherung','Rechtsschutzversicherung'],
        correctAnswer: 1
    },
];

function displayQuestion(){
 
    if(currentQuestionIndex >= questions.length){
       
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;

        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
   
    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
 
    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add('btn', 'btn-dark', 'me-2');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkanswer(index);
        answersDiv.appendChild(answerButton);
    });
}
 
displayQuestion();
 
function checkanswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
 
    if(userAnswer == correctAnswer){
        score+= 1;
    }
 
    nextQuestion();
}
 
function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}