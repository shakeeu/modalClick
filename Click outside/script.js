const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  // Grab the image Source
  const imgSrc = card.querySelector("img").src;
  const name = card.querySelector("h2").textContent;
  // Modal mit neuen Infos füttern
  modalInner.innerHTML = `<img src="${imgSrc.replace(
    `200`,
    `600`
  )}"/> <p>${name}</p>`;

  //Modal anzeigen
  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", (event) => {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});
