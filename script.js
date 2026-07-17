// ---------- Sequential Slideshow (V2 storyboard) ----------
const slides = [
  {
    type: "objective", title: "Before We Begin", emotion: "Intent",
    onscreen: "What this journey is for",
    objectives: [
      "Place the origin of the Universe, the Earth, and the first life in their correct order — and their true scale.",
      "Understand how we know these ages: from evidence, not assertion.",
      "Grasp, in human terms, just how vast 13.8 billion years really is.",
    ],
    thesis: "We measure our lives in minutes and years. This is an invitation to think in billions — and to believe it because the evidence shows it, not because someone said so.",
  },
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
    type: "scale", title: "The Scale Problem", emotion: "Perspective",
    onscreen: "If all of time were a single year…",
    calendar: [
      { date: "January 1", event: "The Big Bang", sub: "The universe begins" },
      { date: "September", event: "Earth forms", sub: "4.54 billion years ago" },
      { date: "Late September", event: "First life appears", sub: "single cells in the ocean" },
      { date: "December 25", event: "Dinosaurs arrive", sub: "late in the cosmic year" },
      { date: "Dec 31, 11:59:46pm", event: "All human history", sub: "every empire, every book — the last 14 seconds" },
    ],
    takeaway: "Think about that. If the whole universe were one year old, then everything humans have ever done — every king, every war, every invention you've heard of — happened in the last few seconds before midnight on December 31st.",
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
    type: "video", title: "Moon", emotion: "Fascination",
    src: "https://www.youtube.com/embed/QK_g9Rm7tEs",
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
    type: "evidence", title: "How Do We Know?", emotion: "Reasoning",
    onscreen: "These <em>numbers</em> aren't <em>beliefs</em>. Here's how we measure them.",
    evidence: [
      { claim: "The universe's age", method: "From the light of distant galaxies, stretched as space itself expands." },
      { claim: "Earth's age", method: "From radioactive decay in the oldest rocks and meteorites — atoms that tick like clocks at a known rate." },
      { claim: "The first life", method: "From fossils pressed into stone 3.5 billion years old." },
    ],
    takeaway: "A scientific claim comes with its evidence attached. You don't have to take it on faith — you can check it.",
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

// Comprehension questions that follow the sequencing task
const QUIZ_MCQS = [
  {
    prompt: "The Sun had to form before the Earth. Why?",
    options: [
      { key: "A", text: "Earth is made from the leftover gas and dust that surrounded the newborn Sun." },
      { key: "B", text: "The Sun is bigger, so it came first." },
      { key: "C", text: "The Earth needed sunlight in order to exist." },
      { key: "D", text: "They actually formed at the same time." },
    ],
    correct: "A",
    feedback: {
      A: "Exactly. Earth didn't form beside the Sun — it formed from the same collapsing cloud, out of the material left orbiting the young star. The order isn't arbitrary; one is the leftover of the other.",
      B: "Size doesn't determine order of formation. A bigger object isn't automatically older — think about what each one is physically made from instead.",
      C: "This reverses cause and effect. Earth doesn't need sunlight to exist as a planet — but it did need the Sun's leftover material to form from. Sunlight matters for life, not for the planet's existence.",
      D: "Close, but not quite — they're related but not simultaneous. The Sun formed first from a collapsing cloud; Earth assembled afterward from the debris left orbiting it.",
    },
  },
  {
    prompt: "On the cosmic calendar — where the whole 13.8-billion-year history of the universe fits into a single year — how much of it is ALL of recorded human history?",
    options: [
      { key: "A", text: "The last few months." },
      { key: "B", text: "The last few days." },
      { key: "C", text: "The last 14 seconds before midnight on December 31st." },
      { key: "D", text: "About half the year." },
    ],
    correct: "C",
    feedback: {
      A: "Not even close — and that's exactly the point. Our intuition wildly overestimates humanity's share of cosmic time.",
      B: "Still far too much. Every empire, every book, every name in history fits into something far smaller than days.",
      C: "Yes — and sit with that for a second. Everything humans have ever written down fits in the final 14 seconds of a cosmic year. That's the scale this whole journey is really about.",
      D: "Not remotely — this is the intuition the whole module exists to correct. Humanity's share isn't half the year; it's the last 14 seconds of it.",
    },
  },
];

let quizPassed = false;
let quizPool = [];
let quizAnswer = [];
let quizAttempts = 0;
let quizSeqDone = false;
let quizMcqDone = [false, false];

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

function refreshQuizPassed() {
  quizPassed = quizSeqDone && quizMcqDone[0] && quizMcqDone[1];
  updateNextButtonState();
}

function buildQuizUI(container) {
  quizSeqDone = false;
  quizMcqDone = [false, false];
  quizPassed = false;
  quizPool = shuffleArr(CORRECT_ORDER);
  quizAnswer = [];
  quizAttempts = 0;

  container.classList.add("quiz-scroll");

  // ---- Question 1: sequencing ----
  const q1 = document.createElement("div");
  q1.className = "iq-block";
  q1.innerHTML = `<div class="iq-qnum">Question 1 of 3 · Sequence</div>`;
  const prompt = document.createElement("p");
  prompt.className = "iq-prompt";
  prompt.textContent = "Arrange these events in the order they happened, earliest first.";
  q1.appendChild(prompt);

  const poolLabel = document.createElement("div");
  poolLabel.className = "iq-label";
  poolLabel.textContent = "Tap to add, in order";
  q1.appendChild(poolLabel);
  const poolEl = document.createElement("div");
  poolEl.className = "iq-pool";
  q1.appendChild(poolEl);

  const answerLabel = document.createElement("div");
  answerLabel.className = "iq-label";
  answerLabel.textContent = "Your sequence";
  q1.appendChild(answerLabel);
  const answerEl = document.createElement("div");
  answerEl.className = "iq-answer";
  q1.appendChild(answerEl);

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
  q1.appendChild(controls);

  const feedback = document.createElement("p");
  feedback.className = "iq-feedback";
  q1.appendChild(feedback);
  container.appendChild(q1);

  function renderPools() {
    poolEl.innerHTML = "";
    answerEl.innerHTML = "";
    quizPool.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "iq-card";
      btn.textContent = item;
      btn.onclick = () => {
        if (quizSeqDone) return;
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
        if (quizSeqDone) return;
        quizAnswer = quizAnswer.filter((i) => i !== item);
        quizPool.push(item);
        renderPools();
      };
      answerEl.appendChild(btn);
    });
  }
  renderPools();

  checkBtn.onclick = () => {
    if (quizSeqDone) return;
    if (quizAnswer.length < CORRECT_ORDER.length) {
      feedback.textContent = "Place all six events in order first.";
      feedback.className = "iq-feedback no";
      return;
    }
    quizAttempts++;
    const correct = quizAnswer.every((v, i) => v === CORRECT_ORDER[i]);
    if (correct) {
      quizSeqDone = true;
      feedback.textContent = "\u2713 Correct order.";
      feedback.className = "iq-feedback ok";
      refreshQuizPassed();
    } else {
      const hint = quizAttempts >= 2 ? " Hint: think about what has to physically exist before the next thing can form." : "";
      feedback.textContent = `Not quite yet.${hint}`;
      feedback.className = "iq-feedback no";
    }
  };
  resetBtn.onclick = () => {
    if (quizSeqDone) return;
    quizPool = shuffleArr(CORRECT_ORDER);
    quizAnswer = [];
    feedback.textContent = "";
    renderPools();
  };

  // ---- Questions 2 & 3: multiple choice with per-option feedback ----
  QUIZ_MCQS.forEach((mcq, qi) => {
    const block = document.createElement("div");
    block.className = "iq-block";
    block.innerHTML = `<div class="iq-qnum">Question ${qi + 2} of 3 · ${qi === 1 ? "Scale" : "Comprehension"}</div>`;
    const p = document.createElement("p");
    p.className = "iq-prompt";
    p.textContent = mcq.prompt;
    block.appendChild(p);

    const opts = document.createElement("div");
    opts.className = "iq-mcq-opts";
    block.appendChild(opts);

    const fb = document.createElement("p");
    fb.className = "iq-feedback";
    block.appendChild(fb);

    mcq.options.forEach((opt) => {
      const b = document.createElement("button");
      b.className = "iq-mcq-opt";
      b.innerHTML = `<span class="iq-mcq-key">${opt.key}</span><span>${opt.text}</span>`;
      b.onclick = () => {
        if (quizMcqDone[qi]) return;
        const right = opt.key === mcq.correct;
        opts.querySelectorAll(".iq-mcq-opt").forEach((x) => x.classList.remove("wrong"));
        if (right) {
          b.classList.add("right");
          opts.querySelectorAll(".iq-mcq-opt").forEach((x) => (x.disabled = true));
          fb.className = "iq-feedback ok";
          fb.textContent = "\u2713 " + mcq.feedback[opt.key];
          quizMcqDone[qi] = true;
          refreshQuizPassed();
        } else {
          b.classList.add("wrong");
          fb.className = "iq-feedback no";
          fb.textContent = mcq.feedback[opt.key];
        }
      };
      opts.appendChild(b);
    });
    container.appendChild(block);
  });
}

