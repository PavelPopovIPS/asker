"use strict";

let count = 1;
let question

const header = document.querySelector('h2');
const description = document.querySelector('.description');
const startButton = document.querySelector('#startButton');
const submitButton = document.querySelector('#submitButton');
const nextButton = document.querySelector('#nextButton');
const input = document.querySelector('#inputField');
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
        printMessage('Введите ваш ответ!');
        return
    }

    submitButton.style['display'] = 'none';
    nextButton.style['display'] = 'inline-block';
    input.disabled = true

    count % 4 == 0
        ? printResponse('Ой, что-то произошло: Код ответа: 500')
        : printResponse(`Ваш ответ: ${input.value}. <br> Правильный ответ: ${question.a}`);
});

function printResponse(msg) {
    printMessage(msg)
    ++count
}

function printMessage(msg) {
    responseBlock.innerHTML = msg
}

function clearErrorStyle() {
    input.style.removeProperty('border-color');
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
    question = data[count];
    header.innerHTML = question.q
}