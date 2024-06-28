document.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroIllustration = document.getElementById("heroIllustration");
  const speed = 0.5;

  heroIllustration.style.transform = `translate(-50%, calc(-50% + ${
    scrollTop * speed
  }px))`;
});
