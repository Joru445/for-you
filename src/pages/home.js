import { loadCSS } from "../main.js";

let countdownInterval;

export function HomePage() {

  loadCSS("/src/styles/home.css");

  return `

    <section class="countdown">

      <div class="special-date">
        <h2>Our Special Day</h2>
        <p class="target-date" id="target-date"></p>
      </div>

      <div class="timer">

        <div class="time-box">
          <span id="days">0</span>
          <p>Days</p>
        </div>

        <div class="time-box">
          <span id="hours">0</span>
          <p>Hours</p>
        </div>

        <div class="time-box">
          <span id="minutes">0</span>
          <p>Minutes</p>
        </div>

        <div class="time-box">
          <span id="seconds">0</span>
          <p>Seconds</p>
        </div>

      </div>

      <img src="https://media1.tenor.com/m/YDuoY7Sn9CAAAAAC/cinnamoroll.gif" alt="cinnamoroll-yay"/>

    </section>
    
  `;
}

export function initHomePage() {

  let anniversaryShown = false;

  function getNextAnniversary() {

    const now = new Date();

    let year = now.getFullYear();

    const anniversary = new Date(year, 5, 6, 0, 0, 0); // June = 5

    if (now >= anniversary) {
      anniversary.setFullYear(year + 1);
    }

    return anniversary;
  }

  function updateCountdown() {
    const relationshipStart = new Date("2023-06-06T00:00:00");

    const now = new Date();

    const targetDate = getNextAnniversary();

    const difference = targetDate - now;

    const isAnniversary =
      now.getMonth() === 5 &&
      now.getDate() === 6;

    if (isAnniversary && !anniversaryShown) {
      anniversaryShown = true;

      const popup = document.createElement("div");

      popup.className = "anniversary-popup";

      popup.innerHTML = `
        <div class="popup-content">
          <h1>💕Happy 3rd Anniversary Mahal!💕</h1>
          <img
            src="https://media.tenor.com/kUID97l82YQAAAAi/sanrio.gif"
            alt="cinnamoroll-yay"
          />
        </div>
      `;

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.add("show");
      }, 10);

      popup.addEventListener("click", (e) => {

        if (e.target === popup) {

          popup.classList.remove("show");

          setTimeout(() => {
            popup.remove();
          }, 300);
        }
      });
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    
    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent = hours;
    document.querySelector("#minutes").textContent = minutes;
    document.querySelector("#seconds").textContent = seconds;

    document.querySelector("#target-date").textContent =
      targetDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
  }

  updateCountdown();

  clearInterval(countdownInterval);

  countdownInterval = setInterval(updateCountdown, 1000);
}