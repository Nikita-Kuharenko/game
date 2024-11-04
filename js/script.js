let input = document.querySelector('.game__input');
let btn = document.querySelector('.game__btn');
let time = document.querySelector('.game__time');
let gameBox = document.querySelector('.game__box');

let score = 0;
let userTime = 0;
let interval = 0;

const random = (max, min)=>{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('game__ball')){
        score++;
        event.target.remove()
        createBall();
    }
})

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(input.value >= 5){
        userTime = input.value;
        gameBox.innerHTML = '';
        input.value = '';
        score = 0;
        clearInterval(interval);
        console.log('1');
        start();
    }
})

const start = () => {
    interval = setInterval(() =>  decrease(), 1000)
    createBall();
}

const decrease = () => {
    if(userTime != 0){
        let currentTime = --userTime;
        if(currentTime < 10){
            currentTime = '0' + currentTime
        }
        time.innerHTML = '00' + currentTime
    }else{
        end()
    }
}

const end = () => {
    gameBox.innerHTML = `<h2 class='result'>Вы набрали ${score} очков</h2>`;
}

const createBall = () => {
    let ball = document.createElement('div');
    let size = random(100, 20);
    let coor = gameBox.getBoundingClientRect();
    let x = random(coor.width - size, 0);
    let y = random(coor.height - size, 0);

    ball.classList.add('game__ball');
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    ball.style.background = `rgb(${random(255,0)},${random(255,0)},${random(255,0)})`;

    gameBox.append(ball)
}


