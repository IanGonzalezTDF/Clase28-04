btnCalcular.addEventListener("click", () => {
  let base = document.getElementById("base");

  let altura = document.getElementById("altura");

  let btnCalcular: number = document.getElementById("btnCalcular");

  console.log("el area es:", base.value * altura.value);
});
