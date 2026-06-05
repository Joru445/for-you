import { loadCSS } from "../main.js";

export function Letter() {
  loadCSS("/src/styles/letter.css");

  return `
    <div class="letter-content"></div>
  `
}

export async function initLetter() {
    const response = await fetch("/src/letter/letter.html");
    const html = await response.text();

    document.querySelector(".letter-content").innerHTML = html;
}