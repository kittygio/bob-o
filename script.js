const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".sim-btn");
const noBtn = document.querySelector(".não-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "otario, agora vai ter que me pagar um sorvete";
  gif.src =
  "https://media.tenor.com/3AoHPaFRWB0AAAAi/aplep-cat-apple-cat.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});