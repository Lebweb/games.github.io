document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

function randomNumber() {
    alert("Попробуй угадать случайное число, удачи!");
    const number = Math.floor(Math.random() * 101);
    let userAnswer;
    while (userAnswer !== number) {
        userAnswer = Number(prompt("Твой вариант?"));
        if (number === userAnswer) {
            alert("Урааа, ты справился! Ждем тебя еще! 😉");
            break;
        } else {
            if (number > userAnswer) {
                alert("Это число больше, попробуй еще раз!");
            } else{
                alert("Это число меньше, попробуй еще раз!")
            }
        }
    }
}

function randomTask(){
    alert("Попробуй решить простую арифметическую задачу, удачи!");
    const operators = ['+', '-', '*', '/']
    const num1 = Math.floor(Math.random() * 101);
    let num2 = Math.floor(Math.random() * 101);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '/' && num2 === 0){
        num2 = 1;
    }
    let task = `${num1} ${operator} ${num2}`;
    const userAnswer = Number(prompt(task));
    if (operator === '-') {
      answer=num1-num2;
    } else if (operator === '+') {
      answer=num1+num2;
    } else if (operator === '*') {
      answer=num1*num2;
    } else {
      answer=num1/num2;
    }
    if (userAnswer === answer) {
      alert('Молодец, это правильный ответ! 😀');
    } else {
      alert('К сожалению, ты ошибся! 😔')
    }
}

function reverseText() {
    let userText = String(prompt('Введите ваш текст!'));
    let text = userText.split('');
    let reverseText = text.reverse();
    let conclusion = reverseText.join('');
    alert(conclusion);
}

function quiz() {
  const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
  alert('Вам предлагается ответить на три вопроса, удачи! 😉');
  const arrAnswer = ['Синий','Семь','Пять'];
  let count = 0;
  for (let i = 0; i < quiz.length; i++) {
    alert(`${i + 1}. Вопрос: ${quiz[i].question}`);
    const userAnswer = prompt(`${quiz[i].options.join(' ')}`);
    if (userAnswer.toLowerCase() === quiz[i].correctAnswer.toString().toLowerCase() || userAnswer.toLowerCase() === arrAnswer[i].toLowerCase()){
      alert('Верно! 😀');
      count++;
    } else {
      alert('Не верно! 😔')
    }
  }
  alert(`Количество правильных ответов: ${count}`);
}

function rockScissorsPaper() {
  const choice = prompt('Камень, ножницы, бумага?');
  if (choice.toLowerCase() === 'камень' || 
      choice.toLowerCase() === 'ножницы' || 
      choice.toLowerCase() === 'бумага') {
        let arrChoice = ['камень','ножницы','бумага'];
        let randomIndex = Math.floor(Math.random()*3);
        const compChoice = arrChoice[randomIndex];
      
        alert(`Выбор компьютера: "${compChoice}", Выбор пользователя: "${choice}"`)
      
        if (compChoice.toLowerCase() === choice.toLowerCase()) {
          alert('Ничья! 😉')
        } else if ((compChoice.toLowerCase() === 'камень' && choice.toLowerCase() === 'ножницы') ||
                   (compChoice.toLowerCase() === 'ножницы' && choice.toLowerCase() === 'бумага') || 
                   (compChoice.toLowerCase() === 'бумага' && choice.toLowerCase() === 'камень')) {
          alert('Вы проиграли! 😔')
        } else {
          alert('Вы выиграли! 😀')
        } 
  } else {
    alert('Вы ввели белиберду! 🤔')
  }

}

const btnBackgrondColor = document.querySelector('.catalog-games__button_generator')
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + "," + b + ")";
}
btnBackgrondColor.addEventListener('click', () =>{
  const gamesBackgroundColor = document.querySelector('.mini-games');
  let color = getRandomColor();
  gamesBackgroundColor.style.backgroundColor = color;
});


const btnClickHead = document.querySelector('.header__button');
btnClickHead.addEventListener('click', e=>{
  e.preventDefault();
  document.querySelector(btnClickHead.dataset.href).scrollIntoView({ behavior: 'smooth' });
});

const btnClickHeadMobile = document.querySelector('.header__mobile-button');
btnClickHeadMobile.addEventListener('click', e=>{
  e.preventDefault();
  document.querySelector(btnClickHeadMobile.dataset.href).scrollIntoView({ behavior: 'smooth' });
});