

// Dom selectors class
class DOMSelections {
  constructor () {
  this.start = document.getElementById('start');
  this.result = document.getElementById('result-points')
  this.progressBar = document.getElementById('progress-bar');
  this.prog = document.getElementById('prog');
  this.progressPrecent = document.getElementById('progress-precent');
  this.formDiv = document.getElementById('form-div');
  this.form = document.getElementById('form');
  this.textSucces = document.querySelector('.span-points');
  this.btnSend = document.querySelector('.btn-send');
  this.counterVar = document.querySelector('.counter');
  this.counterDiv = document.getElementById('counter-div');
  this.divStartAgain = document.getElementById('btn-start-again');
  this.btnStartAgain = document.querySelector('.btn-start-again');
  }
};


// create data structure class
class Questions  {
  constructor(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

// init function to be called when the app has to be started over again
static init () {
const selector = new DOMSelections;

selector.result.style.display = 'none';
selector.progressBar.style.display = 'none';
selector.formDiv.style.display = 'none';
selector.counterDiv.style.display = 'none';
selector.divStartAgain.style.display = 'none';
Questions.createQuestion(q1);
// call send Button function, the main function of the app where the logic flows reside 
sendButtonFunction()
//call show counter to display the number of question on UI
Questions.showCounter(1);
  }

// create UI function 
static createQuestion (question) {
const selector = new DOMSelections;
    // create the UI for question 
      const divGen = document.createElement('div')
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');
      const p = document.createElement('div');
      const checkbox = document.createElement('input');
      const span = document.createElement('span');
      const checkbox1 = document.createElement('input');
      const span1 = document.createElement('span');
      const breckLine = document.createElement('br');
      const space = document.createElement('hr');
      const checkbox2 = document.createElement('input');
      const span2 = document.createElement('span');
      const button = document.createElement('button');
      // clear the DOm before a new question is created
      selector.form.innerHTML = '';
      // elemnts created question body insert 
      p.appendChild(document.createTextNode(`${question.question}`));
      span.appendChild(document.createTextNode(`${question.answer[0]}`));
      span1.appendChild(document.createTextNode(`${question.answer[1]}`));
      span2.appendChild(document.createTextNode(`${question.answer[2]}`));
  
      span.classList = 'p-3';
      span1.classList = 'p-3';
      span2.classList = 'p-3';
  
      checkbox.type = 'checkbox';
      checkbox1.type = 'checkbox';
      checkbox2.type = 'checkbox';
  
      checkbox.id = 'answer1';
      checkbox1.id = 'answer2';
      checkbox2.id = 'answer3';
  
      checkbox.value = `${question.correct[0]}`;
      checkbox1.value = `${question.correct[1]}`;
      checkbox2.value = `${question.correct[2]}`;
  
      checkbox.classList ='p-5 ml-3';
      checkbox1.classList ='p-5 ml-3';
      checkbox2.classList ='p-5 ml-3';
  
      divGen.classList = 'd-inline mt-3';
      div1.classList = (' my-3 text-muted');
      div2.classList = (' my-3 text-muted');
      div3.classList = (' my-3 text-muted');

      button.classList = 'btn btn-send d-block form-control text-light bg-primary p-2 m-3 text-center';
      button.textContent = 'Send Answer';
      button.type = 'submit'
      p.classList = 'lead text-muted font-weight-bold col';
     
    // append firs elemnt create d in the DOm then all the rest of elemnts created to it
      selector.form.insertAdjacentElement('afterbegin', divGen);
     
      // append elements to the DOM
     divGen.appendChild(p);
      p.appendChild(space);
      divGen.appendChild(breckLine);
      divGen.appendChild(div1)
      div1.appendChild(checkbox);
      div1.appendChild(span);
      div1.appendChild(breckLine);
      div1.appendChild(div2)
      div2.appendChild(checkbox1);
      div2.appendChild(span1);
      div2.appendChild(breckLine)
      div2.appendChild(div3);
      div3.appendChild(checkbox2);
      div3.appendChild(span2);
      div3.appendChild(button);
  }
  // display result function 
  static displayResult (value) {
    const selector = new DOMSelections;
    let html;
    let string = '';
    if (value === 0) {
      string = 'No words. Just hang yoursef!'
    }else if (value === 10) {
      string = 'What you want me to say? Just clean the room!'
    }else if (value === 20) {
      string = 'You are such an ...! No matter! Shame on you!' 
    }else if (value === 30) {
      string = 'Oh my god how stupid you are!'
    }else if (value === 40) {
     string = 'Beah, only this you can? You\'re worth nothing! I would be ashemd if I were you!'
    }else if (value === 50) {
      string = 'Too vaeraghe man, too average! Try hard'
    }else if (value === 60) {
      string = 'You just got a bit more than 50 points, that means you\'re still pretty stupid!'
    }else if (value === 70) {
      string = ' Mah, you want me to say that you are good? because I won\'t!'
    }else if (value === 80) {
      string = 'You could have been, but you\'re not!'
    }else if (value === 90) {
      string = 'Man, just a little bit more and you cuold have done it! I have no words to say to you!'
    }else if (value === 100) {
      string = 'Bravo! This is it! You did it! Now wait for 1 milion euro to get into your banck account!'
    }

    html = `
    <div class="display-4 text-info">
    <h1> You got ${value} points this round! ${string}</h1>
    </div>
    `;
    // show the start again button
    selector.divStartAgain.style.display = 'block';
    //add the form created to the DOM
    selector.form.innerHTML = html;
    // relod the page on start quiz button click 
    selector.start.addEventListener('click', () => {
      location.reload()
      Questions.startQuiz()
    });
    // add a button to start again the quiz when the display result is shown
    selector.btnStartAgain.addEventListener('click', () => {
      location.reload()
    })
  }
  // start quiz function - loads the first question and the progress bar to the DOM
static startQuiz () {
const selector = new DOMSelections;

    selector.result.style.display = 'block'
    selector.progressBar.style.display = 'block';
    selector.counterDiv.style.display = 'block';
    selector.prog.setAttribute('style', 'width:0%');
    selector.formDiv.style.display = 'block';
    //call show counter to display the number of question on UI
    Questions.showCounter(1);
  }
// increase precent function takes care of updating the style width proriety of the progress bar in order to display the progress 
static increasePrecent(value) {
const selector = new DOMSelections;

    selector.result.style.display = 'block';
    selector.prog.setAttribute('style', `width:${value}%`);
    selector.progressPrecent.textContent = `${value}%`
    selector.textSucces.textContent = `${value}`
  }
  //show counter to display the number of question on UI
  static showCounter (counter) {
   const selector = new DOMSelections();
   selector.counterVar.textContent = counter;
  }
};



// the questions created with new questions constructor class. I probably better cut them form the global scope and put them in some function or so
const q1 = new Questions('	Where do you see yourself living 10 years from now?', ['In a bustling city, like New York, Paris or London!', 'Not too far from the rest of my family!', 'In my parent\'s basement'], ['incorrect', 'incorrect', 'correct']);
const q2 = new Questions('What did you do last weekend?', ['I went out on the town.', 'I got drunk, why you ask?','Spent time with me, my sweats and the TV'], ['incorrect', 'correct', 'incorrect']);
const q3 = new Questions('You talk most often to?', ['To my immaginary friend Sam the corsar!', 'Your family and friends', 'Your pet or yourself' ], ['correct', 'incorrect', 'correct']);
const q4 = new Questions('Do you like to try new things?', ['Every now and then I like the exhilaration of trying something new', 'No, because I know I probably will not like them', 'Yes of course, every new label of wisky!'], ['incorrect', 'incorrect', 'correct']);
const q5 = new Questions('Do you like money?', ['No, are you crazy?', 'Of course I like money, do you give me some?', 'Beah, money are so evil! But still...'], ['incorrect', 'correct', 'incorrect']);
const q6 = new Questions('If you could break the legs of someone you despised without getting caught, would you do it?', ['Yes, one hundred times yes!', 'No, I am not a violent person! Are you crazy?', 'Only if I need!'], ['correct', 'incorrect', 'incorrect']);
const q7 = new Questions('Your child has been repeatedly harassed by a bully at school. Do you...', ['Ask for a meeting with the principal and the bully s parents.', 'Call the bully s parents and leave a nasty message!', 'Wait the bully out of the school and teach him a good lesson!'], ['incorrect', 'incorrect', 'correct']);
const q8 = new Questions('You are out on the town and, across the bar, you see your fiancé making out with someone else. Do you...', ['Walk over and throw a drink in their face', 'Leave the bar, head to their place and set it on fire', 'Change the finacé'], ['incorrect', 'incorrect', 'correct']);
const q9 = new Questions('Is anything better than angry sex?', ['Yes, a bottle of wisky!', 'No way! The best thing ever!', 'Maybe but I did not tried yet the maybe!'],['incorrect', 'incorrect', 'correct']);
const q10 = new Questions('Have you ever made your partner cancel plans with his buddies just to make sure you are still in charge?', ['Yes, every single time!', 'No man! That is so ugly!', 'No but I think I will now you gave me the idea!'], ['incorrect', 'incorrect', 'correct']);
const q11 = new Questions('You like girls or you like mans?', ['Ohhh! Of course I like girls!', 'No girls man! I like boys', 'Neather girls newthe mans, I like my neighbour!'], ['incorrect', 'incorrect', 'correct']);

Questions.init();
// load event listner function 
function eventListener () {
  const selector = new DOMSelections;
  selector.start.addEventListener('click', Questions.startQuiz);
};
// call event listenr function 
 eventListener();


