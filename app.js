const quizquestion = [
    {
        id: 1,
        question: 'What does HTML stand for?',
        a: 'Home Tool Markup Language',
        b: 'Hyper Text Markup Language',
        c: 'Hyperlinks and Text Markup Language',
        correct: 'b',
    },
    {
        id: 2,
        question: 'Choose the correct HTML element for the largest heading?',
        a: '<head>',
        b: '<h6>',
        c: '<h1>',
        correct: 'c',
    },
    {
        id: 3,
        question: 'What is the correct HTML element for inserting a line break?',
        a: '<break>',
        b: '<br>',
        c: '<Ib>',
        correct: 'b'
    },
    {
        id: 4,
        question: 'What does CSS stand for?',
        a: 'Cascading style sheet',
        b: 'Creative style sheet',
        c: 'Colorful style sheet',
        correct: 'a'
    },
    {
        id: 5,
        question: 'Which HTML tag is used to define an internal style sheet?',
        a: '<css>',
        b: '<style>',
        c: '<script>',
        correct: 'b',
    },
    {
        id: 6,
        question: 'Which property is used to change the background color?',
        a: 'color',
        b: 'background-color',
        c: 'bgcolor',
        correct: 'b'
    },
    {
        id: 7,
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        a: '<script href="xxx.js">',
        b: 'script name ="xxx.js">',
        c: 'script src ="xxx.js">',
        correct: 'c',
    },
    {
        id: 8,
        question: 'How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World")',
        b: 'alert("Hello World")',
        c: 'alertbox("Hello World")',
        correct: 'b',
    },
    {
        id: 9,
        question: 'How do you create a function in JavaScript?',
        a: 'function myFunction()',
        b: 'function = myFunction()',
        c: 'fuction:myFunction()',
        correct: 'a',
    },
    {
        id: 10,
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i == 5 then',
        b: 'if (i == 5)',
        c: 'if i=5',
        correct: 'b'
    }
]
const quiz = document.getElementById("quiz")
// console.log(quiz)
const answer = document.querySelectorAll('.answer')
// console.log(answer)
const questions = document.getElementById('question')
// console.log(question)
const a_text = document.getElementById('a-text')
// console.log(a_text)
const b_text = document.getElementById('b-text')
// console.log(b_text)
const c_text = document.getElementById('c-text')
// console.log(c_text)
const submitbtn = document.getElementById('Submit')
// console.log(submitbtn)

let currentquiz = 0
let score = 0

function loadquiz(){
    deselectanswer()

    const currentquizanswer = quizquestion[currentquiz]
    questions.innerText = currentquizanswer.question
    a_text.innerText = currentquizanswer.a
    b_text.innerText = currentquizanswer.b
    c_text.innerText = currentquizanswer.c
}

function deselectanswer(){
    answer.forEach(answer1 => answer1.checked = false)
}
function getselect(){
    let answer2
    answer.forEach(answe1 =>{
        if(answe1.checked){
            answer2 = answe1.id 
        }
    })
    return answer2
}

submitbtn.addEventListener('click',()=>{
    const answer = getselect()
    if(answer){
        if(answer === quizquestion[currentquiz].correct){
        score++
        }
        currentquiz++
        if(currentquiz < quizquestion.length){
            loadquiz()
        }else{
            quiz.innerHTML = `<h2 class="box1">You Answer ${score}/${quizquestion.length} question correctly</h2>'
            <button onclick="location.reload()" class="Reload">Reload</button>`
        }
    }   
})