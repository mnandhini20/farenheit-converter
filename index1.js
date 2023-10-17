function convert() {
  let celsius = Number(document.getElementById("input").value);
  let calculate = (celsius * 9) / 5 + 32;
  let convert = document.getElementById("result");
  convert.innerHTML = calculate.toFixed(0) + "inches";
}
