document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer");

  if (footer) {
    const copy = footer.querySelector("p");
    if (copy) {
      copy.textContent = `让每个工作流都更高效、更智能、更顺畅。 © ${year}`;
    }
  }

  const ctaButtons = document.querySelectorAll(".primary-btn, .secondary-btn");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.02)" },
          { transform: "scale(1)" }
        ],
        { duration: 240, easing: "ease-out" }
      );
    });
  });
});





















































































































































