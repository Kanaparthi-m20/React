// menuToggle.js
const initMenuToggle = () => {
  const arrow = document.querySelectorAll(".arrow");
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      const arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  }
};

export default initMenuToggle;
