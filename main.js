const uneBlague = document.getElementById("button");
const title = document.getElementById("title");
const blague = document.getElementById("text");
const auteur = document.getElementById("author");

/*fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => console.log(data.data));*/

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      title.textContent = joke.text_head;
      auteur.textContent = `« ${data.data.author.pseudo} »`;
      blague.style.display = "block";
      if (
        data.data.content.text === "" &&
        data.data.content.text_hidden === ""
      ) {
        blague.style.display = "none";
      } else if (data.data.content.text !== "") {
        blague.textContent = joke.text;
      } else {
        blague.classList.add("solution");
        blague.innerHTML = "Solution";
        blague.addEventListener("click", () => {
          blague.classList.remove("solution");
          blague.textContent = joke.text_hidden;
        });
      }
    });
}

function arrierePlan() {
  let x = Math.floor(Math.random() * 50 - 1);
  document.body.style.background = `url("img/${x}.jpg") center`;
}

uneBlague.addEventListener("click", () => {
  getJoke();
  arrierePlan();
});
