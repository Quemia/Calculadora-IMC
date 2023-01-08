const form = document.querySelector("#formulario"); //# por ser um id

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputPeso = event.target.querySelector("#peso").value;
  const inputAltura = event.target.querySelector("#altura").value;

  if (!inputAltura || !inputPeso) {
    alert("Adicione números válidos");
    document.location.reload(true);
  }

  let IMC = inputPeso / (inputAltura * inputAltura);
  setResultado(IMC.toFixed(2));
});

function criaParagrafo(msg) {
  const limpaResultado = document.querySelector('#resultado');
  limpaResultado.innerHTML = '';

  const paragrafo = document.createElement("p");
  paragrafo.setAttribute("class", "resultadoIMC");
  paragrafo.innerHTML = msg;
  document.getElementById("resultado").appendChild(paragrafo);
}

function setResultado(IMC) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade Grau I",
    "Obesidade Grau II",
    "Obesidade Grau III",
  ];

  let msg = ``;
  
  if (IMC <= 18.5)  msg = `Seu IMC é ${IMC} (${nivel[0]})`;
  if (IMC > 18.5 && IMC <= 24.9)  msg = `Seu IMC é ${IMC} (${nivel[1]})`;
  if (IMC > 25 && IMC <= 29.9) msg = `Seu IMC é ${IMC} (${nivel[2]})`;
  if (IMC > 30 && IMC <= 34.9) msg = `Seu IMC é ${IMC} (${nivel[3]})`;
  if (IMC > 35 && IMC <= 39.9) msg = `Seu IMC é ${IMC} (${nivel[4]})`;
  if (IMC > 39.9) msg = `Seu IMC é ${IMC} (${nivel[5]})`;
  
  criaParagrafo(msg);

}
