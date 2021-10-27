"use strict";

//navbar가 스크롤 되어 내려가면 배경 색상이 보이게 함.
const nabvar = document.querySelector("#nabvar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar를 클릭하면 해당 섹션으로 스크롤링함.
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == undefined) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
});

//contact를 클릭하면 해당 섹션으로 스크롤링함.
const contact = document.querySelector(".home__contact");
contact.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
});

//스크롤이 내려가면 home의 투명도를 서서히 높여줌.
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
