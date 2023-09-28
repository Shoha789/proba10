let minValue = parseInt(prompt('Выберите минимальное знание числа для игры (минимально допустимое число -999)','-999'));
 (minValue >= -999 && minValue <= 999)?
    minValue = minValue:

    minValue = -999;


let maxValue = parseInt(prompt('Выберите максимальное знание числа для игры (максимально допустимое число 999)','999'));
 (maxValue >= -999 && maxValue <= 999)?
    maxValue = maxValue:

    maxValue = 999;

if (minValue > maxValue){
    maxValue = 999
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.round((maxValue + minValue + 1) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber.toString() }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue)){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = phraseRandom
            if (answerPhrase === 0){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            };
            if (answerPhrase === 1){
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
            };
            if (answerPhrase === 2){
                answerField.innerText =  `Что-то пошло не по плану...\n\u{1F644}`
            };
               
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const qweRandom = Math.round( Math.random() * 2);
            const qwePhrase = qweRandom
            if (qwePhrase === 0){
                answerField.innerText = `Вы загадали число ${answerNumber }?`
            };
            if (qwePhrase === 1){
                answerField.innerText = `Рискну предположить, что это число ${answerNumber }`
            };
            if (qwePhrase === 2){
                answerField.innerText =  `Возможно вы загадали число ${answerNumber }?`
            };
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = phraseRandom
            if (answerPhrase === 0){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            };
            if (answerPhrase === 1){
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
            };
            if (answerPhrase === 2){
                answerField.innerText =  `Что-то пошло не по плану...\n\u{1F644}`
            };
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const qweRandom = Math.round( Math.random() * 2);
                const qwePhrase = qweRandom
                if (qwePhrase === 0){
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                };
                if (qwePhrase === 1){
                    answerField.innerText = `Рискну предположить, что это число ${answerNumber }`
                };
                if (qwePhrase === 2){
                    answerField.innerText =  `Возможно вы загадали число ${answerNumber }?`
                };
        }
    }
})   


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const vicRandom = Math.round( Math.random() * 2);
        const vicPhrase = vicRandom
        if (vicPhrase === 0){
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        };
        if (vicPhrase === 1){
            answerField.innerText = `Я в себе не сомневался\n\u{1F609}`
        };
        if (vicPhrase === 2){
            answerField.innerText =  `Победа!!!\n\u{1F973}`
        };
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    let minValue = parseInt(prompt('Выберите минимальное знание числа для игры (минимально допустимое число -999)','-999'));
    (minValue >= -999 && minValue <= 999)?
    minValue = minValue:

    minValue = -999;
let maxValue = parseInt(prompt('Выберите максимальное знание числа для игры (максимально допустимое число 999)','999'));
(maxValue >= -999 && maxValue <= 999)?
    maxValue = maxValue:

    maxValue = 999;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber  = Math.round((maxValue + minValue + 1) / 2);
    let orderNumber = 1;
    let gameRun = true;
    
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    
    document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun){
            if ((minValue === maxValue)){
                const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = phraseRandom
            if (answerPhrase === 0){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            };
            if (answerPhrase === 1){
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
            };
            if (answerPhrase === 2){
                answerField.innerText =  `Что-то пошло не по плану...\n\u{1F644}`
            };
                gameRun = false;
            } else {
                minValue = answerNumber  + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const qweRandom = Math.round( Math.random() * 2);
                const qwePhrase = qweRandom
                if (qwePhrase === 0){
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                };
                if (qwePhrase === 1){
                    answerField.innerText = `Рискну предположить, что это число ${answerNumber }`
                };
                if (qwePhrase === 2){
                    answerField.innerText =  `Возможно вы загадали число ${answerNumber }?`
                };
            }
        }
    })
    
    document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = phraseRandom
            if (answerPhrase === 0){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            };
            if (answerPhrase === 1){
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`
            };
            if (answerPhrase === 2){
                answerField.innerText =  `Что-то пошло не по плану...\n\u{1F644}`
            };
                gameRun = false;
            } else {
                maxValue = answerNumber;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                const qweRandom = Math.round( Math.random() * 2);
                const qwePhrase = qweRandom
                if (qwePhrase === 0){
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                };
                if (qwePhrase === 1){
                    answerField.innerText = `Рискну предположить, что это число ${answerNumber }`
                };
                if (qwePhrase === 2){
                    answerField.innerText =  `Возможно вы загадали число ${answerNumber }?`
                };
            }
        }
    })   
    
    
    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            const vicRandom = Math.round( Math.random() * 2);
        const vicPhrase = vicRandom
        if (vicPhrase === 0){
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        };
        if (vicPhrase === 1){
            answerField.innerText = `Я в себе не сомневался\n\u{1F609}`
        };
        if (vicPhrase === 2){
            answerField.innerText =  `Победа!!!\n\u{1F973}`
        };
            gameRun = false;
        }
    })
})
