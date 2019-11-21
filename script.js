
// this starts the quiz app
function startQuiz() {
    $('#start').on('click', function (event) {
        renderAQuestion();
    });
    console.log('`startQuiz` ran');
}


//displays question number and score obtained
function updateQuestionAndScore() {

    console.log('`updateQuestionAndScore` ran');
}


// displays the options for the current question
function updateOptions() 
{
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
        $('.js-options').append(`
        <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
        <label for="option${i+1}"> ${question.options[i]}</label> <br/>
        <span id="js-r${i+1}"></span>
        `)
    }
}


//displays the question
function renderAQuestion() {
    let question = STORE.questions[STORE.currentQuestion];
    const questionHtml = $(`
    <div>
    <form id="js-questions" class="question-form">
      
      <fieldset>
        <div class="row question">
          <div class="col-12">
            <legend> ${question.question}</legend>
          </div>
        </div>

        <div class="row options">
          <div class="col-12">
            <div class="js-options"> </div>
        </div>
      </div>
    

      <div class="row">
        <div class="col-12">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next >></button>
        </div>
      </div>
    </fieldset>
    </form>
  </div>`);
    $('main').html(questionHtml);
}


//displays results and restart quiz
function displayResults() {

    console.log('`displayResults` ran');
}


//checks whether it reached the end of questions list
function handleQuestions() {

    console.log('`handleQuestions` ran');
}

//checks whether the chosen option is right or wrong and displays respective message
function handleSelectOption() {

    console.log('`handleSelectOption` ran');
}

function restartQuiz() {
    console.log('`restartQuiz` ran');
}



function handleQuizApp() {
    startQuiz();
    updateQuestionAndScore();

    displayResults();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);