const points = localStorage.getItem("points");

const updateLocalStorage = () => {
  localStorage.setItem(
    "points",
    JSON.stringify({
      max: 321,
      yuki: 28,
    }),
  );

  const eventDate = new Date("2025-11-23T04:00:00");
  localStorage.setItem(
    "nextEvent",
    JSON.stringify({
      name: "Las Vegas",
      date: eventDate.toISOString(),
    }),
  );
};

updateLocalStorage();

const maxPoints = (document.getElementById("max-points").textContent =
  `${JSON.parse(localStorage.getItem("points")).max}`);
const yukiPoints = (document.getElementById("yuki-points").textContent =
  `${JSON.parse(localStorage.getItem("points")).yuki}`);

const eventName = document.getElementById("event-name");
const nextEvent = JSON.parse(localStorage.getItem("nextEvent"));
eventName.textContent = nextEvent.name;

// Countdown Timer
const countdownElement = document.getElementById("countdown-event");

const updateCountdown = () => {
  const nextEvent = JSON.parse(localStorage.getItem("nextEvent"));
  const eventDate = new Date(nextEvent.date);
  const now = new Date();
  const difference = eventDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

updateCountdown();
setInterval(updateCountdown, 1000);
