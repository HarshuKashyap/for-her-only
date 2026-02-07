const text =
"Shayad main perfect nahi hoon...\n\n" +
"par jab tumhara naam aata hai,\n" +
"dil apne aap muskurane lagta hai ❤️\n\n" +
"Tum meri zindagi ka\n" +
"wo hissa ho jahan mujhe sukoon milta hai 💕";

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
    // show question & buttons AFTER typing
    question.style.opacity = 1;
    buttons.style.display = "flex";
  }
}

typeEffect();

// BUTTONS
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// NO button ALWAYS escape (mobile safe)
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo(e) {
  e.preventDefault();
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES → open NEW CARD
yesBtn.addEventListener("click", () => {
  document.getElementById("card1").classList.add("hidden");
  document.getElementById("card2").classList.remove("hidden");
});
