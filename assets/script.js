document.querySelectorAll(".button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const embed = button.querySelector("img");
    const src = embed?.getAttribute("src");
    const card = button.closest(".card");
    const hologram = card.querySelector(".hologram");
    const span = card.querySelectorAll(".span")[index];

    document
      .querySelectorAll(".button")
      .forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    document
      .querySelectorAll(".span")
      .forEach((s) => s.classList.remove("show"));
    span.classList.add("show");

    const bottom = ["130px", "90px", "50px"];
    span.style.bottom = bottom[index];

    if (src && hologram) {
      hologram.style.backgroundImage = `url('${src}')`;
    }
  });
});

document.querySelectorAll(".title").forEach((title) => {
  title.addEventListener("click", () => {
    const card = title.closest(".card");
    const hologram = card.querySelector(".hologram");
    const defaultSrc = hologram.getAttribute("data-default");
    hologram.style.backgroundImage = `url('${defaultSrc}')`;
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseleave", () => {
    const hologram = card.querySelector(".hologram");
    const defaultSrc = hologram.getAttribute("data-default");
    hologram.style.backgroundImage = `url('${defaultSrc}')`;
    card
      .querySelectorAll(".button")
      .forEach((b) => b.classList.remove("active"));
    card.querySelectorAll(".span").forEach((s) => s.classList.remove("show"));
  });
});

const body = document.querySelector("body");
const numberOfStars = 100; // biji plir

for (let i = 0; i < numberOfStars; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let size = Math.random() * 2;
  let twinkleDelay = Math.random() * 3;

  star.style.left = `${x}%`;
  star.style.top = `${y}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDelay = `${twinkleDelay}s`;
  body.appendChild(star);
}

function createInteractiveStar(x, y) {
  const star = document.createElement("div");
  star.classList.add("interactive-star");
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  const offsetX = (Math.random() - 0.5) * 30; // arah horizontal acak
  const offsetY = 20 + Math.random() * 30; // jatuh ke bawah, bervariasi
  const delay = Math.random() * 0.2;
  const duration = 0.6 + Math.random() * 0.6;

  star.style.setProperty("--x", `${offsetX}px`);
  star.style.setProperty("--y", `${offsetY}px`);
  star.style.animationDelay = `${delay}s`;
  star.style.animationDuration = `${duration}s`;

  document.body.appendChild(star);
  setTimeout(() => star.remove(), (delay + duration) * 1000);
}

document.addEventListener("mousemove", (e) => {
  if (!e.target.closest(".card")) {
    createInteractiveStar(e.clientX, e.clientY);
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".card")) {
    for (let i = 0; i < 5; i++) {
      const offsetX = (Math.random() - 0.5) * 50;
      const offsetY = (Math.random() - 0.5) * 50;
      createInteractiveStar(e.clientX + offsetX, e.clientY + offsetY);
    }
  }
});
