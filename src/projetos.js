/* 1 - Quando clicar em um card, vai abrir um modal com a pesquisa 

a- Escuta pelo clique. >
b- Faz um map na data e seleciona o pesquisador clicado. 
c- Renderiza o modal baseado no pesquisador clicado.

*/

import data from "./data.js";
console.log("funcionando projetos.js");

const slideClicado = document.querySelectorAll(".slide");

const excetoModal = document.querySelector(".header");
const modal = document.querySelector(".acrescentar");
const marcaFechar = document.querySelector(".fechar");
const adicionarBlur = document.querySelector(".adicionarBlur");
console.log(marcaFechar);

marcaFechar.addEventListener("click", function () {
  console.log("CLICKS");
  modal.innerHTML = "";
  marcaFechar.classList.add("hide");
  adicionarBlur.classList.remove("blur");
});

slideClicado.forEach(function (slide) {
  slide.addEventListener("click", function (e) {
    // Seleciona o pesquisador clicado:
    const nomePesquisador = e.currentTarget.dataset.id;

    modal.innerHTML = data.map((pesquisador) => {
      const { img, name, job, text, url, resumo, titulo } = pesquisador;
      if (nomePesquisador === name) {
        adicionarBlur.classList.add("blur");
        marcaFechar.classList.remove("hide");
        console.log(`Nomeando: ${name}`);
        return ` <section class="projetos">
   
    <div class="autor">
      <img src="${img}" class="img" alt="" />
      <div class="dados">
        <p class="nome">${name}</p>
        <p class="cargo">${job} / ${text}</p>
        <a href="${url}" target=_blank> <p class="lattes">Lattes</p></a>
        <p class="titulo">${titulo}</p>
      </div>
    </div>

    <div class="resumo">
      <p>
      ${resumo}
      </p>
    </div>
  </section>`;
      }
    });
  });
});

// Chamar função marcaFechar dentro do forEach.
/* if (clicouSlide) {
  const marcaFechar = document.querySelector(".fechar");
  marcaFechar.addEventListener("click", function () {
    console.log("clicou no fechar!!!");
  });
} */

/* marcaFechar.addEventListener("click", function () {
  console.log("clicou no fechar!!!");
}); */

function esconderFundo() {
  excetoModal.classList.add("blur");
}

function mostrarFundo() {
  excetoModal.classList.remove("blur");
}

/* <section class="modal__projeto">
  <section class="projetos">
    <div class="fechar">
      <i class="fa-solid fa-xmark" id="fechar"></i>
    </div>
    <div class="autor">
      <img src="images/anne-cristine.png" class="img" alt="" />
      <div class="dados">
        <p class="nome">Laura Rival</p>
        <p class="cargo">Professora / Oxford University</p>
        <p class="lattes">Lattes</p>
        <p class="titulo">"Pesquisas Antropológicas no Baixo Tapajós"</p>
      </div>
    </div>

    <div class="resumo">
      <p>
        A Dra. Laura Rival, professora da Universidade de Oxford, tem conduzido
        oficinas com universitários indígenas em diversos países
      </p>

      <p>
        Oficina com estudantes indígenas da Unicamp e universidades parceiras
        sobre suas experiências com a pesquisa. Como tem sido ser pesquisador/a
        indígena? Como você definiu seu tema de pesquisa? Como tem sido a
        relação com orientador/a e com a equipe de pesquisa? Você busca fazer
        alguma ponte com conhecimentos indígenas ou com contextos indígenas?
        (não é uma obrigação!). A ideia é ser um espaço aberto de conversa sobre
        a experiência de pesquisa, sendo um/a pesquisador/a indígena.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in
        recusandae officia nulla possimus nihil suscipit neque, beatae ut fugiat
        tempore animi non impedit eos voluptatum incidunt? Debitis quis fugit
        impedit quos, alias eaque explicabo, dolorem, aspernatur quaerat labore
        ipsam!
      </p>
    </div>
  </section>
</section>; */
