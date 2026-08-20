const CORRECT_PIN = "210807";

const gate = document.getElementById("gate");
const loader = document.getElementById("loaderScreen");
const site = document.getElementById("site");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const pinDots = [...document.querySelectorAll("#pinDots span")];

function updateDots() {
  pinDots.forEach((dot, i) =>
    dot.classList.toggle("filled", i < pinInput.value.length),
  );
}
document
  .querySelector(".gate-card")
  .addEventListener("click", () => pinInput.focus());
pinInput.addEventListener("input", updateDots);
pinInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlock();
});

document.getElementById("enterBtn").addEventListener("click", unlock);

function unlock() {
  if (pinInput.value !== CORRECT_PIN) {
    pinError.textContent = "PIN-nya belum benar. Coba lagi ya ♡";
    pinInput.value = "";
    updateDots();
    return;
  }
  pinError.textContent = "";
  gate.style.transition = "opacity .45s ease";
  gate.style.opacity = "0";
  setTimeout(() => {
    gate.style.display = "none";
    loader.classList.add("show");
    setTimeout(() => {
      loader.classList.remove("show");
      site.classList.add("visible");
      window.scrollTo(0, 0);
      startFirstSong();
    }, 2300);
  }, 450);
}

// ---------- Music ----------
const audio = document.getElementById("audioPlayer");
const musicCards = [...document.querySelectorAll(".music-card")];
const nowPlaying = document.getElementById("nowPlaying");
const pauseBtn = document.getElementById("pauseBtn");
const soundToggle = document.getElementById("soundToggle");
const equalizer = document.getElementById("equalizer");
let currentIndex = 0;

function loadSong(index, autoPlay = true) {
  currentIndex = index;
  const card = musicCards[index];
  audio.src = card.dataset.src;
  nowPlaying.textContent = card.dataset.title;
  musicCards.forEach((c) => c.classList.remove("active"));
  card.classList.add("active");
  if (autoPlay) {
    audio
      .play()
      .then(() => {
        pauseBtn.textContent = "Ⅱ";
        equalizer.classList.add("playing");
      })
      .catch(() => {
        pauseBtn.textContent = "▶";
      });
  }
}

function startFirstSong() {
  loadSong(0, true);
}

musicCards.forEach((card, i) => {
  card.addEventListener("click", () => loadSong(i, true));
});

pauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      pauseBtn.textContent = "Ⅱ";
      equalizer.classList.add("playing");
    });
  } else {
    audio.pause();
    pauseBtn.textContent = "▶";
    equalizer.classList.remove("playing");
  }
});

soundToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      pauseBtn.textContent = "Ⅱ";
      equalizer.classList.add("playing");
    });
  } else {
    audio.pause();
    pauseBtn.textContent = "▶";
    equalizer.classList.remove("playing");
  }
});

audio.addEventListener("ended", () => {
  loadSong((currentIndex + 1) % musicCards.length, true);
});

// ---------- Likes ----------
document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.firstChild.textContent = btn.classList.contains("liked") ? "♥" : "♡";
    btn.lastElementChild.textContent = btn.classList.contains("liked")
      ? "Tersimpan di hati ♡"
      : "Simpan kenangan ini";
  });
});

// ---------- Photo lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxLike = document.getElementById("lightboxLike");

document.querySelectorAll(".memory-photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.dataset.full;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxLike.textContent = "♡";
    lightboxLike.classList.remove("liked");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document
  .getElementById("lightboxClose")
  .addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
lightboxLike.addEventListener("click", (e) => {
  e.stopPropagation();
  const liked = lightboxLike.classList.toggle("liked");
  lightboxLike.textContent = liked ? "♥" : "♡";
});
