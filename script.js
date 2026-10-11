document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card, .price-card, .workflow-card, .review-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = (0.5 - (y / rect.height)) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.02)" },
          { transform: "scale(1)" }
        ],
        { duration: 220, easing: "ease-out" }
      );
    });
  });
});
