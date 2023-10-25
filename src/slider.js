import data from "./data.js";
console.log("funcionando slider");

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let people = data;

/* let people = [...data];
console.log(people); */

// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

container.innerHTML = people
  .map((person) => {
    // Destructuring: tirar o objeto do array:
    const { img, name, job, text, url } = person;
    return `<article class="slide">
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
