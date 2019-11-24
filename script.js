//question database
const STORE = [
  {
    question: 'The biggest and most important component of an MRI system is the:',
    answers: [
      'Bore',
      'Imager',
      'Magnet',
      'Tecnologist'
    ],
    correctAnswer: 'Magnet',
    answerExplaination: 'As its name suggests, a magnetic resonance imaging (MRI) system has a magnet at is core. This magnet is so powerful it can suck metal objects into the tube (and out of a person\'s body).'
  },
  {
    question: 'The first MRI examination was performed on a human being in:',
    answers: [
      '1967',
      '1985',
      '1977',
      '1988'
    ],
    correctAnswer: '1977',
    answerExplaination: 'The 1977 conduction of the first-ever MRI exam was a breakthrough in medical science. It allowed doctors to examine the interior of the human body in a way that had been impossible.'
  },
  {
    question: 'For the purpose of an MRI, which element within the body is most important?',
    answers: [
      'Oxygen',
      'Carbon',
      'Hydrogen',
      'Lead'
    ],
    correctAnswer: 'Hydrogen',
    answerExplaination: 'Hydrogen atoms have one proton and a large magnetic moment. This means they react strongly to magnetic fields and are ideal for examination in an MRI machine.',
  },
  {
    question: 'An MRI system uses an RF pulse to change the:',
    answers: [
      'spin of atoms\' nuclei',
      'shape of the nuclei',
      'amount of metal in a person\'s cells'
    ],
    correctAnswer: 'spin of atoms\' nuclei',
    answerExplaination: 'An MRI\'s RF pulse changes the spin, or precession, of atoms\' nuclei. The hydrogen atoms line up with the direction of the MRI\'s magnetic field.'
  },
  {
    question:
      'What does an MRI system employ to convert mathematical data into a picture?',
    answers: [
      'RF pulse converter',
      'Fourier transform',
      'electron precession',
      'flux capacitor'
    ],
    correctAnswer:
      'Fourier transform',
    answerExplaination: 'Fourier transform uses mathematical functions to change the data retrieved by the MRI system into a picture that a doctor can examine to make a diagnosis.'
  },
];

//variables to store the quiz score and question number information
let score = 0;
let questionNumber = 0;

//template to generate each question
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return createThing(questionNumber);
  } else {
    $('.questionBox').hide();
    finalScore();
    $('.questionNumber').text(5);
  }
}

//increments the number value of the "score" variable by one
//and updates the "score" number text in the quiz view
function updateScore() {
  score++;
  $('.score').text(score);
}

//increments the number value of the "question number" variable by one
//and updates the "question number" text in the quiz view
function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

//resets the text value of the "question number" and "score" variables
//and updates their repective text in the quiz view
function resetStats() {
  score = 0;
  questionNumber = 0;
  $('.score').text(0);
  $('.questionNumber').text(0);
}

//begins the quiz
function startQuiz() {
  $('.altBox').hide();
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').hide();
    $('.questionNumber').text(1);
    $('.questionBox').show();
    $('.hideMe').show();
    $('.questionBox').prepend(generateQuestion());
  });
}

//submits a selected answer and checks it against the correct answer
//runs answer functions accordingly
function submitAnswer() {
  $('.jungleBox').on('submit', function (event) {
    event.preventDefault();
    $('.altBox').hide();
    $('.response').show();
    let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[questionNumber].correctAnswer;
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  });
}

//creates html for question form
function createThing(questionIndex) {
  let formMaker = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
  </form>`)

  let fieldSelector = $(formMaker).find('fieldset');

  STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
    $(`<label class="sizeMe" for="${answerIndex}">
        <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
  return formMaker;
}

//resulting feedback if a selected answer is correct
//increments user score by one
function correctAnswer() {
  $('.response').html(
    `<h3>Correct!</h3>
      <p class="sizeMe">You could maybe be as smart as Nikola Tesla!</p>
      <button type="button" class="nextButton button">Next</button>`
  );
  updateScore();
}

//resulting feedback if a selected answer is incorrect
function wrongAnswer() {
  $('.response').html(
    `<h3>Incorrect answer...</h3>
    <p class="sizeMe">The correct answer is:</p>
    <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
    <p class="sizeMe">${STORE[questionNumber].answerExplaination}</p>
    <button type="button" class="nextButton button">Next</button>`
  );
}

//generates the next question
function nextQuestion() {
  $('.jungleBox').on('click', '.nextButton', function (event) {
    $('.altBox').hide();
    $('.questionBox').show();
    updateQuestionNumber();
    $('.questionBox form').replaceWith(generateQuestion());
  });
}

//determines final score and feedback at the end of the quiz
function finalScore() {
  $('.final').show();
  $('.hideMe').hide();

  const great = [
    'Great job!',
    'You sure know a lot about MRI scanning!'
  ];

  const good = [
    'Good, not great.',
    'You might\'ve had an MRI before ...'
  ];

  const bad = [
    'Do you even know what MRI is?',
    'You should stick to X-Rays?'
  ];

  if (score >= 4) {
    array = great;
  } else if (score < 4 && score >= 2) {
    array = good;
  } else {
    array = bad;
  }
  return $('.final').html(
    `<h3>${array[0]}</h3>
        <h3>Your score is ${score} /5</h3>
        <p class="sizeMe">${array[1]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}

//takes user back to the starting view to restart the quiz
function restartQuiz() {
  $('.jungleBox').on('click', '.restartButton', function (event) {
    event.preventDefault();
    resetStats();
    $('.altBox').hide();
    $('.startQuiz').show();
  });
}

//runs the functions
function makeQuiz() {
  startQuiz();
  generateQuestion();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(makeQuiz);
