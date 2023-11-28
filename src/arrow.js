const arrow = document.querySelector(".arrow");

function moveUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

arrow.addEventListener("click", moveUp);
