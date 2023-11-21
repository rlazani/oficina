import data from "./data.js";

const container = document.querySelector(".slide-container");

container.innerHTML = data
  .map((person) => {
    // Destructuring: tirar o objeto do array:
    const { img, name, job, text } = person;
    return `<article class="slide" data-id="${name}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
</div>
 </article>`;
  })
  .join("");
