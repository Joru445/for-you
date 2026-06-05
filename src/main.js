import { router, navigateTo } from "./router/router.js";
import { Header, initHeader } from "./components/header.js";

function renderLayout() {

    document.querySelector("#app").innerHTML = `
        ${Header()}
        <main id="content"></main>
    `;

    initHeader();
    router();
}

export function loadCSS(file) {

    const old = document.querySelector("#page-style");

    if (old) old.remove();

    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = file;
    link.id = "page-style";

    document.head.appendChild(link);
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    navigateTo(link.getAttribute("href"));
});

window.addEventListener("popstate", router);

renderLayout();