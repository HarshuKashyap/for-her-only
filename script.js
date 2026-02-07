const text =
"I don’t know when it started…\n\n" +
"but somehow you became my calm,\n" +
"my favorite thought,\n" +
"and the place my heart feels at ease ❤️\n\n" +
"I’m not asking for promises,\n" +
"just honesty, warmth,\n" +
"and moments that feel real 🤍\n\n" +
"So I just want to ask…";

let index = 0;
const speed = 40;

const typing = document.getElementById("typing");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");

function typeEffect() {
  if (index < text.length) {
    typing.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeEffect, speed);
  } else {
    question.style.opacity = 1;
    buttons.style.display = "flex";
  }
}

typeEffect();

// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// NO button escape (mobile + desktop)
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo(e) {
  e.preventDefault();
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES → open second card
yesBtn.addEventListener("click", () => {
  document.getElementById("card1").classList.add("hidden");
  document.getElementById("card2").classList.remove("hidden");
});
