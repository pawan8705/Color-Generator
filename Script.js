let btn = document.getElementById("btn");
let Code = document.getElementById("colorCode");

let getColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  Code.innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
}

btn.addEventListener("click", getColor);

getColor();
