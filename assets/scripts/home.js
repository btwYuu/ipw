const points = localStorage.getItem("points");

const updatePoints = () => {
  localStorage.setItem(
    "points",
    JSON.stringify({
      max: Math.floor(Math.random() * 601),
      yuki: Math.floor(Math.random() * 100),
    }),
  );
};

updatePoints();

const maxPoints = (document.getElementById("max-points").textContent =
  `${JSON.parse(localStorage.getItem("points")).max}`);
const yukiPoints = (document.getElementById("yuki-points").textContent =
  `${JSON.parse(localStorage.getItem("points")).yuki}`);
