"use strict";

let count = 1;
let question

const header = document.querySelector('h2');
const description = document.querySelector('.description');
const submitButton = document.querySelector('#submitButton');
const startButton = document.querySelector('#startButton');
const input = document.querySelector('#inputField');
const responseBlock = document.querySelector('#response');

setGameDescription()

startButton.addEventListener('click', () => {
    setDefaultStyle();
    setQuestion()
})

submitButton.addEventListener('click', () => {
    clearErrorStyle();

    if (input.value === '') {
        input.style['border-color'] = 'red';
        printMessage('Введите ваш ответ!');
        return
    }

    if (count % 4 == 0) {
        printResponse('Ой, что-то произошло: Код ответа: 500');
        return
    }

    printResponse(`Попытка ответа: ${count}. <br> Ваш ответ: ${input.value}. <br> Правильный ответ: ${question.a}`);
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
    startButton.style['display'] = 'none';
    description.style['display'] = 'none';

    input.style['display'] = 'inline-block';
    submitButton.style['display'] = 'inline-block';
}

function setQuestion() {
    question = data[count];
    header.innerHTML = question.q
}