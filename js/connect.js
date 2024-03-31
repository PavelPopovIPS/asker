let count = 1;

const responseBlock = document.querySelector('#response');
const button = document.querySelector('#submitButton');
const input = document.querySelector('#inputField');

button.addEventListener('click', () => {
    input.style.removeProperty('border-color');

    if (input.value === '') {
        input.style['border-color'] = 'red';
        printMessage('Введите ваш ответ!');
        return
    }

    if (count % 4 == 0) {
        printResponse('Ой, что-то произошло: Код ответа: 500');
        return
    }

    printResponse(`Попытка ответа: ${count}. <br> Ваш ответ: ${input.value}.`);
});

function printResponse(msg) {
    printMessage(msg)
    ++count
}

function printMessage(msg) {
    responseBlock.innerHTML = msg
}