let count = 0;

const responseBlock = document.querySelector('#response');
const button = document.querySelector('#submitButton');
const input = document.querySelector('#inputField');

button.addEventListener('click', () => {
    input.style.removeProperty('border-color');

    if (input.value === '') {
        input.style['border-color'] = 'red';
        responseBlock.innerHTML = 'Введите ваш ответ!';
        return
    }

    let output = `Попытка ответа: ${++count}. Ваш ответ: ${input.value}`;

    if (count % 5 == 0) {
        responseBlock.innerHTML = 'Ой, что-то произошло: Код ответа: 500';
        return
    }

    if (count % 3 == 0) {
        responseBlock.innerHTML = 'Возможно, вы сделали, что-то не то. Код ответа: 400';
        return
    }

    responseBlock.innerHTML = output;
});