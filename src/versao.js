let portugues = true;
let english = false;

const btnPortugues = document.querySelector(".portugues");
const btnEnglish = document.querySelector(".english");

function ativar() {
  console.log("ativado");
}

btnPortugues.addEventListener("click", ativar);
