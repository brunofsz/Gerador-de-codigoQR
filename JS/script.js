const text = document.querySelector("#textQR");
const btn = document.querySelector("#btnQR");
const img = document.querySelector("#imgQR");
const div = document.querySelector("#qrcode");

function geraQR() {
  const input = text.value;
  if (!input) return;

  btn.innerText = "Gerando...";

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
  return true;
}

btn.addEventListener("click", () => {
  if (!geraQR()) {
    return;
  }

  div.style.display = "block";
  btn.innerText = "QR Code criado!";
});

text.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    geraQR();

    div.style.display = "block";
    btn.innerText = "QR Code criado!";
  }
});

text.addEventListener("keyup", (event) => {
  if (text.value == "") {
    div.style.display = "none";
    btn.innerText = "Gerar QR Code";
  }
});
