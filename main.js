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

//arrow up 버튼을 누르면 화면을 맨 위로 올려줌. (스크롤 될 떄만 보임.)
const arrowUp = document.querySelector(".arrow__up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
arrowUp.addEventListener("click", () => {
  const scrollTo = document.querySelector("#home");
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
});

//카테고리에 따라 프로젝트가 필터링되어 나오게함.
//버튼 클릭 => data-filter과 같은 data-type을 보여줌.
const workBtnContainer = document.querySelector(`.work__categories`);
const projectContainer = document.querySelector(`.work__projects`);
//프로젝트를 배열로 전부 다 받아옴.
const projects = document.querySelectorAll(`.project`);
workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  projectContainer.classList.add("anime-out");
  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove("anime-out");
  }, 300);
});
