let boxesContainer = document.getElementById("boxes");
let btn = document.getElementById("btn");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // box.style.backgroundImage = `url("/assets/images/magic.jpg")`;
      box.style.backgroundImage = `url("https://media.giphy.com/media/gfsQffBnuc6e096brx/giphy.gif")`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});
