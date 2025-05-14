    document.querySelectorAll(".button").forEach((button, index) => {
      button.addEventListener("click", () => {
        const embed = button.querySelector("img");
        const src = embed?.getAttribute("src");
        const card = button.closest(".card");
        const hologram = card.querySelector(".hologram");
        const span = card.querySelectorAll(".span")[index];

        document.querySelectorAll(".button").forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".span").forEach(s => s.classList.remove("show"));
        span.classList.add("show");

        const bottom = ["130px", "90px", "50px"];
        span.style.bottom = bottom[index];

        if (src && hologram) {
          hologram.style.backgroundImage = `url('${src}')`;
        }
      });
    });

    document.querySelectorAll(".title").forEach(title => {
      title.addEventListener("click", () => {
        const card = title.closest(".card");
        const hologram = card.querySelector(".hologram");
        const defaultSrc = hologram.getAttribute("data-default");
        hologram.style.backgroundImage = `url('${defaultSrc}')`;
      });
    });

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseleave", () => {
        const hologram = card.querySelector(".hologram");
        const defaultSrc = hologram.getAttribute("data-default");
        hologram.style.backgroundImage = `url('${defaultSrc}')`;

        card.querySelectorAll(".button").forEach(b => b.classList.remove("active"));
        card.querySelectorAll(".span").forEach(s => s.classList.remove("show"));
      });
    });
    
    document.querySelectorAll(".card a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault(); 
        const card = link.closest(".card");
        card.classList.add("fade-out");
        setTimeout(() => {
          sessionStorage.setItem('cardState', 'hidden');
          window.location.href = link.href;
        }, 1200);
      });
  });

    window.onload = () => {
      const card = document.querySelector('.card');
      if (sessionStorage.getItem('cardState') === 'hidden') {        
        card.classList.remove("fade-out");        
      } 
      sessionStorage.removeItem('cardState');
    };
  
    const body = document.querySelector('body');
    const numberOfStars = 100; // biji plir

    for (let i = 0; i < numberOfStars; i++) {
      let star = document.createElement('div');
      star.classList.add('star');
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
