//Variables
/*
const memesArray = [
    'Programmer: A machine that turns coffee into code.',
    'Computers are fast; programmers keep it slow.',
    'When I wrote this code, only God and I understood what I did. Now only God knows.',
    'A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!',
    'How many programmers does it take to change a light bulb? None, that’s a hardware problem.'
]
*/

const memesArray = [
    'http://localhost/meme_app_javascript/images/a.png',
    'http://localhost/meme_app_javascript/images/b.png',
    'http://localhost/meme_app_javascript/images/c.png'
]

const riddlesArray = [
    'Ridle 1. What the answer could be?',
    'Ridle 2. What the answer could be?',
    'Ridle 3. What the answer could be?',
    'Ridle 4. What the answer could be?',
    'Ridle 5. What the answer could be?'
]

const jokesArray = [
    'Joke1',
    'Joke2',
    'Joke3',
    'Joke4',
    'Joke5'
]

const quotesArray = [
    'quote1',
    'quote2',
    'quote3',
    'quote4',
    'quote5'
]

const riddleAnswers = [
    'Answer 1',
    'Answer 2',
    'Answer 3',
    'Answer 4',
    'Answer 5'
]

let returnValues = [];

const memeBtn = document.querySelector('.getMeme');
const jokeBtn = document.querySelector('.tellJoke');
const quoteBtn = document.querySelector('.rndQuote');
const riddleBtn = document.querySelector('.riddleMe');
const answerBtn = document.querySelector('.revealAnswer');

const list = document.querySelector('#outputs_list');

const newElement = document.createElement('p');
const newElementImg = document.createElement('img');

//Functions
function clearContents() {

    if ( document.getElementById('rndMem') !== null) {
        document.getElementById('rndMem').remove();
    }

    if ( document.getElementById('rndJoke') !== null) {
        document.getElementById('rndJoke').remove();
    }

    if ( document.getElementById('rndQuote') !== null) {
        document.getElementById('rndQuote').remove();
    }

    if ( document.getElementById('rndRidl') !== null) {
        document.getElementById('rndRidl').remove();
    }

    if ( document.getElementById('answer') !== null) {
        document.getElementById('answer').remove();
    }

}

function showMeme() {

    const randomIndex = Math.floor(Math.random(memesArray) * memesArray.length);
    const randomMemeSrc = memesArray[randomIndex];
    newElementImg.setAttribute("id", "rndMem");
    newElementImg.setAttribute("src", randomMemeSrc);

    const listItem = list.children.item(0);

    clearContents();
    listItem.appendChild(newElementImg);

    element = document.getElementById('rndMem');

    if (element !== null) {
        element.remove();
        listItem.appendChild(newElementImg);
    }

}

function showJoke() {

    const randomIndex = Math.floor(Math.random(jokesArray) * jokesArray.length);
    const randomJoke = jokesArray[randomIndex];
    const newElement = document.createElement('p');
    newElement.setAttribute("id", "rndJoke");

    const listItem = list.children.item(1);

    newElement.textContent = randomJoke;
    clearContents();
    listItem.appendChild(newElement);

    element = document.getElementById('rndJoke');

    if (element !== null) {
        element.remove();
        newElement.textContent = randomJoke;
        listItem.appendChild(newElement);
    }

}

function showQuote() {

    const randomIndex = Math.floor(Math.random(quotesArray) * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    const newElement = document.createElement('p');
    newElement.setAttribute("id", "rndQuote");

    const listItem = list.children.item(2);

    newElement.textContent = randomQuote;
    clearContents();
    listItem.appendChild(newElement);

    element = document.getElementById('rndQuote');

    if (element !== null) {
        element.remove();
        newElement.textContent = randomQuote;
        listItem.appendChild(newElement);
    }

}

function showRiddle() {

    const randomIndex = Math.floor(Math.random(riddlesArray) * riddlesArray.length);
    const randomRiddle = riddlesArray[randomIndex];
    const newElement = document.createElement('p');
    newElement.setAttribute("id", "rndRidl");

    const listItem = list.children.item(3);

    newElement.textContent = randomRiddle;
    clearContents();
    listItem.appendChild(newElement);

    element = document.getElementById('rndRidl');

    if (element !== null) {
        element.remove();
        newElement.textContent = randomRiddle;
        listItem.appendChild(newElement);
    }

    returnValues[0] = element;
    returnValues[1] = randomIndex;
   
    return returnValues;

}

function revealAnswers(returnValues) {

    const newAnswerElement = document.createElement('p');
    
    if (returnValues[0] == null || document.getElementById('rndRidl') == null) {
        alert('Please press a button to generate riddle first!');
    } else {
        const listItem = list.children.item(4);
        newAnswerElement.setAttribute("id", "answer");
        newAnswerElement.textContent = riddleAnswers[returnValues[1]];
        
        if ( document.getElementById('answer') !== null) {
            document.getElementById('answer').remove();
            alert('Answer is already revealed');
        }

        listItem.appendChild(newAnswerElement);
    }

}

memeBtn.addEventListener('click', showMeme);
jokeBtn.addEventListener('click', showJoke);
quoteBtn.addEventListener('click', showQuote);
riddleBtn.addEventListener('click', showRiddle);
answerBtn.addEventListener('click', () => { revealAnswers(returnValues) });