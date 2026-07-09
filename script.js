// ---------- Sequential Slideshow ----------
const slides = [
  { title: "Age of Universe", emotion: "Curiosity", src: "https://www.youtube.com/embed/nEL8c4-J3gg", narration: "\u201cHow old are you? ...have you ever wondered how old the Earth is?\u201d" },
  { title: "Big Bang", emotion: "Awe", src: "https://www.youtube.com/embed/p2WPOKuex2c", narration: "\u201c13.8 billion years ago... came space, time, stars, galaxies, planets and eventually us.\u201d" },
  { title: "Evolution", emotion: "Reflection", src: "https://drive.google.com/file/d/1BXNM2Kugk3HZnG-iFwD0R6MdzmaawaO6/preview", narration: "\u201cNothing in the Universe remains exactly the same... Growth \u2192 Adaptation \u2192 Transformation.\u201d" },
  { title: "Galaxies", emotion: "Wonder", src: "https://www.youtube.com/embed/Z3mFCii8bds", narration: "\u201cIt would take 100,000 years to cross the Milky Way at the speed of light.\u201d" },
  { title: "Sun", emotion: "Gratitude", src: "https://www.youtube.com/embed/sn2HkMfArdk", narration: "\u201cWithout it, our planet would be a frozen and lifeless world.\u201d" },
  { title: "Earth", emotion: "Satisfaction", src: "https://www.youtube.com/embed/2_XApar-a5Y", narration: "\u201cWhat began as a hot, hostile world would eventually become our home.\u201d" },
  { title: "Moon", emotion: "Fascination", src: "https://www.youtube.com/embed/kQQYCWyz_sQ", narration: "\u201cThe Moon helped stabilize Earth's tilt, creating the conditions that allowed life to flourish.\u201d" },
  { title: "First Life", emotion: "Hope", src: "https://www.youtube.com/embed/1xWLL-7SNW8", narration: "\u201cThe first single-celled organisms emerged, marking the beginning of life on Earth.\u201d" },
];

let slideIndex = 0;
const slideFrame = document.getElementById("slideFrame");
const slideProgress = document.getElementById("slideProgress");
const slideTitleText = document.getElementById("slideTitleText");
const slideEmotion = document.getElementById("slideEmotion");
const slideNarration = document.getElementById("slideNarration");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const slideDots = document.getElementById("slideDots");

function renderSlide() {
  const s = slides[slideIndex];
  const allowAttr = s.src.includes("youtube.com") ? "autoplay; encrypted-media" : "autoplay";
  slideFrame.innerHTML = `<iframe src="${s.src}" allow="${allowAttr}" allowfullscreen loading="lazy"></iframe>`;
  slideProgress.textContent = `Screen ${slideIndex + 1} of ${slides.length}`;
  slideTitleText.textContent = s.title;
  slideEmotion.textContent = s.emotion;
  slideNarration.textContent = s.narration;
  slidePrev.disabled = slideIndex === 0;
  slideNext.textContent = slideIndex === slides.length - 1 ? "Restart ↺" : "Next →";

  slideDots.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot" + (i === slideIndex ? " active" : "");
    dot.setAttribute("aria-label", `Go to screen ${i + 1}`);
    dot.onclick = () => { slideIndex = i; renderSlide(); };
    slideDots.appendChild(dot);
  });
}

if (slideFrame) {
  renderSlide();
  slidePrev.onclick = () => { if (slideIndex > 0) { slideIndex--; renderSlide(); } };
  slideNext.onclick = () => {
    slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    renderSlide();
  };
}

// ---------- Emotional Arc Chart ----------
const arcData = [
  { label: "Age of\nUniverse", emotion: "Curiosity", value: 55 },
  { label: "Big Bang", emotion: "Awe", value: 88 },
  { label: "Evolution", emotion: "Reflection", value: 45 },
  { label: "Galaxies", emotion: "Wonder", value: 78 },
  { label: "Sun", emotion: "Gratitude", value: 62 },
  { label: "Earth", emotion: "Satisfaction", value: 58 },
  { label: "Moon", emotion: "Fascination", value: 70 },
  { label: "First Life", emotion: "Hope", value: 66 },
  { label: "Quiz", emotion: "Achievement", value: 74 },
  { label: "Stardust", emotion: "Awe", value: 92 },
  { label: "3 Lessons", emotion: "Inspiration", value: 96 },
];

const arcEl = document.getElementById("arcChart");
if (arcEl) {
  arcData.forEach((d) => {
    const step = document.createElement("div");
    step.className = "arc-step";
    step.innerHTML = `
      <div class="arc-emotion">${d.emotion}</div>
      <div class="arc-bar" style="height:${d.value}px;"></div>
      <div class="arc-label">${d.label.replace("\n", "<br>")}</div>
    `;
    arcEl.appendChild(step);
  });
}

// ---------- Sequencing Quiz ----------
const correctOrder = ["Big Bang", "Galaxy Formation", "The Sun", "Earth", "The Moon"];
let pool = [];
let answer = [];

const poolEl = document.getElementById("quizPool");
const answerEl = document.getElementById("quizAnswer");
const feedbackEl = document.getElementById("quizFeedback");
const checkBtn = document.getElementById("quizCheck");
const resetBtn = document.getElementById("quizReset");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderQuiz() {
  poolEl.innerHTML = "";
  answerEl.innerHTML = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "quiz-feedback";

  pool.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "quiz-card";
    btn.textContent = item;
    btn.setAttribute("aria-label", `Add ${item} to your sequence`);
    btn.onclick = () => {
      pool = pool.filter((i) => i !== item);
      answer.push(item);
      renderQuiz();
    };
    poolEl.appendChild(btn);
  });

  if (answer.length === 0) {
    const hint = document.createElement("span");
    hint.style.fontFamily = "var(--mono)";
    hint.style.fontSize = "13px";
    hint.style.color = "var(--ink-soft)";
    hint.style.opacity = "0.6";
    hint.textContent = "Click events above, in order — earliest first";
    answerEl.appendChild(hint);
  }

  answer.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-card";
    btn.textContent = `${idx + 1}. ${item}`;
    btn.onclick = () => {
      answer = answer.filter((i) => i !== item);
      pool.push(item);
      renderQuiz();
    };
    answerEl.appendChild(btn);
  });
}

function initQuiz() {
  pool = shuffle(correctOrder);
  answer = [];
  renderQuiz();
}

if (poolEl) {
  initQuiz();

  checkBtn.onclick = () => {
    if (answer.length < correctOrder.length) {
      feedbackEl.textContent = "Place all five events in order first.";
      feedbackEl.className = "quiz-feedback no";
      return;
    }
    const isCorrect = answer.every((v, i) => v === correctOrder[i]);
    if (isCorrect) {
      feedbackEl.textContent = "✓ Correct — that's the real chronological order.";
      feedbackEl.className = "quiz-feedback ok";
    } else {
      feedbackEl.textContent = "Not quite. Reset and try again — think about what has to exist before the next thing can form.";
      feedbackEl.className = "quiz-feedback no";
    }
  };

  resetBtn.onclick = initQuiz;
}
