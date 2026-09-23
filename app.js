const tests = {
  gad7: {
    title: "غربالگری اضطراب",
    period: "در دو هفته گذشته",
    items: [
      "احساس عصبی بودن، اضطراب یا بی‌قراری داشته‌اید؟",
      "نتوانسته‌اید جلوی نگرانی یا اضطراب خود را بگیرید؟",
      "درباره موضوعات مختلف بیش از حد نگران بوده‌اید؟",
      "در آرام کردن خود یا کنار آمدن با نگرانی مشکل داشته‌اید؟",
      "آن‌قدر بی‌قرار بوده‌اید که نشستن در یک جا برایتان سخت بوده باشد؟",
      "به‌راحتی ناراحت یا تحریک‌پذیر شده‌اید؟",
      "احساس کرده‌اید اتفاق بدی ممکن است بیفتد؟"
    ],
    scale: ["اصلاً", "چند روز", "بیش از نیمی از روزها", "تقریباً هر روز"],
    scoreMax: 21,
    scoreLabel: "از ۲۱",
    scoreText(score) {
      if (score <= 4) return "حداقل";
      if (score <= 9) return "خفیف";
      if (score <= 14) return "متوسط";
      return "شدید";
    },
    resultText(score) {
      const level = this.scoreText(score);
      const extra = score >= 10
        ? "امتیاز ۱۰ یا بیشتر در پژوهش اصلی GAD-7 به‌عنوان آستانه‌ای برای شناسایی موارد محتمل اضطراب تعمیم‌یافته پیشنهاد شده است؛ این به‌تنهایی تشخیص محسوب نمی‌شود."
        : "این نمره در محدوده پایین‌تر مقیاس قرار می‌گیرد و به‌تنهایی وجود یا نبود یک اختلال اضطرابی را مشخص نمی‌کند.";
      return `شدت علائم در این غربالگری: ${level}. ${extra}`;
    }
  },

  who5: {
    title: "بهزیستی روانی",
    period: "در دو هفته گذشته",
    items: [
      "احساس نشاط و روحیه خوب داشته‌ام.",
      "احساس آرامش و آسودگی داشته‌ام.",
      "احساس سرزندگی و فعالیت داشته‌ام.",
      "صبح که بیدار شده‌ام احساس سرحال بودن داشته‌ام.",
      "زندگی روزمره‌ام سرشار از چیزهایی بوده که برایم جالب است."
    ],
    scale: ["در هیچ زمانی", "بعضی اوقات", "کمتر از نصف زمان", "بیشتر از نصف زمان", "بیشتر اوقات", "تمام مدت"],
    scoreMax: 100,
    scoreLabel: "از ۱۰۰",
    scoreText(score) {
      if (score < 50) return "پایین";
      if (score < 75) return "متوسط";
      return "خوب";
    },
    resultText(score) {
      const level = this.scoreText(score);
      const extra = score < 50
        ? "نمره کمتر از ۵۰ در راهنمای WHO-5 به‌عنوان آستانه‌ای پیشنهادی برای بهزیستی پایین و نیاز احتمالی به ارزیابی بیشتر مطرح شده است."
        : "این نمره نشان‌دهنده وضعیت بهتری از بهزیستی در این مقیاس است؛ با این حال، یک آزمون کوتاه به‌تنهایی وضعیت روان‌شناختی را تشخیص نمی‌دهد.";
      return `سطح بهزیستی در این غربالگری: ${level}. ${extra}`;
    }
  },

  pss10: {
    title: "فشار روانی",
    items: [],
    scale: []
  }
};

let currentTest = null;
let currentIndex = 0;
let answers = [];

function startTest(id) {
  if (id === "pss10") {
    alert("این آزمون هنوز فعال نشده است. ابتدا نسخه فارسی استاندارد و شرایط استفاده آن را بررسی می‌کنیم.");
    return;
  }

  currentTest = tests[id];
  currentIndex = 0;
  answers = [];

  document.body.innerHTML = `
    <main class="runner">
      <div class="runner-card">
        <div class="runner-head">
          <button class="close-btn" aria-label="بازگشت" onclick="location.reload()">×</button>
          <span id="progress"></span>
        </div>
        <div class="bar" aria-hidden="true"><i id="bar"></i></div>
        <div id="question"></div>
      </div>
    </main>
  `;

  renderQuestion();
}

function renderQuestion() {
  const t = currentTest;
  const total = t.items.length;
  const progress = document.getElementById("progress");
  const bar = document.getElementById("bar");
  const question = document.getElementById("question");

  progress.textContent = `سؤال ${currentIndex + 1} از ${total}`;
  bar.style.width = `${((currentIndex + 1) / total) * 100}%`;

  question.innerHTML = `
    <span class="eyebrow">${t.title}</span>
    <div class="period">${t.period}</div>
    <h1>${t.items[currentIndex]}</h1>
    <div class="answers">
      ${t.scale.map((label, index) => `
        <button type="button" onclick="answerQuestion(${index})">
          <span>${label}</span>
          <b>${index}</b>
        </button>
      `).join("")}
    </div>
    ${currentIndex > 0 ? '<button class="back-btn" type="button" onclick="previousQuestion()">سؤال قبلی</button>' : ""}
  `;
}

function answerQuestion(value) {
  answers[currentIndex] = value;
  if (currentIndex < currentTest.items.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function showResult() {
  const t = currentTest;
  const rawScore = answers.reduce((sum, value) => sum + value, 0);
  const score = t === tests.who5 ? rawScore * 4 : rawScore;
  const max = t.scoreMax;
  const level = t.scoreText(score);
  const report = `گزارش ${t.title}
نمره: ${score} ${t.scoreLabel}
سطح: ${level}
${t.resultText(score)}

این نتیجه یک غربالگری/خودارزیابی است و تشخیص پزشکی یا روان‌شناختی نیست. برای تفسیر بالینی یا نگرانی درباره علائم، با متخصص سلامت روان یا پزشک مشورت کنید.`;

  document.querySelector(".runner-card").innerHTML = `
    <span class="eyebrow">نتیجه ارزیابی</span>
    <h1>گزارش شما آماده است.</h1>
    <div class="result-score">
      ${score}<small> ${t.scoreLabel}</small>
    </div>
    <div class="result-level">${level}</div>
    <p>${t.resultText(score)}</p>
    <div class="result-note">این نتیجه تشخیص نیست و باید در کنار شرایط فردی و ارزیابی حرفه‌ای تفسیر شود.</div>
    <div class="result-actions">
      <button class="primary-btn" type="button" onclick="copyReport(${JSON.stringify(report)})">کپی گزارش</button>
      <button class="start-btn" type="button" onclick="location.reload()">بازگشت به آزمون‌ها</button>
    </div>
  `;
}

async function copyReport(report) {
  try {
    await navigator.clipboard.writeText(report);
    alert("گزارش با موفقیت کپی شد.");
  } catch {
    alert("کپی خودکار در این مرورگر در دسترس نیست. لطفاً گزارش را از صفحه انتخاب و کپی کنید.");
  }
}
