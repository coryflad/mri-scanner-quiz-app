//question database
const STORE = [
    {//1
        question: 'The biggest and most important component of an MRI system is the:',
        answers: [
            'Bore',
            'Imager',
            'Magnet',
            'Technologist'
        ],
        correctAnswer: 'Magnet',
        answerExplaination: 'As its name suggests, a magnetic resonance imaging (MRI) system has a magnet at is core. This magnet is so powerful it can suck metal objects into the tube (and out of a person\'s body).'
    },
    {//2
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
    {//3
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
  {//4
    question: 'An MRI system uses an RF pulst to change the:',
    answers: [
      'spin of atoms nuclei',
      'shape of the nuclei',
      'amount of metal in a person\'s cells'
    ],
    correctAnswer: 'spin of atoms nuclei',
    answerExplaination: 'An MRI\'s RF pulse changes the spin, or precession, of atoms nuclei. The hydrogen atoms line up with the direction of the MRI\'s magnetic field.'
  },
    {//5
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
    {//6
        question:
            'The most common type of magnet used in a MRI system is the:',
        answers: [
            'resistive magnet',
            'permanent magnet',
            'superconducting magnet',
            'the magnet at the North Pole'
        ],
        correctAnswer:
            'superconducting magnet',
        answerExplaination: 'Although all three types of magnets can be used in an MRI machine, the superconducting magnet is the most common. In general, large enough resistive magnets are too expensive, and powerful enough permanent magnets are too big.'
    },
    {//7
        question:
            'In a superconducting magnet, the coils are bathed in liquid helium:',
        answers: [
            'to keep the system from overheating',
            'to keep the area around the coils sterile',
            'to reduce the amount of resistance in the wire',
            'to help keep the scan room cool'
        ],
        correctAnswer:
            'to reduce the amount of resistance in the wire',
        answerExplaination: 'At normal temperatures, it would take lots of power to send electricity through all the wire in a superconducting magnet. But at the very cold temperature of liquid helium, there\'s almost no resistance in the wire, greatly reducing the need for power.'
    },
    {//8
        question:
            'MRI scans tend to be very noisy. The noise comes from:',
        answers: [
            'opposition of the main magnetic field to the current in the gradient magnets wires',
            'stray particles within the system being thrown about by the magnetic field',
            'movement of the magnet from place to place'
        ],
        correctAnswer:
            'opposition of the main magnetic field to the current in the gradient magnets wires',
        answerExplaination: 'The stronger the main magnetic field in an MRI, the louder the banging will be when it encounters the current in the gradient magnets\' wires. For this reason, many MRI centers give patients earphones or earplugs.'
    },
    {//9
        question:
            'What component of an MRI system allows it to choose exactly where in the body to acquire an image?',
        answers: [
            'Gradient magnets',
            'Bore',
            'Contrast injector'
        ],
        correctAnswer:
            'Gradient magnets',
        answerExplaination: ' Gradient magnets are small magnets that change the field within an MRI system. When turned on and off very rapidly, they essentially change the focus of the overall field.'
    },
    {//10
        question:
            'What unit of measure are MRI scanners calibrated to?',
        answers: [
            'Centimeters',
            'Kelvin',
            'Tesla'
        ],
        correctAnswer:
            'Tesla',
        answerExplaination: 'MRI machines are calibrated in Tesla units. Nikola Tesla is associated with the discovery of the rotating magnetic field.'
    },
];

//variables to store the quiz score and question number information
let score = 0;
let questionNumber = 0;

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

//creates html for question form
function createThing(questionIndex) {
    let formMaker = $(`<form>
        <fieldset>
            <legend class='questionText'>${STORE[questionIndex].question}</legend>
        </fieldset>
    </form>`)

    let fieldSelector = $(formMaker).find('fieldset');

    STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
        $(`<label class='sizeMe' for="${answerIndex}">
            <input class='radio' type='radio' id='${answerIndex}' value='${answerValue}' name='answer' required>
            <span>${answerValue}</span>
          </label>
          `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
    return formMaker;
}

//template to generate each question
function generateQuestion() {
    if (questionNumber < STORE.length) {
        return createThing(questionNumber);
    } else {
        $('.questionBox').hide();
        finalScore();
        $('.questionNumber').text(10);
    }
}

//submits a selected answer and checks it against the correct answer
//runs answer functions accordingly
function submitAnswer() {
    $('.mriBox').on('submit', function (event) {
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

//resulting feedback if a selected answer is correct
//increments user score by one
function correctAnswer() {
    $('.response').html(
        `<h3>Correct!</h3>
        <p class='sizeMe'>${STORE[questionNumber].answerExplaination}</p>
        <button type='button' class='nextButton button'>Next</button>`
    );
    updateScore();
}

//resulting feedback if a selected answer is incorrect
function wrongAnswer() {
    $('.response').html(
        `<h3>Incorrect!</h3>
        <p class='sizeMe'>The correct answer is: ${STORE[questionNumber].correctAnswer}</p>
        <p class='sizeMe'>${STORE[questionNumber].answerExplaination}</p>
        <button type='button' class='nextButton button'>Next</button>`
    );
}

//generates the next question
function nextQuestion() {
    $('.mriBox').on('click', '.nextButton', function (event) {
        $('.altBox').hide();
        $('.questionBox').show();
        updateQuestionNumber();
        $('.questionBox form').replaceWith(generateQuestion());
    });
}

//increments the number value of the 'score' variable by one
//and updates teh 'score number text in the quiz view'
function updateScore() {
    score++;
    $('.score').text(score);
}

//increments the number value of the 'question number' variable by one
//and updates the 'question number' text in the quiz view
function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
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
        'Not bad...',
        'You might\'ve had an MRI before ...'
    ];

    const bad = [
        'Nikola Tesla would be disappointed in you!',
        'You should stick to X-Rays!'
    ];

    if (score >= 8) {
        array = great;
    } else if (score < 8 && score >= 5) {
        array = good;
    } else {
        array = bad;
    }
    return $('.final').html(
        `<h3>${array[0]}</h3>
            <h3>Your score is ${score} /10</h3>
            <p class='sizeMe'>${array[1]}</p>
            <button type='submit' class='restartButton button'>Restart</button>`
    );
}

//resets the text value of the 'question number' and 'score' variables
//and upates their respective text in the quiz view
function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
}

//takes user back to the starting view to restart the quiz
function restartQuiz() {
    $('.mriBox').on('click', '.restartButton', function (event) {
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