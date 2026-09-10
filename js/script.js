// Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      // Particle background
      const canvas = document.getElementById("particle-canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      let particlesArray;

      class Particle {
        constructor(x, y, dx, dy, size) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.size = size;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,212,255,0.4)";
          ctx.fill();
        }
        update() {
          if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
          if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
          this.x += this.dx;
          this.y += this.dy;
          this.draw();
        }
      }
      function initParticles() {
        particlesArray = [];
        let num = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < num; i++) {
          let size = Math.random() * 2 + 1;
          let x = Math.random() * (innerWidth - size * 2) + size;
          let y = Math.random() * (innerHeight - size * 2) + size;
          let dx = Math.random() * 0.4 - 0.2;
          let dy = Math.random() * 0.4 - 0.2;
          particlesArray.push(new Particle(x, y, dx, dy, size));
        }
      }
      function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        particlesArray.forEach((p) => p.update());
      }
      window.addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initParticles();
      });
      initParticles();
      animateParticles();

      // Resume download button
      const resumeBtn = document.getElementById("resumeDownloadBtn");
      if (resumeBtn) {
        resumeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          // relative path to the resume in the same folder
          const resumeUrl = "assets/resume/Aryan%20Nagori.pdf";
          window.open(resumeUrl, "_blank");
        });
      }
