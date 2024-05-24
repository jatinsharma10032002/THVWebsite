var parent = document.querySelector(".modal-parent1"),
    btn = document.getElementById("contact-us-btn"),
    X = document.querySelector(".X"),
    section = document.querySelector("section"),
    submit = document.getElementById("btn-contact-submit");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "flex";
  section.style.filter = "blur(10px)"
}
X.addEventListener("click", disappearX);
function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
  if (e.target.className == "modal-parent1") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
}