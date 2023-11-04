import data from "./data.js";
console.log("funcionando slider");

const container = document.querySelector(".slide-container");

/* window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
}); */

container.innerHTML = data
  .map((person) => {
    // Destructuring: tirar o objeto do array:
    const { img, name, job, text, url } = person;
    return `<article class="slide" data-id="${name}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
  <div class="slider__lattes">
    <a href="${url}" target=_blank>  
      <p>Lattes</p>
    </a>  
  </div>
</div>
 </article>`;
  })
  .join("");

// if length is 2, add copies of slides

/* if (data.length === 2) {
  people = [...data, ...data];
  console.log(people);
} */