function updateNextButtonState() {
  if (slideIndex === QUIZ_INDEX && !quizPassed) {
    slideNext.disabled = true;
    slideNext.textContent = "Answer all three to continue";
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
  } else if (s.type === "localvideo") {
    slideFrame.innerHTML = `<video src="${s.src}" controls playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover;background:#000;"></video><div class="slide-stat">${s.onscreen}</div>`;
  } else if (s.type === "image") {
    slideFrame.innerHTML = `<img src="${s.src}" alt="${s.title}" loading="lazy"><div class="slide-stat">${s.onscreen}</div>`;
  } else if (s.type === "statement") {
    slideFrame.classList.add("statement-mode");
    slideFrame.style.backgroundImage = `url('${s.src}')`;
    slideFrame.innerHTML = `<div class="statement-text"><h4>${s.onscreen}</h4><p>${s.narration}</p></div>`;
  } else if (s.type === "quiz") {
    slideFrame.classList.add("quiz-mode");
    buildQuizUI(slideFrame);
  } else if (s.type === "objective") {
    slideFrame.classList.add("panel-mode");
    slideFrame.innerHTML =
      `<div class="bpanel"><div class="bpanel-eyebrow">${s.onscreen}</div>` +
      `<ul class="bpanel-objectives">` +
      s.objectives.map((o) => `<li>${o}</li>`).join("") +
      `</ul><p class="bpanel-thesis">${s.thesis}</p></div>`;
  } else if (s.type === "scale") {
    slideFrame.classList.add("panel-mode");
    slideFrame.innerHTML =
      `<div class="bpanel"><div class="bpanel-headline">${s.onscreen}</div>` +
      `<div class="bcal">` +
      s.calendar.map((c) =>
        `<div class="bcal-row"><span class="bcal-date">${c.date}</span>` +
        `<span class="bcal-event">${c.event}<span class="bcal-sub">${c.sub}</span></span></div>`
      ).join("") +
      `</div><p class="bpanel-take">${s.takeaway}</p></div>`;
  } else if (s.type === "evidence") {
    slideFrame.classList.add("panel-mode");
    slideFrame.innerHTML =
      `<div class="bpanel"><div class="bpanel-headline">${s.onscreen}</div>` +
      `<div class="bev">` +
      s.evidence.map((e) =>
        `<div class="bev-row"><span class="bev-claim">${e.claim}</span>` +
        `<span class="bev-method">${e.method}</span></div>`
      ).join("") +
      `</div><p class="bpanel-take">${s.takeaway}</p></div>`;
  }

  slideProgress.textContent = `Screen ${slideIndex + 1} of ${slides.length}`;
  slideTitleText.textContent = s.title;
  slideEmotion.textContent = s.emotion;
  slideNarration.textContent = s.narration || "";
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
      expandBtn.setAttribute("data-tip", on ? "Exit fullscreen" : "Fullscreen");
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
  { label: "Objective", emotion: "Intent", value: 40 },
  { label: "Age of\nUniverse", emotion: "Curiosity", value: 55 },
  { label: "Big Bang", emotion: "Awe", value: 88 },
  { label: "Scale", emotion: "Perspective", value: 82 },
  { label: "Evolution", emotion: "Reflection", value: 45 },
  { label: "Galaxies", emotion: "Wonder", value: 78 },
  { label: "Sun", emotion: "Gratitude", value: 62 },
  { label: "Earth", emotion: "Satisfaction", value: 58 },
  { label: "Moon", emotion: "Fascination", value: 70 },
  { label: "First Life", emotion: "Hope", value: 66 },
  { label: "Evidence", emotion: "Reasoning", value: 60 },
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

// ---------- Nav depth on scroll ----------
const navEl = document.querySelector(".nav");
if (navEl) {
  const onScroll = () => navEl.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
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

// ---------- Customer Success: multi-scene click-to-reveal dialogue ----------
const csScenes = [
  {
    title: "Defining Customer Success",
    emotion: "Curiosity",
    img: "images/cs-slide1.jpg",
    alt: "Two colleagues chatting over coffee in a corporate cafeteria",
    context: "Two colleagues debate brand loyalty over coffee — and arrive at the definition of Customer Success themselves.",
    takeaway: "Customer Success is not support. It's the discipline of making sure customers reach their goals.",
    lines: [
      { speaker: "Anya", side: "left", audio: "audio/cs-1-1.mp3", pos: { left: "14%", top: "6%" }, pos: { left: "3%", top: "4%" }, text: "Okay, be honest — which brand would you actually defend in an argument?" },
      { speaker: "Dev", side: "right", audio: "audio/cs-1-2.mp3", pos: { right: "14%", top: "6%" }, pos: { right: "3%", top: "4%" }, text: "There's one, yeah. Not because its tools are unique — plenty of brands have the same features. But it actually got me somewhere." },
      { speaker: "Anya", side: "left", audio: "audio/cs-1-3.mp3", pos: { left: "14%", top: "6%" }, pos: { left: "3%", top: "4%" }, text: "Huh — so it's not really about support or service then?" },
      { speaker: "Dev", side: "right", audio: "audio/cs-1-4.mp3", pos: { right: "14%", top: "6%" }, pos: { right: "3%", top: "4%" }, text: "Exactly. It's the discipline of making sure customers actually reach their goals. That's Customer Success." },
    ],
  },
  {
    title: "The Customer's Need",
    emotion: "Aspiration",
    img: "images/cs-slide2.jpg",
    alt: "Anya researching content creation tools on her laptop late at night in her bedroom",
    context: "Late at night, Anya researches content-creation tools. She isn't shopping for software — she's shopping for an outcome. Customer Success starts before the sale.",
    takeaway: "The customer is buying an outcome, not a product. Success starts before the sale.",
    lines: [
      { speaker: "Anya", side: "left", audio: "audio/cs-2-1.mp3", text: "Woah — so many brands, so many tools. I can't tell which of these actually fits what I'm trying to build." },
      { speaker: "Anya", side: "left", audio: "audio/cs-2-2.mp3", text: "Let me just call Parmar Services. Hopefully someone helps me figure out what I actually need — not just another sales pitch." },
    ],
  },
  {
    title: "The Advisory Call",
    emotion: "Reassurance",
    img: "images/cs-slide3.jpg",
    alt: "Split screen: Anya on a video call at home at night, and Meera the sales advisor in a corporate office wearing a headset",
    context: "Meera talks Anya out of buying more than she needs. That single choice demonstrates the Customer Success principle better than any definition could — she optimises for Anya's outcome, not the invoice.",
    takeaway: "Advising a customer to buy less isn't lost revenue. It's earned trust.",
    lines: [
      { speaker: "Anya", side: "left", audio: "audio/cs-3-1.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "6%", top: "8%" }, pos: { left: "3%", top: "4%" }, text: "So based on what I'm doing, would this set of tools actually be a good starting point?" },
      { speaker: "Meera", side: "right", audio: "audio/cs-3-2.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "3%", top: "4%" }, text: "For where you are right now — yes. You've just started creating content. Start with these three, and add the rest when you actually need them." },
      { speaker: "Anya", side: "left", audio: "audio/cs-3-3.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "6%", top: "8%" }, pos: { left: "3%", top: "4%" }, text: "That's the first honest answer I've gotten all week. Thank you, Meera." },
    ],
  },
  {
    title: "The Purchase",
    emotion: "Delight",
    img: "images/cs-slide4.jpg",
    alt: "Anya sitting on her bed at night, smiling at a completed checkout screen on her laptop",
    context: "A frictionless first win. Onboarding is the first promise a company keeps — or breaks.",
    takeaway: "Onboarding is the first promise a company keeps — or breaks.",
    lines: [
      { speaker: "Anya", side: "left", audio: "audio/cs-4-1.mp3", text: "That was… genuinely easy. Account's set up, and I can start on my first project tonight." },
      { speaker: "Anya", side: "left", audio: "audio/cs-4-2.mp3", text: "If it stays this easy, I'm staying with them." },
    ],
  },
  {
    title: "The Breakdown",
    emotion: "Frustration",
    img: "images/cs-slide5.jpg",
    alt: "Anya at her desk in the morning, visibly frustrated on the phone, laptop showing LOGIN FAILED",
    context: "The failure Customer Success exists to repair. Note what's actually broken here — not the software, but the ownership. Three people, three instructions, nobody accountable.",
    takeaway: "Repeat contacts mean the ownership is broken, not the product.",
    lines: [
      { speaker: "Anya", side: "right", audio: "audio/cs-5-1.mp3", pos: { right: "20%", top: "6%" }, text: "This is the third time I've called about this. I've followed every instruction, from three different people." },
      { speaker: "Anya", side: "right", audio: "audio/cs-5-2.mp3", pos: { right: "20%", top: "6%" }, text: "Nobody's actually fixed it. They just keep passing me along." },
      { speaker: "Anya", side: "right", audio: "audio/cs-5-3.mp3", pos: { right: "20%", top: "6%" }, text: "I'm calling support again. Let's see if anyone owns this." },
    ],
  },
  {
    type: "decision",
    title: "Decision Point: Rebuilding Trust",
    emotion: "Tension → Insight",
    img: "images/cs-slide6.jpg",
    alt: "Ravi, Customer Success Manager, listening intently on a headset at his office desk",
    context: "A gated judgment call. The learner cannot continue until they identify the response that actually rebuilds trust — not merely the one that sounds most polite.",
    setup: "Anya says: \"This is the third time I've called about the same error, and nothing's fixed.\"",
    question: "Which response actually rebuilds trust?",
    options: [
      { key: "A", text: "\"I'll transfer you to a specialist who can help.\"" },
      { key: "B", text: "\"Let me send you our troubleshooting guide.\"" },
      { key: "C", text: "\"I'm personally taking ownership of this — you'll hear from me within 24 hours with a fix, not another transfer.\"" },
      { key: "D", text: "\"I'll mark this as urgent internally.\"" },
    ],
    correct: "C",
    correctFeedback: "Correct — and not because the others are wrong in isolation. A third repeat contact means self-serve and transfers have already failed her twice. What she needs now is ownership and a named person, not another handoff.",
    optionFeedback: {
      A: "A transfer is exactly what has already failed her — she's been passed to three different people. Handing her to a fourth confirms her fear that nobody here is actually responsible.",
      B: "She has already followed every instruction she was given. Sending a guide implies the problem is her execution, not the product. On a third call, that reads as blame, not help.",
      D: "The most tempting wrong answer, because it sounds like action. But \u2018internally\u2019 is invisible to her — no name, no timeline, no way to know anything happened. Urgency she cannot see is indistinguishable from being ignored.",
    },
  },
  {
    title: "Trust Restored",
    emotion: "Relief",
    img: "images/cs-slide8.jpg",
    alt: "Split screen: Anya on a video call and Ravi in his office, both engaged, as he reassures her",
    context: "Ravi's first appearance is the moment he ends Anya's crisis. Note what he does not promise — not to fix everything, but to own this, by name. That distinction is the whole role.",
    takeaway: "Ownership isn't promising to fix everything. It's being the one named person who stays with the problem.",
    lines: [
      { speaker: "Ravi", side: "right", audio: "audio/cs-7a-1.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "2%", top: "3%" }, pos: { right: "3%", top: "4%" }, text: "I've got your login sorted. Meera set you up well — I'm taking it from here, and I'm staying on this account personally." },
      { speaker: "Anya", side: "left", audio: "audio/cs-7a-2.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "2%", top: "3%" }, pos: { left: "3%", top: "4%" }, text: "One person, not a queue? That's the first time anyone's said that. Thank you, Ravi." },
    ],
  },
  {
    title: "Reading the Health Score",
    emotion: "Confidence",
    img: "images/cs-slide7.jpg",
    alt: "Ravi reviewing a dashboard showing a rising green usage graph and a health score of 91, marked healthy",
    context: "The core discipline of the role: a health score is a leading indicator. Ravi acts on good news, not just bad news — which is precisely what separates Customer Success from support.",
    takeaway: "A health score is a leading indicator. Act on it while things are still going well.",
    lines: [
      { speaker: "Ravi", side: "right", audio: "audio/cs-7-1.mp3", pos: { left: "5%", top: "6%" }, pos: { left: "8%", top: "5%" }, pos: { left: "30%", top: "30%" }, pos: { right: "6%", top: "12%" }, pos: { right: "4%", top: "6%" }, text: "Health score's at 91. Usage is steady, no open tickets, and she's adopted four of the five core features." },
      { speaker: "Ravi", side: "right", audio: "audio/cs-7-2.mp3", pos: { left: "5%", top: "6%" }, pos: { left: "8%", top: "5%" }, pos: { left: "30%", top: "30%" }, pos: { right: "6%", top: "12%" }, pos: { right: "4%", top: "6%" }, text: "Nothing's wrong. Which is exactly when most teams do nothing at all." },
      { speaker: "Ravi", side: "right", audio: "audio/cs-7-3.mp3", pos: { left: "5%", top: "6%" }, pos: { left: "8%", top: "5%" }, pos: { left: "30%", top: "30%" }, pos: { right: "6%", top: "12%" }, pos: { right: "4%", top: "6%" }, text: "I'll set up a check-in anyway — I'd rather hear how it's going while it's going well." },
    ],
  },
  {
    title: "The QBR",
    emotion: "Partnership",
    img: "images/cs-slide8.jpg",
    alt: "Split screen: Anya at home and Ravi in his office, both reviewing the same shared monthly review document on a video call",
    context: "A Quarterly Business Review done properly is a goals review, not a disguised upsell. Ravi solves her problem with a feature she already pays for — and Anya notices.",
    takeaway: "A QBR reviews the customer's goals — not the vendor's pipeline.",
    lines: [
      { speaker: "Ravi", side: "right", audio: "audio/cs-8-1.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "2%", top: "3%" }, pos: { right: "3%", top: "4%" }, text: "Last quarter you said your goal was to publish twice a week. Where did that actually land?" },
      { speaker: "Anya", side: "left", audio: "audio/cs-8-2.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "2%", top: "3%" }, pos: { left: "3%", top: "4%" }, text: "Closer to once, honestly. It's the editing — every video takes me hours longer than I plan for." },
      { speaker: "Ravi", side: "right", audio: "audio/cs-8-3.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "2%", top: "3%" }, pos: { right: "3%", top: "4%" }, text: "Then that's what we fix. You're redoing the same edits by hand every time. There's a preset library in your plan — set it once, reuse it on every video after. It's already included in what you pay for." },
      { speaker: "Anya", side: "left", audio: "audio/cs-8-4.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "2%", top: "3%" }, pos: { left: "3%", top: "4%" }, text: "You're… not trying to sell me anything right now, are you?" },
    ],
  },
  {
    title: "Something's Changed",
    emotion: "Concern",
    img: "images/cs-slide9.jpg",
    alt: "Ravi looking closely at a dashboard where the usage graph has begun dropping and the health score is falling",
    context: "Months later, the signal Ravi set himself up to catch actually fires. He notices the decline before Anya says a word — which is the entire point of watching the score.",
    takeaway: "The value of monitoring is catching the drop before the customer reports it — because often, they never will.",
    lines: [
      { speaker: "Ravi", side: "right", audio: "audio/cs-9a-1.mp3", pos: { left: "5%", top: "6%" }, pos: { left: "8%", top: "5%" }, pos: { left: "30%", top: "30%" }, pos: { right: "6%", top: "12%" }, pos: { right: "4%", top: "6%" }, text: "Her usage has been sliding for two months. Steady drop, week after week." },
      { speaker: "Ravi", side: "right", audio: "audio/cs-9a-2.mp3", pos: { left: "5%", top: "6%" }, pos: { left: "8%", top: "5%" }, pos: { left: "30%", top: "30%" }, pos: { right: "6%", top: "12%" }, pos: { right: "4%", top: "6%" }, text: "And not a single support ticket. No complaint, no email. Nothing." },
    ],
  },
  {
    type: "decision",
    title: "Decision Point: The Silent Decline",
    emotion: "Alertness",
    img: "images/cs-slide9.jpg",
    alt: "Ravi looking at a dashboard showing a steeply declining red usage graph, a health score of 48 marked AT RISK, and zero support tickets",
    context: "The second gated judgment call — and the most counterintuitive. A customer who has gone quiet has not necessarily gone happy.",
    takeaway: "Silence is not satisfaction. Falling usage with zero complaints is one of the strongest churn signals there is.",
    setup: "Anya's usage has dropped sharply over two months. She has filed zero support tickets and made zero complaints.",
    question: "What does this most likely mean?",
    options: [
      { key: "A", text: "She's happy — no complaints means no problems." },
      { key: "B", text: "She's busy. Usage will recover on its own." },
      { key: "C", text: "She's disengaging quietly, and is at real risk of not renewing." },
      { key: "D", text: "Wait for her next support ticket before acting." },
    ],
    correct: "C",
    correctFeedback: "Correct. Silence is not satisfaction. A customer who is struggling and still engaged complains. A customer who has quietly given up doesn't bother — they just stop using the product and let the contract lapse. Falling usage with zero tickets is one of the strongest churn signals there is, and it arrives weeks before anyone says the word \u2018cancel.\u2019",
    optionFeedback: {
      A: "This is the exact instinct the role has to unlearn. Absence of complaint is not evidence of health — complaints require effort, and effort requires still caring. The dangerous customer is the one who has stopped bothering to tell you anything.",
      B: "Maybe. But 'it'll fix itself' is a hope, not a plan — and a two-month decline is already a trend, not a blip. Waiting to find out costs you the one thing you can't get back: time to intervene.",
      D: "A ticket is the signal that comes too late. She has filed zero — and a disengaging customer never will. If you wait for a complaint from someone who has stopped caring enough to complain, you'll hear from her exactly once: at cancellation.",
    },
  },
  {
    title: "Ravi Reconnects",
    emotion: "Resolution",
    img: "images/cs-slide8.jpg",
    alt: "Split screen: Ravi on a call with Anya, who explains what changed on her side",
    context: "Ravi reaches out before Anya asks. The cause isn't a broken product — her team grew and the new members were never onboarded. A real churn risk, fixed by a real intervention.",
    takeaway: "When usage drops, the fix is usually adoption, not the product. Find out what changed on the customer's side.",
    lines: [
      { speaker: "Ravi", side: "right", audio: "audio/cs-9b-1.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "2%", top: "3%" }, pos: { right: "3%", top: "4%" }, text: "I noticed things went quiet, so I wanted to check in before assuming anything. What changed on your end?" },
      { speaker: "Anya", side: "left", audio: "audio/cs-9b-2.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "2%", top: "3%" }, pos: { left: "3%", top: "4%" }, text: "We added three people to the team. Honestly, none of them knew how to use half the features, so they just… stopped." },
      { speaker: "Ravi", side: "right", audio: "audio/cs-9b-3.mp3", pos: { right: "3%", top: "4%" }, pos: { right: "2%", top: "3%" }, pos: { right: "3%", top: "4%" }, text: "That's on us to fix, not you. Let me run an onboarding session for your new folks this week." },
      { speaker: "Anya", side: "left", audio: "audio/cs-9b-4.mp3", pos: { left: "3%", top: "4%" }, pos: { left: "2%", top: "3%" }, pos: { left: "3%", top: "4%" }, text: "You caught that before I even thought to ask. That's exactly why we're staying." },
    ],
  },
  {
    title: "The Customer Succeeds",
    emotion: "Pride",
    img: "images/cs-slide10.jpg",
    alt: "Anya presenting her finished creative work confidently on a large screen to three engaged, smiling colleagues in a bright meeting room",
    context: "The outcome Customer Success exists to produce. Not a renewal, not a happy survey — a customer who achieved the thing they came to do, and renewed because of it.",
    takeaway: "The real measure of Customer Success is whether the customer achieved their goal. The renewal follows from that — not the other way around.",
    lines: [
      { speaker: "Anya", side: "left", audio: "audio/cs-10-1.mp3", pos: { left: "3%", top: "5%" }, pos: { left: "3%", top: "5%" }, text: "This is the campaign — start to finish, and we shipped it two weeks early." },
      { speaker: "Anya", side: "left", audio: "audio/cs-10-2.mp3", pos: { left: "3%", top: "5%" }, pos: { left: "3%", top: "5%" }, text: "A year ago, I couldn't even log in. This year, I renewed without even thinking about it." },
    ],
  },
  {
    type: "timeline",
    title: "The Full Journey",
    emotion: "Clarity",
    context: "The complete arc in one view — and the shape of the health score across it. The dip is the breakdown; the recovery is everything Customer Success did next.",
    takeaway: "Customer Success is reading the signals before anyone complains, owning problems by name, measuring the customer's goals, and earning the renewal long before it's due.",
  },
];

const csShowEl = document.getElementById("csShow");
if (csShowEl) {
  const dsceneEl = document.getElementById("dscene");
  const dsceneImg = document.getElementById("dsceneImg");
  const dsceneProgress = document.getElementById("dsceneProgress");
  const dsceneHint = document.getElementById("dsceneHint");
  const dsceneDots = document.getElementById("dsceneDots");
  const dsceneReplay = document.getElementById("dsceneReplay");
  const csSlideProgress = document.getElementById("csSlideProgress");
  const csSlideTitle = document.getElementById("csSlideTitle");
  const csSlideEmotion = document.getElementById("csSlideEmotion");
  const csSlideContext = document.getElementById("csSlideContext");
  const csSlideInfo = document.getElementById("csSlideInfo");
  const csPrev = document.getElementById("csPrev");
  const csNext = document.getElementById("csNext");
  const csDots = document.getElementById("csDots");
  const csExpand = document.getElementById("csExpand");

  // Bubble anchor positions, tuned per side. Audio is optional: if a clip is not
  // yet recorded, the line still reveals silently rather than breaking the flow.
  const bubblePos = {
    left: { left: "5%", top: "8%" },
    right: { right: "5%", top: "5%" },
  };

  let sceneIndex = 0;
  let lineIndex = -1;
  let bubble = null;
  let currentAudio = null;
  const decisionPassed = {};

  function isGatedBefore(target) {
    // A learner may not jump past a decision scene they have not yet solved.
    for (let i = 0; i < target; i++) {
      if (csScenes[i].type === "decision" && !decisionPassed[i]) return true;
    }
    return false;
  }

  function stopAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  }

  function playLineAudio(src) {
    stopAudio();
    if (!src) return;
    const a = new Audio(src);
    currentAudio = a;
    // Audio may legitimately not exist yet (still being recorded) — fail silently
    // so the visual dialogue flow is never blocked by a missing file.
    a.play().catch(() => {});
  }

  function buildDecision(scene) {
    dsceneEl.classList.add("decision-mode");

    const panel = document.createElement("div");
    panel.className = "dpanel";

    const setup = document.createElement("p");
    setup.className = "dpanel-setup";
    setup.textContent = scene.setup;
    panel.appendChild(setup);

    const q = document.createElement("h4");
    q.className = "dpanel-q";
    q.textContent = scene.question;
    panel.appendChild(q);

    const opts = document.createElement("div");
    opts.className = "dpanel-opts";
    panel.appendChild(opts);

    const fb = document.createElement("div");
    fb.className = "dpanel-fb";
    panel.appendChild(fb);

    scene.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "dopt";
      btn.innerHTML = `<span class="dopt-key">${opt.key}</span><span>${opt.text}</span>`;
      btn.onclick = (e) => {
        e.stopPropagation();
        if (decisionPassed[sceneIndex]) return;

        const isRight = opt.key === scene.correct;
        opts.querySelectorAll(".dopt").forEach((b) => b.classList.remove("wrong"));

        if (isRight) {
          btn.classList.add("right");
          opts.querySelectorAll(".dopt").forEach((b) => (b.disabled = true));
          fb.className = "dpanel-fb ok";
          fb.textContent = "✓ " + scene.correctFeedback;
          decisionPassed[sceneIndex] = true;
          updateNav();
        } else {
          btn.classList.add("wrong");
          fb.className = "dpanel-fb no";
          const perOpt = scene.optionFeedback && scene.optionFeedback[opt.key];
          fb.textContent = perOpt || scene.incorrectFeedback;
        }
      };
      opts.appendChild(btn);
    });

    dsceneEl.appendChild(panel);

    dsceneProgress.textContent = decisionPassed[sceneIndex]
      ? "Decision complete"
      : "Decision required";
    dsceneHint.style.display = "none";
  }

  function buildLineDots() {
    const scene = csScenes[sceneIndex];
    dsceneDots.innerHTML = "";
    if (scene.type === "decision") return;
    scene.lines.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "slide-dot" + (i <= lineIndex ? " active" : "");
      dsceneDots.appendChild(dot);
    });
  }

  function buildSceneDots() {
    csDots.innerHTML = "";
    csScenes.forEach((_, i) => {
      const dot = document.createElement("button");
      const locked = isGatedBefore(i);
      dot.className =
        "slide-dot" + (i === sceneIndex ? " active" : "") + (locked ? " locked" : "");
      dot.setAttribute("aria-label", `Go to scene ${i + 1}`);
      dot.onclick = (e) => {
        e.stopPropagation();
        if (isGatedBefore(i)) return;
        sceneIndex = i;
        renderScene();
      };
      csDots.appendChild(dot);
    });
  }

  function updateNav() {
    const scene = csScenes[sceneIndex];
    const blocked = scene.type === "decision" && !decisionPassed[sceneIndex];
    csNext.disabled = blocked;
    csNext.textContent = blocked
      ? "Answer to continue"
      : sceneIndex === csScenes.length - 1
      ? "Restart ↺"
      : "Next →";
    csPrev.disabled = sceneIndex === 0;
    buildSceneDots();
    if (scene.type === "decision") {
      dsceneProgress.textContent = decisionPassed[sceneIndex]
        ? "Decision complete"
        : "Decision required";
    }
  }

  function showLine(i) {
    const scene = csScenes[sceneIndex];
    const line = scene.lines[i];
    if (bubble) bubble.remove();

    bubble = document.createElement("div");
    bubble.className = `dbubble ${line.side}`;
    // A line may carry its own `pos` override; otherwise use the side default.
    bubble.style.cssText = "";
    const pos = line.pos || bubblePos[line.side];
    Object.assign(bubble.style, { left: "", right: "", top: "", bottom: "" }, pos);
    bubble.setAttribute("role", "status");
    bubble.innerHTML =
      `<div class="dbubble-name">${line.speaker}</div>` +
      `<p class="dbubble-text">${line.text}</p>`;
    dsceneEl.appendChild(bubble);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => bubble.classList.add("visible"))
    );

    playLineAudio(line.audio);

    dsceneProgress.textContent = `Line ${i + 1} of ${scene.lines.length}`;
    buildLineDots();

    if (i === scene.lines.length - 1) {
      dsceneHint.textContent =
        sceneIndex < csScenes.length - 1
          ? "Scene complete — tap Next to continue →"
          : "Scene complete — tap Replay to hear it again";
      if (scene.takeaway) showTakeaway(scene.takeaway);
    } else {
      dsceneHint.textContent = "Tap the scene to continue →";
      hideTakeaway();
    }
  }

  // ----- Takeaway strip (learner-facing lesson, shown after final line) -----
  function showTakeaway(text) {
    if (!text) return;
    let strip = document.getElementById("csTakeaway");
    if (!strip) {
      strip = document.createElement("div");
      strip.id = "csTakeaway";
      strip.className = "cs-takeaway";
      csSlideInfo.appendChild(strip);
    }
    strip.innerHTML = `<span class="cs-takeaway-label">Takeaway</span><span>${text}</span>`;
    strip.classList.remove("visible");
    requestAnimationFrame(() =>
      requestAnimationFrame(() => strip.classList.add("visible"))
    );
  }
  function hideTakeaway() {
    const strip = document.getElementById("csTakeaway");
    if (strip) strip.classList.remove("visible");
  }

  // ----- Timeline scene (hand-coded, no image) -----
  const TIMELINE_MILESTONES = [
    { label: "Research", score: 20 },
    { label: "Purchase", score: 78 },
    { label: "Breakdown", score: 22 },
    { label: "Ownership", score: 58 },
    { label: "Health Check", score: 90 },
    { label: "Renewal", score: 96 },
  ];
  let timelineRevealed = 0;

  function buildTimeline() {
    dsceneEl.classList.add("timeline-mode");
    timelineRevealed = 1;
    const wrap = document.createElement("div");
    wrap.className = "dtimeline";
    wrap.innerHTML = `
      <div class="dtl-title">The customer's health score across the journey</div>
      <div class="dtl-chart">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="dtl-svg">
          <polyline points="" class="dtl-line"/>
          <g class="dtl-dots"></g>
        </svg>
        <div class="dtl-labels"></div>
      </div>
      <div class="dtl-hint">Tap to reveal each stage →</div>`;
    dsceneEl.appendChild(wrap);
    renderTimeline();
  }

  function renderTimeline() {
    const wrap = dsceneEl.querySelector(".dtimeline");
    if (!wrap) return;
    const shown = TIMELINE_MILESTONES.slice(0, timelineRevealed);
    const n = TIMELINE_MILESTONES.length;

    const pts = shown
      .map((m, i) => `${(i / (n - 1)) * 100},${100 - m.score}`)
      .join(" ");
    wrap.querySelector(".dtl-line").setAttribute("points", pts);

    wrap.querySelector(".dtl-dots").innerHTML = shown
      .map((m, i) => `<circle cx="${(i / (n - 1)) * 100}" cy="${100 - m.score}" r="2.6" class="dtl-dot"/>`)
      .join("");

    wrap.querySelector(".dtl-labels").innerHTML = shown
      .map((m, i) => {
        const x = (i / (n - 1)) * 100;
        const y = 100 - m.score;
        const align = i === 0 ? "left:0;transform:none;text-align:left"
          : i === n - 1 ? "right:0;left:auto;transform:none;text-align:right"
          : `left:${x}%;transform:translateX(-50%)`;
        return `<div class="dtl-label" style="top:calc(${y}% + 14px);${align}">${m.label}</div>`;
      })
      .join("");

    const hint = wrap.querySelector(".dtl-hint");
    if (timelineRevealed >= n) {
      hint.className = "dtl-takeaway";
      hint.innerHTML = `<span class="dtl-takeaway-label">Takeaway</span><span>${csScenes[sceneIndex].takeaway}</span>`;
    } else {
      hint.className = "dtl-hint";
      hint.textContent = "Tap to reveal each stage →";
    }
  }

  function resetScene() {
    stopAudio();
    lineIndex = -1;
    if (bubble) {
      bubble.remove();
      bubble = null;
    }
    dsceneEl.querySelectorAll(".dpanel").forEach((p) => p.remove());
    dsceneEl.classList.remove("decision-mode");
    dsceneHint.style.display = "";
    dsceneProgress.textContent = "Tap to begin";
    dsceneHint.textContent = "Tap the scene to continue →";
    buildLineDots();
  }

  function renderScene() {
    const scene = csScenes[sceneIndex];
    stopAudio();
    lineIndex = -1;
    if (bubble) {
      bubble.remove();
      bubble = null;
    }
    dsceneEl.querySelectorAll(".dpanel, .dtimeline").forEach((p) => p.remove());
    dsceneEl.classList.remove("decision-mode", "timeline-mode");
    csShowEl.classList.toggle("hide-takeaway", scene.type === "timeline");
    dsceneHint.style.display = "";
    dsceneHint.textContent = "Tap the scene to continue →";
    hideTakeaway();

    csSlideProgress.textContent = `Scene ${sceneIndex + 1} of ${csScenes.length}`;
    csSlideTitle.textContent = scene.title;
    csSlideEmotion.textContent = scene.emotion;
    csSlideContext.textContent = scene.context;

    dsceneReplay.style.display =
      scene.type === "decision" || scene.type === "timeline" ? "none" : "";

    if (scene.type === "decision") {
      dsceneImg.src = scene.img;
      dsceneImg.alt = scene.alt;
      buildDecision(scene);
      dsceneDots.innerHTML = "";
    } else if (scene.type === "timeline") {
      dsceneImg.removeAttribute("src");
      dsceneImg.alt = "";
      buildTimeline();
      dsceneDots.innerHTML = "";
      dsceneHint.style.display = "none";
      dsceneProgress.textContent = "Summary";
    } else {
      dsceneImg.src = scene.img;
      dsceneImg.alt = scene.alt;
      dsceneProgress.textContent = "Tap to begin";
      buildLineDots();
    }

    updateNav();
  }

  dsceneEl.addEventListener("click", () => {
    const scene = csScenes[sceneIndex];
    if (scene.type === "decision") return;
    if (scene.type === "timeline") {
      if (timelineRevealed < TIMELINE_MILESTONES.length) {
        timelineRevealed++;
        renderTimeline();
      }
      return;
    }
    if (lineIndex >= scene.lines.length - 1) return;
    lineIndex++;
    showLine(lineIndex);
  });

  dsceneReplay.addEventListener("click", (e) => {
    e.stopPropagation();
    resetScene();
  });

  csPrev.addEventListener("click", () => {
    if (sceneIndex > 0) {
      sceneIndex--;
      renderScene();
    }
  });

  csNext.addEventListener("click", () => {
    const scene = csScenes[sceneIndex];
    if (scene.type === "decision" && !decisionPassed[sceneIndex]) return;
    sceneIndex = sceneIndex === csScenes.length - 1 ? 0 : sceneIndex + 1;
    renderScene();
  });

  // Immersive mode — same CSS-only approach as Big Bang (no native Fullscreen API),
  // re-parented to body so no ancestor transform can break position:fixed.
  const csPlaceholder = document.createComment("cs-show-anchor");
  csShowEl.after(csPlaceholder);
  const setCsImmersive = (on) => {
    if (on) {
      document.body.appendChild(csShowEl);
    } else if (csPlaceholder.parentNode) {
      csPlaceholder.parentNode.insertBefore(csShowEl, csPlaceholder);
    }
    csShowEl.classList.toggle("fullscreen-mode", on);
    csExpand.textContent = on ? "⤢" : "⛶";
    csExpand.setAttribute("data-tip", on ? "Exit fullscreen" : "Fullscreen");
    document.body.style.overflow = on ? "hidden" : "";
  };
  csExpand.addEventListener("click", (e) => {
    e.stopPropagation();
    setCsImmersive(!csShowEl.classList.contains("fullscreen-mode"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && csShowEl.classList.contains("fullscreen-mode")) {
      setCsImmersive(false);
    }
  });

  renderScene();
}
