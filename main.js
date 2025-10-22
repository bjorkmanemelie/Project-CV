const btn = document.querySelector(".contact-btn");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "#e3dbb3";
  btn.style.color = "rgba(90, 90, 88, 0.9)";
});

const originalBgColor = "rgba(90, 90, 88, 0.9)";
const originalTextColor = "#e3dbb3";

btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = originalBgColor;
  btn.style.color = originalTextColor;
});

