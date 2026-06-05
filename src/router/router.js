import { HomePage, initHomePage } from "../pages/home.js";
import { Gallery, initGallery } from "../pages/gallery.js";
import { initLetter, Letter } from "../pages/letter.js";

const routes = {
    "/": HomePage,
    "/gallery": Gallery,
    "/letter": Letter
};

export function router() {

    const path = location.hash.slice(1) || "/";

    const page = routes[path] || HomePage;

    document.querySelector("#content").innerHTML = page();

    if (path ==="/") {
        initHomePage();
    }
    else if (path === "/gallery") {
        initGallery();
    }
    else if (path === "/letter") {
        initLetter();
    }
}

export function navigateTo(url) {
    location.hash = url;
}

window.addEventListener("hashchange", router);