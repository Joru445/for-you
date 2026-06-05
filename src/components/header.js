export function Header() {

  return `
        <header class="header">
          <p><i class="ri-code-s-slash-line"></i></p>

          <nav class="nav">
            <a href="/" data-link>
              <i class="ri-home-line"></i>
              Home
            </a>
            <a href="/gallery" data-link>
              <i class="ri-image-2-line"></i>
              Gallery
            </a>
            <a href="/letter" data-link>
              <i class="ri-mail-line"></i>
              Letter
            </a>
          </nav>

          <p>Zy</p>
        </header>
    `;
}

export function initHeader() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("header-scroll", window.scrollY > 50);
  });
}