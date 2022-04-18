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


    // 定时更新
 
}

