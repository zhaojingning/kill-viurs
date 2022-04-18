let config = {
    // 游戏的状态， 0:游戏未开始 1:游戏进行中 2:游戏结束
    status: 0,
    // 病毒生成的时间间隔
    interval: 800,
    // 病毒动画的速度
    speed: 3
}
// 得分：
let score = 0;
// 所有字母
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// 开始画面
let startAlert = document.querySelector('#start-alert');
// logo
let gameDesc = document.querySelector('.game-desc');

let footer = document.querySelector('#start-alert footer');

startAlert.onclick = function() {
    console.log('游戏开始');
    gameDesc.classList.add('slide-up');
    footer.classList.add('slide-down');

    setTimeout(() => {
        startAlert.style.display = 'none';
    }, 500);

    startGame();

    //  更新游戏状态
    config.status = 1;
}

var timer, updater;
function startGame() {
    // 定时生成病毒
    timer = setInterval(function() {
        makeVirus();
    }, config.interval);

    // 定时更新
    updater = setInterval(() => {
        updater()
    }, 16);
}

// 游戏区
let game = document.querySelector('#game');
// 获得游戏场景
let stage = document.querySelector('#stage');
// ui 层
let uiLayer = document.querySelector('#ui');
// 病毒集合
let virues = [];

// 生成病毒元素
function makeVirus() {
    let virus = document.createElement('div');
    virus.setAttribute('class', 'virus');

    let p = document.createElement('p');
    p.classList.add('letter');

    virus.appendChild(p);

    // 设置病毒的颜色
    switch (Math.floor.apply(Math.random() * 6)) {
        case 0:
            p.style.backgroundImage = 'radial-gradient(rgba(255,150,150,0),rgba(255,0,0,1))';
            p.style.boxShadow = '0 0 15px #f00';break;
        case 1:
            p.style.backgroundImage = 'radial-gradient(rgba(0, 255, 0, 0),rgba(0,255,0,1))';
            p.style.boxShadow = '0 0 15px #f00'; break;
        case 2:
            p.style.backgroundImage = 'radial-gradient(rgba(0, 0, 255, 0),rgba(0,0,255,1))';
            p.style.boxShadow = '0 0 15px #f00'; break;
        case 3:
            p.style.backgroundImage = 'radial-gradient(rgba(255, 255, 0, 0),rgba(255,255,0,1))';
            p.style.boxShadow = '0 0 15px #f00'; break;
        case 4:
            p.style.backgroundImage = 'radial-gradient(rgba(0, 255, 255, 0),rgba(0,255,255,1))';
            p.style.boxShadow = '0 0 15px #f00'; break;
        case 5:
            p.style.backgroundImage = 'radial-gradient(rgba(255, 0, 255, 0),rgba(255,0,255,1))';
            p.style.boxShadow = '0 0 15px #f00'; break;
    }

    let letter = letters[Math.floor(Math.random() * 26)];
    p.innerHTML = letter;

    virus.style.left = Math.random() * (stage.offsetWidth - 100) + 'px';
    virus.letter = letter;

    // 把病毒追加到game区域
    game.appendChild(virus);
    // 把生成的病毒放到集合数组中
    virues.push(virus);
}

let winH = stage.offsetHeight;
// 更新动画，刷新元素的位置
function update() {
    for(let i=0; i < virues.length; i++) {
        let virus = virues[i];
        virus.style.top = virus.offsetTop + config.speed + 'px';

        if(virus.offsetTop > (winH - 200 ) && !uiLayer.warning) {
            showWarning();
            uiLayer.warning = true;
        } else if(virus.offsetTop >= winH) {
            gameOver();
        }
    }
}

function showWarning() {
    let warningLayer = document.createElement('div');
    warningLayer.setAttribute('class', 'warning');
    uiLayer.appendChild(warningLayer);
}