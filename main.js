const features = document.getElementById("features");
const fUl = document.querySelector(".f-ul");
const fImg = document.querySelector(".fImg");
const company = document.getElementById("company");
const menu = document.getElementById("menu");
const cUl = document.querySelector(".c-ul");
const cImg = document.querySelector(".cImg");
const join = document.querySelector(".join");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const body = document.querySelector(".body");
const toggle = (ul, img) => {
  // let ulHeight = ul.offsetHeight;
  if (img.classList.contains("up")) {
    ul.style.transform = "scale(1)";
    ul.style.height = `150px`;
    ul.style.padding = `15px`;
    img.src = "images/icon-arrow-up.svg";
    img.classList.remove("up");
  } else {
    ul.style.transform = "scale(0)";
    img.src = "images/icon-arrow-down.svg";
    img.classList.add("up");
    ul.style.height = `0`;
    ul.style.padding = `0`;
  }
};
// const collapse = (ul, img) => {
//   ul.style.transform = "scale(0)";
//   img.src = "images/icon-arrow-down.svg";
//   img.classList.add("up");
//   ul.style.height = `0`;
//   ul.style.padding = `0`;
// };

features.addEventListener("click", () => {
  toggle(fUl, fImg);
});
// nav.addEventListener("focusout", () => {
//   collapse(fUl, fImg);
// });
company.addEventListener("click", () => {
  toggle(cUl, cImg);
});
// nav.addEventListener("focusout", () => {
//   collapse(cUl, cImg);
// });
menu.addEventListener("click", (eo) => {
  if (eo.target.classList == "close") {
    eo.target.src = "images/icon-menu.svg";
    eo.target.classList.remove("close");
    container.style.width = "0";
    container.style.transform = "scale(0)";
    // join.style.transform = "translate(50%, 50px) scale(0)";
    body.style.width = "0";
    body.style.height = "0";
  } else {
    eo.target.src = "images/icon-close-menu.svg";
    eo.target.classList.add("close");
    container.style.width = "70%";
    container.style.transform = "scale(1)";
    // join.style.transform = "translate(50%, 50px) scale(1)";
    body.style.width = "100%";
    body.style.height = "100%";
  }
});
