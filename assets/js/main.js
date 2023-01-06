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
  let paragrafo = document.createElement("p");
  paragrafo.setAttribute("class", "resultadoIMC");
  paragrafo.innerText = msg;
  document.getElementById("resultado").appendChild(paragrafo);
}

function setResultado(IMC) {
  let msg = "";

  if (IMC <= 18.5) {
    msg = `Seu IMC é ${IMC} (Abaixo do peso)`;
    criaParagrafo(msg);
  } else if (IMC > 18.5 && IMC <= 24.9) {
    msg = `Seu IMC é ${IMC} (Peso Normal)`;
    criaParagrafo(msg);
  } else if (IMC > 25 && IMC <= 29.9) {
    msg = `Seu IMC é ${IMC} (Sobrepeso)`;
    criaParagrafo(msg);
  } else if (IMC > 30 && IMC <= 34.9) {
    msg = `Seu IMC é ${IMC} (Obesidade Grau I)`;
    criaParagrafo(msg);
  } else if (IMC > 35 && IMC <= 39.9) {
    msg = `Seu IMC é ${IMC} (Obesidade Grau II)`;
    criaParagrafo(msg);
  } else {
    msg = `Seu IMC é ${IMC} (Obesidade Grau III)`;
    criaParagrafo(msg);
  }
}
