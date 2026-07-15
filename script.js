var backTop = document.querySelector(".back-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
