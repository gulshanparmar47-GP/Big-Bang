// ---------- Sequential Slideshow (V2 storyboard) ----------
const slides = [
  {
    type: "video", title: "Age of Universe", emotion: "Curiosity",
    src: "https://www.youtube.com/embed/y6vyizUkCVI",
    onscreen: "How Old Are You? How Old Is Earth? How Old Is The Universe?",
    narration: "You probably know your age. Perhaps your parents' age too. But have you ever wondered how old the Earth is? Or how old the Universe is? To answer that question, we must travel billions of years into the past.",
  },
  {
    type: "video", title: "Big Bang", emotion: "Awe",
    src: "https://www.youtube.com/embed/A1_1htP1LcI",
    onscreen: "13.8 Billion Years Ago: The Beginning Of Our Story",
    narration: "Around 13.8 billion years ago, the Universe began expanding from an extremely hot and dense state. Scientists call this event the Big Bang. From this beginning came space, time, stars, galaxies, planets and eventually us.",
  },
  {
    type: "image", title: "Evolution", emotion: "Reflection",
    src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/8/38146_astrobiology-artist-concept-early-earth.jpg?w=1200",
    onscreen: "Change Is The Rule Of Life \u2014 Growth \u2192 Adaptation \u2192 Transformation",
    narration: "Nothing in the Universe remains exactly the same. Stars change. Planets change. Life changes. Evolution is the story of continuous adaptation and transformation across billions of years.",
  },
  {
    type: "video", title: "Galaxies", emotion: "Wonder",
    src: "https://www.youtube.com/embed/AwgD-EWQZvU",
    onscreen: "Welcome To The Milky Way: Our Galactic Home",
    narration: "As matter gathered under gravity, vast collections of stars formed galaxies. Our home is the Milky Way, containing hundreds of billions of stars. Yet among all those stars lies one small planet that would eventually support life.",
  },
  {
    type: "video", title: "Sun", emotion: "Gratitude & Wonder",
    src: "https://www.youtube.com/embed/zgcDOGkbWcg",
    onscreen: "4.6 Billion Years Ago: A New Star Is Born",
    narration: "About 4.6 billion years ago, gravity pulled together a vast cloud of gas and dust. As the cloud collapsed, temperatures rose and a new star was born \u2014 one of the key reasons for survival of our planet and life therein. Without it, our planet would be a frozen and lifeless world.",
  },
  {
    type: "video", title: "Earth", emotion: "Satisfaction",
    src: "https://www.youtube.com/embed/pjzcY3TPK24",
    onscreen: "Earth Is Born: 4.54 Billion Years Ago",
    narration: "About 4.54 billion years ago, dust and rock orbiting the young Sun gradually came together to form Earth. What began as a hot, hostile world would eventually become our home.",
  },
  {
    type: "image", title: "Moon", emotion: "Fascination",
    src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/585/Moon_formation_illustration.jpeg?w=1200",
    onscreen: "Earth's Closest Companion: The Moon",
    narration: "Scientists believe the Moon formed after a giant collision between the early Earth and a Mars-sized object. The Moon helped stabilize Earth's tilt, creating the conditions that allowed life to flourish.",
  },
  {
    type: "video", title: "First Life", emotion: "Hope",
    src: "https://www.youtube.com/embed/rKGjxV9bLXE",
    onscreen: "Life Begins: 3.5 Billion Years Ago",
    narration: "As Earth cooled and oceans formed, simple chemical compounds interacted for millions of years. Eventually, the first single-celled organisms appeared, marking the beginning of life on Earth.",
  },
  {
    type: "quiz", title: "Knowledge Check", emotion: "Achievement",
  },
  {
    type: "statement", title: "We Are Stardust", emotion: "Awe",
    src: "https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg",
    onscreen: "You Are Made Of Stardust",
    narration: "The atoms in your body were forged inside ancient stars. The calcium in your bones, the iron in your blood, and the oxygen you breathe all originated in the cosmos. In a very real sense, we are children of the Universe.",
  },
  {
    type: "statement", title: "Three Lessons", emotion: "Inspiration",
    src: "https://www.nasa.gov/wp-content/uploads/2025/02/49533887268-9d045c7081-o.jpg",
    onscreen: "Humility, Adaptation, & Imagination",
    narration: "This journey teaches us three lessons. First, we are part of something far bigger than ourselves. Second, life survives by adapting. Third, humans possess the unique ability to imagine and create a better future.",
  },
];