 // wrap in a clouser the event listener of submit question in order to render the counter and the progress variable private;
 function sendButtonFunction () {
  const selector = new DOMSelections;
  const arr = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11]
  
  let counter = 0;
  let progressCount = 0;
 
  // event listenr for submit answer 
   selector.form.addEventListener('submit', (e) => {
      e.preventDefault();
    // grab the answer checked value here;
    const valueCI = [selector.form.answer1.value, selector.form.answer2.value, selector.form.answer3.value];
    //use destructuring 
    [ans1, ans2, ans3] = valueCI
   
    // first logic flow, takes care of increasing counter by 1 on each click; 
    if (document.getElementById('answer1').checked || document.getElementById('answer2').checked || document.getElementById('answer3').checked) {
       counter === arr.length  ? counter = arr.length : counter += 1;
       Questions.showCounter(counter);
    }; 
    
    // second logic flow, takes care of progress variable increase 
    if (document.getElementById('answer1').checked && ans1 === 'correct' || document.getElementById('answer2').checked && ans2 === 'correct' || document.getElementById('answer3').checked && ans3 === 'correct') {
      progressCount !== arr.length * 10 ? progressCount +=  10 : progressCount = arr.length * 10;
     
    };
   
    // third logic flow, display result function once the counter has reched the length of the array question and display the result after 1 second;
    if (counter === arr.length - 1) {
      setTimeout(() => {
        Questions.displayResult(progressCount);
      }, 1000);
      setTimeout(() => {
      location.reload()
    }, 10000);
    }; 

    

   // the main logic flow; takes care of calling the proper function elated to the conditions that are met
   if (document.getElementById('answer1').checked && ans1 === 'correct' ) {
    
        Questions.createQuestion(arr[counter]);
        Questions.increasePrecent(progressCount);
    }else if (document.getElementById('answer1').checked && ans1 === 'incorrect' ) {
      
      Questions.createQuestion(arr[counter]);
   }else if (document.getElementById('answer2').checked && ans2 === 'correct' ) {
        Questions.createQuestion(arr[counter]);
        Questions.increasePrecent(progressCount);
    }else if (document.getElementById('answer2').checked && ans2 === 'incorrect' ) {
   
      Questions.createQuestion(arr[counter]);
   }else if (document.getElementById('answer3').checked && ans3 === 'correct' ) {
        Questions.createQuestion(arr[counter]);
        Questions.increasePrecent(progressCount);
    }else if (document.getElementById('answer3').checked && ans3 === 'incorrect' ) {
  
      Questions.createQuestion(arr[counter]);
  } 
 });
}


