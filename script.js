document.querySelector("body").style.padding = "10% 20%";

for (let i = 0; i < 5; i++) {
  const pElement = document.createElement("p");
  document.body.append(pElement);
  pElement.innerText = `Rad ${[i + 1]}`;
  pElement.style.color = "#3189B2";
  pElement.style.textAlign = "center";
  pElement.style.margin = `${i * 5}px 0`;
  pElement.style.fontSize = (i + 1) * 10;
  pElement.style.backgroundColor = `hsl(${(i + 5) * 20}, 80%, 80%)`;
}

const divElement = document.createElement("div");
document.body.append(divElement);
divElement.style.display = "flex";
divElement.style.flexDirection = "row";
divElement.style.justifyContent = "center";
divElement.style.padding = "5% 10%";
divElement.style.border = "1px solid black";

const nummer = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 0; i < 3; i++) {
  const divSmall = document.createElement("div");

  divElement.appendChild(divSmall);
  divSmall.style.width = "10%";
  divSmall.style.margin = "0 auto";
  divSmall.style.border = "10px solid #BA95F4";
  if (i == 0) {
    for (let i = 0; i < 10; i++) {
      const innerParagraph = document.createElement("p");
      divSmall.appendChild(innerParagraph);

      innerParagraph.innerText = i;
      innerParagraph.style.margin = "0";
      if (i == 4) {
        innerParagraph.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerParagraph.style.backgroundColor = "black";
        innerParagraph.style.color = "white";
      }
    }
  } else if (i == 1) {
    for (let i = 9; i >= 0; i--) {
      const innerParagraph = document.createElement("p");
      divSmall.appendChild(innerParagraph);
      innerParagraph.innerText = i;
      innerParagraph.style.margin = "0";
      innerParagraph.style.textAlign = "center";
      if (i == 8) {
        innerParagraph.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerParagraph.style.backgroundColor = "black";
        innerParagraph.style.color = "white";
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      const innerParagraph = document.createElement("p");
      divSmall.appendChild(innerParagraph);
      innerParagraph.innerText = nummer[i];
      innerParagraph.style.margin = "0";
      innerParagraph.style.textAlign = "right";
      if (i == 5) {
        innerParagraph.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerParagraph.style.backgroundColor = "black";
        innerParagraph.style.color = "white";
      }
    }
  }
}
