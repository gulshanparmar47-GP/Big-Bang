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
