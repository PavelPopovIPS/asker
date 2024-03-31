"use strict";

let count = 0;
let question

const header = document.querySelector('h2');
const description = document.querySelector('.description');
const input = document.querySelector('#inputField');
const startButton = document.querySelector('#startButton');
const submitButton = document.querySelector('#submitButton');
const nextButton = document.querySelector('#nextButton');
const responseBlock = document.querySelector('#response');

setGameDescription()

nextButton.addEventListener('click', () => {
    setDefaultStyle();
    setQuestion()
})

startButton.addEventListener('click', () => {
    setDefaultStyle();
    setQuestion()
})

submitButton.addEventListener('click', () => {
    clearErrorStyle();
    responseBlock.style['display'] = 'block'

    if (input.value === '') {
        input.style['border-color'] = 'red';
        printResponse('Введите ваш ответ!', 'red')
        return
    }

    submitButton.style['display'] = 'none';
    nextButton.style['display'] = 'inline-block';
    input.disabled = true

    ++count
    if (count % 4 == 0) {
        const errorResponse = getErrorMEssage()
        printResponse(
            `${errorResponse.text} Код ответа: ${errorResponse.code}`,
            errorResponse.color,
        )
        return;
    }

    printResponse(
        `Ваш ответ: ${input.value}. <br> Правильный ответ: ${question.a}`,
        '#2196F3',
    );
});

function clearErrorStyle() {
    input.style.removeProperty('border-color');
}

function printMessage(msg) {
    responseBlock.innerHTML = msg
}

function printResponse(msg, color) {
    responseBlock.style['border'] = `1px solid ${color}`;
    printMessage(msg)
}

function setGameDescription() {
    header.innerHTML = 'Игра Вопрос-Ответ'
    description.innerHTML = 'Задача игры: определеть случаи появления ошибок. И за одно, узнать что-то новое ;)'
}

function setDefaultStyle() {
    description.style['display'] = 'none';
    startButton.style['display'] = 'none';
    nextButton.style['display'] = 'none';
    responseBlock.style['display'] = 'none';

    input.disabled = false
    input.style['display'] = 'inline-block';
    input.value = '';
    submitButton.style['display'] = 'inline-block';
}

function setQuestion() {
    shuffle(data);
    question = data.shift();
    header.innerHTML = question.q
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getErrorMEssage() {
    shuffle(errorMessages);
    return errorMessages[0];
}