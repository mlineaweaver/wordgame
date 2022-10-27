let counter = 1;
window.addEventListener(
  "keydown",
  function (event) {
    if (isLetter(event.key)) {
      console.log("hit");
      document.getElementById("letter-" + counter).value = event.key;
      counter++;
    }
  },
  false
);

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}
