const STORE = [
    //1
    {
        questionText: 'The biggest and most important component of an MRI system is the:',
        questionChoices: [
            'Bore',
            'Imager',
            'Magnet',
            'Table'
        ],
        questionCorrectChoice: 2,
        correctAnswerExplaination: 'As its name suggests, a magnetic resonance imaging (MRI) system has a magnet at is core. This magnet is so powerful it can suck metal objects into the tube (and out of a person\'s body).'
    },
    //2
    {
        questionText: 'The first MRI examination was performed on a human being in:',
        questionChoices: [
            '1967',
            '1985',
            '1977',
            '1984'
        ],
        questionCorrectChoice: 2,
        correctAnswerExplaination: 'The 1977 conduction of the first-ever MRI exam was a breakthrough in medical science. It allowed doctors to examine the interior of the human body in a way that had been impossible.'
    },
    //3
    {
        questionText: 'For the purpose of an MRI, which element within the body is most important?',
        questionChoices: [
            'Oxygen',
            'Carbon',
            'Hydrogen',
            'Zinc'
        ],
        questionCorrectChoice: 2,
        correctAnswerExplaination: 'Hydrogen atoms have one proton and a large magnetic moment. This means they react strongly to magnetic fields and are ideal for examination in an MRI machine.'
    },
    //4
    {
        questionText: 'An MRI system uses an RF pulse to change the:',
        questionChoices: [
            'spin of atoms\' nuclei',
            'shape of the nuclei',
            'amount of metal in a person\'s cells',
            'None of these choices is correct'
        ],
        questionCorrectChoice: 0,
        correctAnswerExplaination: 'An MRI\'s RF pulse changes the spin, or precession, of atoms\' nuclei. The hydrogen atoms line up with the direction of the MRI\'s magnetic field.'
    },
    //5
    {
        questionText: 'What does an MRI system employ to convert mathematical data into a picture?',
        questionChoices: [
            'RF pulse converter',
            'Fourier transform',
            'electron precession',
            'flux capacitor'
        ],
        questionCorrectChoice: 1,
        correctAnswerExplaination: ' Fourier transform uses mathematical functions to change the data retrieved by the MRI system into a picture that a doctor can examine to make a diagnosis.'
    }
];

let currentQuestionNumber = 0;
let totalNumberOfQuestions = questionsArray.length;
let totalNumberOfCorrectAnswers = 0;


