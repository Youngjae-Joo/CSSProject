
//requestAnimationFrame을 사용한 랜더링 개선용(고정된 프레임)
var interval;

//캔버스
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//x , y 좌표설정
var x = canvas.width / 2;
var y = canvas.height - 30;

//이동속도
var dx = 2;
var dy = -2;

//공크기
var ballRadius = 10;

//패들
var paddleHeight = 15;
var paddleWidth = 80;
var paddleX = (canvas.width - paddleWidth) / 2;

//버튼눌렀을때의 변수
var rightPressed = false;
var leftPressed = false;

//벽돌변수
var brickRowCount = 5;      //열
var brickColumnCount = 8;   //행
var brickWidth = 48;        //넓이
var brickHeight = 15;       //높이
var brickPadding = 5;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

//점수 생성
var score = 0;

//사용자 생명 생성
var lives = 3;

//벽돌생성
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 2 };
    }
}

//버튼이벤트리스너
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//버튼이 눌렸을때
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

//버튼에서 손을 뗏을때
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

//벽돌 충돌시 방향전환
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status >= 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status--;
                    score++;
                    if (score == brickRowCount * brickColumnCount * 2) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

//벽돌 그리기
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status >= 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                if (bricks[c][r].status == 2) ctx.fillStyle = "#0095DD";
                if (bricks[c][r].status == 1) ctx.fillStyle = "#828282";

                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//공 그리기
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//패들 그리기
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//점수 그리기
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("score : " + score, 8, 20);
}
//라이프 그리기
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillstyle = "#0095DD";
    ctx.fillText("Lives : " + lives, canvas.width - 65, 20)
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawScore();
    drawLives();


    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {

            //속도 조절
            dy = -dy * (Math.random() + 0.8);
            if (dy <= -5) dy = -2;
            //paddle
            console.log(paddleX)
            console.log(paddleX + paddleWidth)
            console.log("")
            if (x < (paddleX + paddleX + paddleWidth) / 2) {
                console.log("left");
                console.log((paddleX + paddleX + paddleWidth) / 2)
                console.log(x);
            } else if (x > (paddleX + paddleX + paddleWidth) / 2) {
                console.log("right");
                console.log((paddleX + paddleX + paddleWidth) / 2)
                console.log(x);
            }


            x += dx * Math.round((Math.random() * 2 + 1));

        } else {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();

            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }

        }
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

}
var startBtn = document.querySelector(".startBtn");
var stopBtn = document.querySelector(".stopBtn");
var exitBtn = document.querySelector(".exitBtn")

startBtn.onclick = function start() {

    interval = setInterval(draw, 10);
}
stopBtn.onclick = function sto() {
    clearInterval(interval)
}
exitBtn.onclick = function exit() {
    draw();
    canvas.width = canvas.width;
    // clearInterval(interval)
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
}

