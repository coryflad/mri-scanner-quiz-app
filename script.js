$(document).ready(function(){

    /*--- Questions Variable ---*/
    var questions = [
    //Question 1
          {
        question: 'The biggest and most important component of an MRI system is the:',
        choices: ['Bore', 'Imager', 'Magnet'],
        correct: 2,
        correctDetails:'As its name suggests, a magnetic resonance imaging (MRI) system has a magnet at is core. This magnet is so powerful it can suck metal objects into the tube (and out of a person\'s body). '
        },
    
    //Question 2  
         {
        question: 'The first MRI examination was performed on a human begin in:',
        choices: ['1967', '1985', '1977'],
        correct: 2,
        correctDetails:'The 1977 conduction of the first-ever MRI exam was a breakthrough in medical science. It allowed doctors to examine the interior of the human body in a way that had been impossible.'
        },
    
    //Question 3
          {
        question: 'For the purpose of an MRI, which element within the body is most important?',
        choices: ['Oxygen', 'Carbon', 'Hydrogen'],
        correct: 2,
        correctDetails:'Hydrogen atoms have one proton and a large magnetic moment. This means they react strongly to magnetic fields and are ideal for examination in an MRI machine'
        },  
    
    //Question 4
        {
        question: 'An MRI system uses an RF pulse to change the:',
        choices: ['spin of atoms\' nuclei', 'shape of the nuclei', 'amount of metal in a person\'s cells'],
        correct: 0,
        correctDetails:'An MRI\'s RF pulse changes the spin, or precession, of atoms\' nuclei. The hydrogen atoms line up with the direction of the MRI\'s magnetic field.'
        },
    
    //Question 5
        {
        question: 'What does an MRI system employ to convert mathematical data into a picture?',
        choices: ['RF pulse converter', 'Fourier transform', 'electron precession'],
        correct: 1,
        correctDetails:'Fourier transform uses mathematical functions to change the data retrieved by the MRI system into a picture that a doctor can examine to make a diagnosis.'
        }
    ];
    
    
    /*--- Result Message Variable ---*/
    var feedback = "Well Done";
    
    
    /*--- Variables ---*/
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;
    
    
    
    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.result-section').hide();
    
    
    /*--- On start quiz ---*/
    
      $('#startQuizButton').click(function(){  //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        questionDisplay();
      });
    
    
    $('.quiz-section').on('click', '#option', function(){
    
        var answer = $("input[id='option']:checked").val();
        /*var answer = $('input[name="option"]:checked').val();*/
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {  
            //if correct answer was selected    
              correctTotal++;
              //console.log(correctTotal);
        } 
            $('#result_msg').append("<p>Q:" + questions[questionNum].question + "</p>");
            $('#result_msg').append("<p>A:" + questions[questionNum].correctDetails + "</p>");
    
        //quiz is finished, show result-section
        if ((questionNum+1) == questionTotal) { 
              $('.result-section').show();
            $('#finalScore').text(correctTotal + "/" + questionTotal);
    
            //load correct feedback based on correctTotal 
    
            //$('#result_msg').append(feedback);
    
    
            $('start-button').show();
              //hide other "screens"
            $('.quiz-section').hide();
            $('.start-section').hide();
    
        } else {
               //continue to next question
            questionNum++;
            questionDisplay();
        }
      });
    
    
    
    
    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function(){
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
            //reset variables to start quiz again
            questionNum = 0;             
            correctTotal = 0;	
    });
    
    
    /*--- Display Questions ---*/
    function questionDisplay() {                           
        //displays the current question
        $('#questionNum').text("Question " + (questionNum+1) + " of " + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i=0; i<choiceTotal; i++) {                  
            //displays the answer choices
            $('#choices').append("<input type='radio' class='option' id='option' name='option' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
        }
      }
    
    
    }); 