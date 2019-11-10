const btn = document.querySelector(".btn");
const openbtn = document.querySelector(".btn>button");

const opennav = () => {
  btn.classList.toggle("open");
};

openbtn.addEventListener("click", opennav);

const plPage = document.querySelector(".grid_Modal_1");
const plPage2 = document.querySelector(".grid_Modal_2");
const plPage3 = document.querySelector(".grid_Modal_3");
const plPage4 = document.querySelector(".grid_Modal_4");
const close = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");

const modal1 = () => {
  plPage.style.left = "0";
};

const closeModel1 = () => {
  plPage.style.left = "-100%";
};
const closeModel2 = () => {
  plPage2.style.left = "-100%";
};
const closeModal3 = () => {
  plPage3.style.left = "-100%";
};
const closeModal4 = () => {
  plPage4.style.left = "-100%";
};

close.addEventListener("click", closeModel1);
close2.addEventListener("click", closeModel2);
close3.addEventListener("click", closeModal3);
close4.addEventListener("click", closeModal4);

const modal2 = () => {
  plPage2.style.left = "0";
};

const modal3 = () => {
  plPage3.style.left = "0";
};

const modal4 = () => {
  plPage4.style.left = "0";
};
