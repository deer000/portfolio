const btn = document.querySelector(".btn");
const openbtn = document.querySelector(".btn>button");

const opennav = () => {
  btn.classList.toggle("open");
};

openbtn.addEventListener("click", opennav);

const plPage = document.querySelector(".grid_Modal_1");
const close = document.querySelector(".close1");
const close2 = document.querySelector(".close2");

const modal1 = () => {
  plPage.style.left = "0";
};

const closeModel1 = () => {
  plPage.style.left = "-100%";
};
const closeModel2 = () => {
  plPage2.style.left = "-100%";
};
close.addEventListener("click", closeModel1);
close2.addEventListener("click", closeModel2);

const plPage2 = document.querySelector(".grid_Modal_2");
const modal2 = () => {
  plPage2.style.left = "0";
};
