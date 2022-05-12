btnCalcular.addEventListener("click", () => {
  let btnEnvBase = document.getElementById("btnEnviarBase");
  let base = document.getElementById("base");

  let btnEnvAltura = document.getElementById("btnEnviarAltura");
  let altura = document.getElementById("altura");

  let btnCalcular: number = document.getElementById("btnCalcular");

  let rotulo = document.getElementById("rotulo");

  console.log("el area es:", base.value * altura.value);
});
