let STORE = {
    questions: [//1
        {
            question: 'The biggest and most important component of an MRI system is the:',
            answers: [
                'Bore',
                'Imager',
                'Magnet',
                'Table',
            ],
            correctAnswer: 'Magnet'
        },
        //2
        {
            question: 'The first MRI examination was performed on a human being in:',
            answers: [
                '1967',
                '1985',
                '1977',
                '1984',
            ],
            correctAnswer: '1977',
        },
        //3
        {
            question: 'For the purpose of an MRI, which element within the body is most important?',
            answers: [
                'Oxygen',
                'Carbon',
                'Hydrogen',
                'Zinc',
            ],
            correctAnswer: 'Hydrogen',   
        },
        //4
        {
            question: 'An MRI system uses an RF pulse to change the:',
            answers: [
                'spin of atoms\' nuclei',
                'shape of the nuclei',
                'amount of metal in a person\'s cells',
                'None of these choices is correct',
            ],
            correctAnswer: 'spin of atoms\' nuclei',  
        },
        //5
        {
            question: 'What does an MRI system employ to convert mathematical data into a picture?',
            answers: [
                'RF pulse converter',
                'Fourier transform',
                'electron precession',
                'flux capacitor',
            ],
            correctAnswer: 'Fourier transform',  
        },

    ],
};

let myDog = {
    name: 'Stanley',
    color: 'gray',

    stanleyIs: function() {
        return `${this.name} is a Minature Schnauzer and his fur is ${this.color}`;
    }
}

console.log(myDog.stanleyIs());

