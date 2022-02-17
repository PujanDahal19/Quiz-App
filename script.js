let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

// FadeIN and fadeOut
const startBtn = document.querySelector('.start-btn')
const exitBtn = document.querySelector('.exit-btn')
const continueBtn = document.querySelector('.continue-btn')
const start = document.querySelector('#start .container');
const rules = document.querySelector('#rules .container')
const content = document.querySelector('#main-content .container')



startBtn.addEventListener('click', e=>{
    start.classList.add('fadeOut');
    rules.classList.remove('fadeOut');

});

continueBtn.addEventListener('click', e=>{
    rules.classList.add('fadeOut');
    content.classList.remove('fadeOut');
    nextBtn.classList.add('hide');
});

exitBtn.addEventListener('click', e=>{
    rules.classList.add('fadeOut');
    start.classList.remove('fadeOut');

});

const options = document.querySelector('.options');

// Show Questions
let quesNumber = 0;
const showQuestion = () =>{
    const question = document.querySelector('.question');
    
    let ques = questions.map(ques=>{
        return `<h2 class="ques">${ques.numb}. ${ques.question}</h2>`;
    })
    question.innerHTML = ques[quesNumber];
    
    const options = document.querySelector('.options');

    let ans = questions.map(answer=>{
        return `<p class="option">${answer.options[0]}</p>
        <p class="option">${answer.options[1]}</p>
        <p class="option">${answer.options[2]}</p>
        <p class="option">${answer.options[3]}</p>`;
    });
    options.innerHTML = ans[quesNumber];
    // console.log(ans)

    const nques = document.querySelector('.nquestion');

    let numberQues = questions.map(number=>{
      return `<span class="number">${number.numb}</span> of <span>5</span> Questions`
    })
    nques.innerHTML = numberQues[quesNumber];

}
showQuestion();

const nextBtn = document.querySelector('.next-que-btn');

nextBtn.addEventListener('click',()=>{
    nextBtn.classList.add('hide');
    decision.classList.add('hide');
    options.classList.remove('disable');

    quesNumber++;
    showQuestion();
    chooseOption();
    if(quesNumber > questions.length - 1){
      showResult();
      quesNumber = 0;
      

    }else{
      
    }
    
});


const result = document.querySelector('#result .container')
const resultExitBtn = document.querySelector('#result .exit-btn')

// Show Result
const showResult = ()=>{
  result.classList.remove('fadeOut');
  content.classList.add('fadeOut');
  
  resultExitBtn.addEventListener('click',()=>{
    result.classList.add('fadeOut');
    start.classList.remove('fadeOut');
  })
}


let correctAnswer = 0;
const correct = document.querySelector('.correct');
const decision = document.querySelector('.decision');
// Choose Option
const chooseOption = ()=>{
  
  const option = document.querySelectorAll('.option');

  option.forEach(item=>[
    item.addEventListener('click', ()=>{
      nextBtn.classList.remove('hide');
      decision.classList.remove('hide');
      options.classList.add('disable');

      let userAns = item.textContent;
      let correctAns = questions[quesNumber].answer;

      if(userAns == correctAns){
        decision.innerHTML = 'Correct Answer';
        decision.style.color = 'green';
        correctAnswer++;

      }else{
        decision.innerHTML = 'Wrong Answer';
        decision.style.color = 'red';
        
      }

      item.style.backgroundColor = 'teal';
      item.style.color = '#f1f2f3';

      

      correct.innerHTML = correctAnswer;
      if(correctAnswer > 2){
        correct.style.color = 'green';
      }
      else{
        correct.style.color = 'red';
      }
    })
  ])
}
chooseOption();
