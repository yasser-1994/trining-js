let switcher = document.querySelectorAll(".switch a");
let imgs = Array.from(document.images);

switcher.forEach((a) => {
  a.addEventListener("click", removeActive);
  a.addEventListener("click", mangImg);
});

function removeActive() {
  switcher.forEach((a) => {
    a.classList.remove("active");
    this.classList.add("active");
  });
}

function mangImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
