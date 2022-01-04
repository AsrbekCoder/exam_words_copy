const inputValue = document.querySelector(".input");
const loader = document.querySelector("#loader ");
const text = document.querySelector(".word_text");
const btn = document.querySelector(".btn");
const btnCopy = document.querySelector(".btn_copy");
const doneMes = document.querySelector(".done_message");

inputValue.addEventListener("change", (e) => {
  let givenWords = e.target.value
    .split(" ")
    .map((e) => e[0])
    .join("")
    .toUpperCase();

  if (e.target.value) {
    loader.style.display = "none";
    text.innerText = givenWords;
    btn.style.opacity = "1";
  } else {
    text.innerText = "";
    loader.style.display = "inherit";
  }
});

btnCopy.addEventListener("click", () => {
  doneMes.style.left = "50%";
  navigator.clipboard.writeText(text.innerText);
  doneMes.innerText = `Kопия сделана:${text.innerText}`;
});
