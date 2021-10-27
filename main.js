"use strict";

//navbar가 스크롤 되어 내려가면 배경 색상이 보이게 함.
const nabvar = document.querySelector("#nabvar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log("scroll=> " + window.scrollY);
  console.log("height=> " + navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar를 클릭하면 해당 섹션으로 스크롤링함.
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == undefined) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});