const QUIZ_INDEX = slides.findIndex((s) => s.type === "quiz");
const CORRECT_ORDER = ["Big Bang", "Galaxies", "Sun", "Earth", "Moon", "First Life"];
let quizPassed = false;
let quizPool = [];
let quizAnswer = [];
let quizAttempts = 0;

let slideIndex = 0;
const slideFrame = document.getElementById("slideFrame");
const slideProgress = document.getElementById("slideProgress");
const slideTitleText = document.getElementById("slideTitleText");
const slideEmotion = document.getElementById("slideEmotion");
const slideNarration = document.getElementById("slideNarration");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const slideDots = document.getElementById("slideDots");

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuizUI(container) {
  quizPool = shuffleArr(CORRECT_ORDER);
  quizAnswer = [];

  const prompt = document.createElement("p");
  prompt.className = "iq-prompt";
  prompt.textContent = "Arrange these events in the order they happened, earliest first. You must get the sequence right to continue.";
  container.appendChild(prompt);

  const poolLabel = document.createElement("div");
  poolLabel.className = "iq-label";
  poolLabel.textContent = "Tap to add, in order";
  container.appendChild(poolLabel);

  const poolEl = document.createElement("div");
  poolEl.className = "iq-pool";
  container.appendChild(poolEl);

  const answerLabel = document.createElement("div");
  answerLabel.className = "iq-label";
  answerLabel.textContent = "Your sequence";
  container.appendChild(answerLabel);

  const answerEl = document.createElement("div");
  answerEl.className = "iq-answer";
  container.appendChild(answerEl);

  const controls = document.createElement("div");
  controls.className = "iq-controls";
  const checkBtn = document.createElement("button");
  checkBtn.className = "iq-check-btn";
  checkBtn.textContent = "Check sequence";
  const resetBtn = document.createElement("button");
  resetBtn.className = "iq-reset-btn";
  resetBtn.textContent = "Reset";
  controls.appendChild(checkBtn);
  controls.appendChild(resetBtn);
  container.appendChild(controls);

  const feedback = document.createElement("p");
  feedback.className = "iq-feedback";
  container.appendChild(feedback);

  function renderPools() {
    poolEl.innerHTML = "";
    answerEl.innerHTML = "";
    quizPool.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "iq-card";
      btn.textContent = item;
      btn.onclick = () => {
        quizPool = quizPool.filter((i) => i !== item);
        quizAnswer.push(item);
        renderPools();
      };
      poolEl.appendChild(btn);
    });
    quizAnswer.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.className = "iq-card";
      btn.textContent = `${idx + 1}. ${item}`;
      btn.onclick = () => {
        if (quizPassed) return;
        quizAnswer = quizAnswer.filter((i) => i !== item);
        quizPool.push(item);
        renderPools();
      };
      answerEl.appendChild(btn);
    });
  }
  renderPools();

  checkBtn.onclick = () => {
    if (quizAnswer.length < CORRECT_ORDER.length) {
      feedback.textContent = "Place all six events in order first.";
      feedback.className = "iq-feedback no";
      return;
    }
    quizAttempts++;
    const correct = quizAnswer.every((v, i) => v === CORRECT_ORDER[i]);
    if (correct) {
      quizPassed = true;
      feedback.textContent = "\u2713 Correct \u2014 Next is now unlocked.";
      feedback.className = "iq-feedback ok";
      updateNextButtonState();
    } else {
      const hint = quizAttempts >= 2 ? " Hint: think about what has to physically exist before the next thing can form." : "";
      feedback.textContent = `Not quite yet.${hint}`;
      feedback.className = "iq-feedback no";
    }
  };

  resetBtn.onclick = () => {
    quizPool = shuffleArr(CORRECT_ORDER);
    quizAnswer = [];
    feedback.textContent = "";
    renderPools();
  };
}

