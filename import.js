import Products from "./product.js";

let display = "";

Products.map((p) => {
  display =
    display +
    `<input type ="checkbox" class="mycheckbox" value ="${p.id} ${p.title} ${p.price}">${p.id} ${p.title} ${p.price}<br>`;
});

document.querySelector(".content").innerHTML = display;

let checkboxs = document.querySelectorAll(".mycheckbox");
for (let i = 0; i < checkboxs.length; i++) {
  checkboxs[i].addEventListener("change", () => {
    let selected = "";
    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked) {
        selected = selected + `${checkboxs[i].value}<br>`;
      }
    }

    document.querySelector(".selected").innerHTML = selected;
  });
}
