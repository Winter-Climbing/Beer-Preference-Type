"use strict";

const first_page = document.querySelector("#first_page");
const qna = document.querySelector("#qna");

const start = () => {
  first_page.style.WebkitAnimation = "fade_out 1s";
  first_page.style.animation = "fade_out 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fade_in 1s";
    qna.style.animation = "fade_in 1s";
    setTimeout(() => {
      first_page.style.display = "none";
      qna.style.display = "block";
    }, 450);
  }, 450);
};

const navber = document.querySelector("#navbar");
const navbar_height = navber.getBoundingClientRect().height;

// window.scrollY는 스크롤에 따라 변동되는 값
// getBoundingClientRect 내장 함수로 해당 태그의 크기를 파악
// 위의 2개를 비교해서 새로운 클래스를 추가해서 시작적으로 변동하도록 만듦
const navbar_scroll = () => {
  // console.log(window.scrollY);
  // console.log(navbar_height);
  if (window.scrollY > navbar_height) {
    navber.classList.add("navbar--yellow");
  } else {
    navber.classList.remove("navbar--yellow");
  }
};

document.addEventListener("scroll", navbar_scroll);
