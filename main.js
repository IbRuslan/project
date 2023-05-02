// const, let..
const min = 0;
const max = 100;
const attCount = 10;

function getUserName() {
    const userName = prompt("Привет, как тебя зовут?");
    return userName;
}
const userName = getUserName();

const getRandomNumber = maxLimit => Math.round(Math.random() * maxLimit);

const randomNumber = getRandomNumber(max);
console.log(randomNumber);

//for, while, do while, forIn, forOf

const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
    alert(`Здарова, ${name}!
    Я загадал число больше, чем ${minLimit} и меньше, чем ${maxLimit}.
    У тебя ${attsNumber} попыток отгадать его. Удачи, бро!`)
    for (let i = 0; i <= attCount; i++) {
        const answer = prompt(`Ну, что думаешь?`)
        if (answer > number){
            alert(`Число которое я загадал меньше.
            У тебя осталось ${attsNumber - i} попыток.`)
        } else if (answer < number){
            alert(`Число которое я загадал больше
            У тебя осталось ${attsNumber - i} попыток.`)
        } else {
            alert(`${name}, красава!
        угадал с ${i}-ой попытки.`)
            return
        }
    }
    alert(`${name}, гейм овер чувак...`)
}

playGame(min, max, attCount, randomNumber, userName)