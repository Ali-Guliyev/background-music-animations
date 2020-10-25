const startBtn = document.querySelector(".start-btn");
const nature2 = document.querySelector(".nature2");
const sun = document.querySelector(".sun");
const sky = document.querySelector(".sky");
const bird = document.querySelector(".bird");

function playAudio(filename) {
  var audio = new Audio(filename);
  audio.play();
}
function animate() {
  startBtn.style.animation = "animateBtn 1s ease forwards";
  bird.style.animation = "birdAnim 12s linear 95.6s infinite";

  var a = 0.8;
  var g = 0;
  var b = 0;
  var sunY = 150;
  function animation() {
    requestAnimationFrame(animation);

    a -= 0.00014;
    nature2.style.backgroundColor = `rgba(0, 0, 0, ${a})`;

    g += 0.1;
    b += 0.1;
    sky.style.backgroundColor = `rgb(0, ${g}, ${b})`;

    sunY -= 0.05;
    if (sunY <= -80) {
      sunY = -80;
    }
    sun.style.transform = `translate(-50%, ${sunY}%)`;
  }
  animation();
}

startBtn.addEventListener("click", () => {
  // disable the button
  startBtn.disabled = true;
  // play the music
  playAudio("./song.mp3");
  // change the icon
  startBtn.innerHTML = `
    <i style="color: white" class="fas fa-pause"></i>
  `;
  // animations
  animate();
});
