score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("Keycode is: " + e.keyCode);

    if (e.keyCode == 38) {
        dragon = document.querySelector(".dragon");
        dragon.classList.add("animateDragon");
        setTimeout(() => {
            dragon.classList.remove("animateDragon");
        }, 700)
    }
    if (e.keyCode == 39) {
        dragon = document.querySelector(".dragon");
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragonX + 112 + "px";

    }
    if (e.keyCode == 37) {
        dragon = document.querySelector(".dragon");
        dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragonX - 112 + "px";
        
    }
}

setInterval(() => {
    dragon = document.querySelector(".dragon");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    tx = Math.abs(dx - ox);
    ty = Math.abs(dy - oy);
})
