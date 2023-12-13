const cards = document.querySelector(".cards");
const paginationBtn = document.querySelectorAll(".pagination button");
const searchInput = document.querySelector(".searchinput");

fetch(`https://api.disneyapi.dev/character`)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    data.data.map((el) => {
      const card = document.createElement("div");
      card.className = "card";
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h3");

      cardImg.src = el.imageUrl;
      cardTitle.textContent = el.name;

      card.append(cardImg);
      card.append(cardTitle);
      cards.append(card);
    });
  });

let page = 1;
paginationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    alert((button.className = "next"));
    if (button.className) {
      page++;
    } else {
      page--;
    }
    fetch(`https://api.disneyapi.dev/character`)
      .then((data) => data.json())
      .then((data) => {
        cards.innerHTML = "";
        data.data.map((el) => {
          const card = document.createElement("div");
          card.className = "card";
          const cardImg = document.createElement("img");
          const cardTitle = document.createElement("h3");

          cardImg.src = el.imageUrl;
          cardTitle.textContent = el.name;

          card.append(cardImg);
          card.append(cardTitle);
          cards.append(card);
        });
        window.scrollTo(0, 0);
      });
  });
});

searchInput.addEventListener("keyup", function (e) {
  const value = e.target.value;

  fetch(`https://api.disneyapi.dev/character?name=${value}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      cards.innerHTML = "";
      data.data.map((el) => {
        const card = document.createElement("div");
        card.className = "card";
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h3");

        cardImg.src = el.imageUrl;
        cardTitle.textContent = el.name;

        card.append(cardImg);
        card.append(cardTitle);
        cards.append(card);
      });
    });
});
