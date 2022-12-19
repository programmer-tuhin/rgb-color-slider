function colors() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let rgbCode = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbCode;
  document.getElementById("output").innerText = rgbCode;
}