function updateNextButtonState() {
  if (slideIndex === QUIZ_INDEX && !quizPassed) {
    slideNext.disabled = true;
    slideNext.textContent = "Complete sequence to continue";
  } else {
    slideNext.disabled = false;
    slideNext.textContent = slideIndex === slides.length - 1 ? "Restart \u21ba" : "Next \u2192";
  }
}

function renderSlide() {
  const s = slides[slideIndex];
  slideFrame.innerHTML = "";
  slideFrame.className = "slide-frame";
  slideFrame.style.backgroundImage = "";

  if (s.type === "video") {
    const embedUrl = `${s.src}?fs=0&cc_load_policy=1&rel=0&modestbranding=1`;
    slideFrame.innerHTML = `<iframe src="${embedUrl}" allow="autoplay; encrypted-media" loading="lazy"></iframe><div class="slide-stat">${s.onscreen}</div>`;
  } else if (s.type === "image") {
    slideFrame.innerHTML = `<img src="${s.src}" alt="${s.title}" loading="lazy"><div class="slide-stat">${s.onscreen}</div>`;
  } else if (s.type === "statement") {
    slideFrame.classList.add("statement-mode");
    slideFrame.style.backgroundImage = `url('${s.src}')`;
    slideFrame.innerHTML = `<div class="statement-text"><h4>${s.onscreen}</h4><p>${s.narration}</p></div>`;
  } else if (s.type === "quiz") {
    slideFrame.classList.add("quiz-mode");
    buildQuizUI(slideFrame);
  }

  slideProgress.textContent = `Screen ${slideIndex + 1} of ${slides.length}`;
  slideTitleText.textContent = s.title;
  slideEmotion.textContent = s.emotion;
  slideNarration.textContent = s.type === "quiz" ? "" : s.narration;
  slidePrev.disabled = slideIndex === 0;
  updateNextButtonState();

  slideDots.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot" + (i === slideIndex ? " active" : "");
    dot.setAttribute("aria-label", `Go to screen ${i + 1}`);
    dot.onclick = () => {
      if (i > QUIZ_INDEX && !quizPassed) return;
      slideIndex = i;
      renderSlide();
    };
    slideDots.appendChild(dot);
  });
}

if (slideFrame) {
  renderSlide();
  slidePrev.onclick = () => { if (slideIndex > 0) { slideIndex--; renderSlide(); } };
  slideNext.onclick = () => {
    if (slideIndex === QUIZ_INDEX && !quizPassed) return;
    slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    renderSlide();
  };

  // Custom immersive mode: expand the whole slideshow card (video/image + nav bar
  // together) to fill the viewport using our own CSS, not the browser's native
  // Fullscreen API — this guarantees identical, predictable behavior across every
  // slide type (video, image, quiz, statement), since it never hands control to
  // the browser or any individual media element.
  const slideshowEl = document.getElementById("slideshow");
  const expandBtn = document.getElementById("slideExpand");
  if (slideshowEl && expandBtn) {
    const placeholder = document.createComment("slideshow-anchor");
    slideshowEl.after(placeholder);

    const setImmersive = (on) => {
      if (on) {
        document.body.appendChild(slideshowEl);
      } else if (placeholder.parentNode) {
        placeholder.parentNode.insertBefore(slideshowEl, placeholder);
      }
      slideshowEl.classList.toggle("fullscreen-mode", on);
      expandBtn.textContent = on ? "⤢" : "⛶";
      document.body.style.overflow = on ? "hidden" : "";
    };
    expandBtn.onclick = () => setImmersive(!slideshowEl.classList.contains("fullscreen-mode"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && slideshowEl.classList.contains("fullscreen-mode")) {
        setImmersive(false);
      }
    });
  }
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

// ---------- Mobile nav toggle ----------
const navBurger = document.getElementById("navBurger");
const navMobilePanel = document.getElementById("navMobilePanel");
if (navBurger && navMobilePanel) {
  navBurger.onclick = () => navMobilePanel.classList.toggle("open");
  navMobilePanel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navMobilePanel.classList.remove("open"));
  });
}

// ---------- Scroll-reveal ----------
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("revealed"));
}

