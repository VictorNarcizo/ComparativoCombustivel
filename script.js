function verificarPreco() {
    var valorGasolina = parseFloat(document.getElementById("gasolina").value);
    var valorAlcool = parseFloat(document.getElementById("alcool").value);
    var resultado = combustivelMaisBarato(valorGasolina, valorAlcool);
    document.getElementById("resultado").innerHTML = resultado;
  };

  console.log(document.getElementById("gasolina").value);


function combustivelMaisBarato(valorGasolina, valorAlcool) {
    var resultado = valorAlcool / valorGasolina;
    if (document.getElementById("gasolina").value = null) {
        return "Preencha o campo acima.";
    } else {
    if (resultado <= 0.7) {
      return "Abasteça com álcool, pois é mais barato.";
    } else {
      return "Abasteça com gasolina, pois é mais barato.";
    }
  }
}
