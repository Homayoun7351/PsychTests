window.PsychTests = {
  gad7: {
    title: "غربالگری اضطراب", period: "در دو هفته گذشته",
    items: ["احساس عصبی بودن، اضطراب یا بی‌قراری داشته‌اید؟","نتوانسته‌اید جلوی نگرانی یا اضطراب خود را بگیرید؟","درباره موضوعات مختلف بیش از حد نگران بوده‌اید؟","در آرام کردن خود یا کنار آمدن با نگرانی مشکل داشته‌اید؟","آن‌قدر بی‌قرار بوده‌اید که نشستن در یک جا برایتان سخت بوده باشد؟","به‌راحتی ناراحت یا تحریک‌پذیر شده‌اید؟","احساس کرده‌اید اتفاق بدی ممکن است بیفتد؟"],
    scale:["اصلاً","چند روز","بیش از نیمی از روزها","تقریباً هر روز"], scoreMax:21, scoreLabel:"از ۲۱",
    scoreText(s){return s<=4?"حداقل":s<=9?"خفیف":s<=14?"متوسط":"شدید"},
    resultText(s){return s>=10?"امتیاز ۱۰ یا بیشتر در GAD-7 آستانه‌ای برای بررسی بیشتر علائم اضطراب است؛ این نتیجه به‌تنهایی تشخیص نیست.":"این نمره در محدوده پایین‌تر GAD-7 قرار دارد و به‌تنهایی وجود یا نبود اختلال اضطرابی را مشخص نمی‌کند."}
  },
  phq9: {
    title:"غربالگری افسردگی", period:"در دو هفته گذشته",
    items:["کم‌علاقه یا بی‌میل بودن به انجام کارها","احساس غمگینی، افسردگی یا ناامیدی","مشکل در به خواب رفتن، خواب ماندن یا خواب زیاد","احساس خستگی یا نداشتن انرژی","کم‌اشتهایی یا پرخوری","احساس بد نسبت به خودتان؛ یا اینکه فردی ناموفق هستید یا خودتان یا خانواده‌تان را ناامید کرده‌اید","مشکل در تمرکز روی چیزهایی مانند خواندن روزنامه یا تماشای تلویزیون","کند شدن حرکت یا صحبت کردن به حدی که دیگران متوجه شوند؛ یا برعکس، آن‌قدر بی‌قرار یا ناآرام بوده‌اید که بیشتر از معمول حرکت می‌کرده‌اید","فکر اینکه بهتر است مرده باشید یا به خودتان به نحوی آسیب بزنید"],
    scale:["اصلاً","چند روز","بیش از نیمی از روزها","تقریباً هر روز"], scoreMax:27, scoreLabel:"از ۲۷",
    scoreText(s){return s<=4?"حداقل":s<=9?"خفیف":s<=14?"متوسط":s<=19?"نسبتاً شدید":"شدید"},
    resultText(s){return s>=10?"امتیاز ۱۰ یا بیشتر نشان می‌دهد بررسی حرفه‌ای علائم می‌تواند مناسب باشد؛ PHQ-9 ابزار غربالگری است و تشخیص قطعی نیست.":"این نمره در محدوده پایین‌تر PHQ-9 قرار دارد و به‌تنهایی تشخیص افسردگی نیست."}
  },
  pss10: {
    title:"فشار روانی ادراک‌شده", period:"در ماه گذشته",
    items:["در ماه گذشته، چند وقت یک‌بار به‌خاطر اتفاقی غیرمنتظره ناراحت شده‌اید؟","در ماه گذشته، چند وقت یک‌بار احساس کرده‌اید نمی‌توانید امور مهم زندگی‌تان را کنترل کنید؟","در ماه گذشته، چند وقت یک‌بار احساس عصبانیت و فشار روانی داشته‌اید؟","در ماه گذشته، چند وقت یک‌بار با موفقیت با دردسرهای آزاردهنده زندگی کنار آمده‌اید؟","در ماه گذشته، چند وقت یک‌بار احساس کرده‌اید به‌خوبی از پس تغییرات مهم زندگی برآمده‌اید؟","در ماه گذشته، چند وقت یک‌بار به توانایی خود برای رسیدگی به مسائل شخصی اطمینان داشته‌اید؟","در ماه گذشته، چند وقت یک‌بار احساس کرده‌اید اوضاع مطابق خواسته شما پیش می‌رود؟","در ماه گذشته، چند وقت یک‌بار احساس کرده‌اید نمی‌توانید از عهده همه کارهایی که باید انجام دهید برآیید؟","در ماه گذشته، چند وقت یک‌بار توانسته‌اید ناراحتی‌های زندگی را کنترل کنید؟","در ماه گذشته، چند وقت یک‌بار احساس کرده‌اید مشکلات آن‌قدر زیاد شده‌اند که نمی‌توانید بر آن‌ها غلبه کنید؟"],
    scale:["هرگز","به‌ندرت","گاهی","اغلب","بسیار اغلب"], scoreMax:40, scoreLabel:"از ۴۰", reverse:[3,4,6,7],
    scoreText(s){return s<14?"پایین‌تر":s<27?"متوسط":"بالاتر"},
    resultText(s){return "نمره بالاتر نشان‌دهنده فشار روانی ادراک‌شده بیشتر در ماه گذشته است. PSS-10 برای سنجش ادراک فشار است و تشخیص اختلال روانی نیست."}
  },
  who5: {
    title:"بهزیستی روانی", period:"در دو هفته گذشته",
    items:["احساس نشاط و روحیه خوب داشته‌ام.","احساس آرامش و آسودگی داشته‌ام.","احساس سرزندگی و فعالیت داشته‌ام.","صبح که بیدار شده‌ام احساس سرحال بودن داشته‌ام.","زندگی روزمره‌ام سرشار از چیزهایی بوده که برایم جالب است."],
    scale:["در هیچ زمانی","بعضی اوقات","کمتر از نصف زمان","بیشتر از نصف زمان","بیشتر اوقات","تمام مدت"], scoreMax:100, scoreLabel:"از ۱۰۰",
    transform(raw){return raw*4}, scoreText(s){return s<50?"پایین":s<75?"متوسط":"خوب"},
    resultText(s){return s<50?"نمره کمتر از ۵۰ در WHO-5 به‌عنوان آستانه پیشنهادی برای بهزیستی پایین و ارزیابی بیشتر مطرح شده است.":"این نمره نشان‌دهنده سطح بهتر بهزیستی در این مقیاس است؛ به‌تنهایی تشخیص بالینی نیست."}
  },
  whoqol: {
    title:"کیفیت زندگی WHOQOL-BREF", period:"در دو هفته گذشته",
    items:[
      "کیفیت زندگی خود را چگونه ارزیابی می‌کنید؟","از سلامت خود چقدر راضی هستید؟","تا چه اندازه احساس می‌کنید درد مانع انجام کارهایی می‌شود که لازم است انجام دهید؟","تا چه اندازه برای انجام کارهای روزمره به درمان پزشکی نیاز دارید؟","تا چه اندازه از زندگی لذت می‌برید؟","تا چه اندازه احساس می‌کنید زندگی‌تان معنا دارد؟","تا چه اندازه می‌توانید تمرکز کنید؟","در زندگی روزمره تا چه اندازه احساس امنیت می‌کنید؟","محیط فیزیکی اطراف خود را چقدر سالم می‌دانید؟","آیا برای زندگی روزمره انرژی کافی دارید؟","آیا می‌توانید ظاهر بدنی خود را بپذیرید؟","آیا پول کافی برای تأمین نیازهای خود دارید؟","دسترسی شما به اطلاعات مورد نیاز برای زندگی روزمره چقدر آسان است؟","چقدر فرصت برای فعالیت‌های تفریحی دارید؟","چقدر توانایی جابه‌جا شدن و حرکت کردن دارید؟","از خواب خود چقدر راضی هستید؟","از توانایی خود برای انجام فعالیت‌های روزمره چقدر راضی هستید؟","از توانایی خود برای کار کردن چقدر راضی هستید؟","از خودتان چقدر راضی هستید؟","از روابط شخصی خود چقدر راضی هستید؟","از زندگی جنسی خود چقدر راضی هستید؟","از حمایت دوستان خود چقدر راضی هستید؟","از شرایط محل زندگی خود چقدر راضی هستید؟","از دسترسی به خدمات درمانی چقدر راضی هستید؟","از امکانات حمل‌ونقل خود چقدر راضی هستید؟","در دو هفته گذشته، چند وقت یک‌بار احساسات منفی مانند غمگینی، ناامیدی، اضطراب یا افسردگی داشته‌اید؟"
    ],
    scale:["خیلی ضعیف / اصلاً","ضعیف / کمی","متوسط","خوب / زیاد","خیلی خوب / کاملاً"],
    scoreMax:100, scoreLabel:"چهار حوزه",
    reverse:[2,3,25],
    scoreText(){return "گزارش حوزه‌ها"},
    resultText(){return "WHOQOL-BREF کیفیت زندگی را در چهار حوزه جسمانی، روان‌شناختی، روابط اجتماعی و محیطی بررسی می‌کند. این گزارش تشخیص پزشکی نیست."}
  }
};

const tests = window.PsychTests;
let currentTest=null,currentIndex=0,answers=[];

function startTest(id){
  currentTest=tests[id]; currentIndex=0; answers=[];
  document.body.innerHTML='<main class="runner"><div class="runner-card"><div class="runner-head"><button class="close-btn" aria-label="بازگشت" onclick="location.reload()">×</button><span id="progress"></span></div><div class="bar"><i id="bar"></i></div><div id="question"></div></div></main>';
  renderQuestion();
}
function renderQuestion(){
  const t=currentTest,total=t.items.length;
  document.getElementById("progress").textContent=`سؤال ${currentIndex+1} از ${total}`;
  document.getElementById("bar").style.width=`${((currentIndex+1)/total)*100}%`;
  document.getElementById("question").innerHTML=`<span class="eyebrow">${t.title}</span><div class="period">${t.period}</div><h1>${t.items[currentIndex]}</h1><div class="answers">${t.scale.map((x,i)=><button type="button" onclick="answerQuestion(${i})"><span>${x}</span><b>${i}</b></button>).join("")}</div>${currentIndex>0?'<button class="back-btn" type="button" onclick="previousQuestion()">سؤال قبلی</button>':""}`;
}
function answerQuestion(v){answers[currentIndex]=v;if(currentIndex<currentTest.items.length-1){currentIndex++;renderQuestion()}else showResult()}
function previousQuestion(){if(currentIndex>0){currentIndex--;renderQuestion()}}

function showResult(){
  const t=currentTest;
  if(t===tests.whoqol){showWhoqolResult();return}
  let raw=answers.reduce((a,b)=>a+b,0);
  if(t.reverse) t.reverse.forEach(i=>{raw+=4-2*answers[i]});
  const score=t.transform?t.transform(raw):raw;
  const level=t.scoreText(score);
  const urgent=t===tests.phq9 && answers[8]>0;
  const report=`گزارش ${t.title}\nنمره: ${score} ${t.scoreLabel}\nسطح: ${level}\n${t.resultText(score)}${urgent?"\n\nهشدار: پاسخ شما به سؤال مربوط به آسیب به خود نشان می‌دهد که این موضوع نیازمند توجه فوری است. اگر در معرض خطر فوری هستید، همین حالا با خدمات اورژانسی محل زندگی خود یا یک فرد قابل اعتماد تماس بگیرید.":""}\n\nاین نتیجه غربالگری است و جایگزین تشخیص یا ارزیابی حرفه‌ای نیست.`;
  document.querySelector(".runner-card").innerHTML=`<span class="eyebrow">نتیجه ارزیابی</span><h1>گزارش شما آماده است.</h1><div class="result-score">${score}<small> ${t.scoreLabel}</small></div><div class="result-level">${level}</div><p>${t.resultText(score)}</p>${urgent?'<div class="result-note urgent">پاسخ سؤال ۹ نیازمند توجه فوری است. اگر خطر فوری وجود دارد، با خدمات اورژانسی محل زندگی خود یا یک فرد قابل اعتماد تماس بگیرید.</div>':""}<div class="result-note">این نتیجه تشخیص نیست و باید در کنار شرایط فردی و ارزیابی حرفه‌ای تفسیر شود.</div><div class="result-actions"><button class="primary-btn" onclick="copyReport(${JSON.stringify(report)})">کپی گزارش</button><button class="start-btn" onclick="location.reload()">بازگشت به آزمون‌ها</button></div>`;
}
function showWhoqolResult(){
  const vals=answers.map((v,i)=>[2,3,25].includes(i)?6-v:v);
  const domains={جسمانی:[2,3,9,14,15,16,17],روان‌شناختی:[4,5,6,10,18,25],"روابط اجتماعی":[19,20,21],"محیطی":[7,8,11,12,13,22,23,24]};
  const scores=Object.entries(domains).map(([name,idx])=>{const avg=idx.reduce((s,i)=>s+vals[i],0)/idx.length;return {name,score:(avg*4).toFixed(1)}}); 
  const report=`گزارش ${currentTest.title}\n${scores.map(x=>x.name+": "+x.score+" از ۲۰").join("\n")}\n\nاین نتیجه برای توصیف حوزه‌های کیفیت زندگی است و تشخیص پزشکی نیست.`;
  document.querySelector(".runner-card").innerHTML=`<span class="eyebrow">نتیجه ارزیابی</span><h1>گزارش کیفیت زندگی</h1><div class="domain-grid">${scores.map(x=>`<div class="domain-card"><strong>${x.name}</strong><span>${x.score} از ۲۰</span></div>`).join("")}</div><div class="result-note">${currentTest.resultText()}</div><div class="result-actions"><button class="primary-btn" onclick="copyReport(${JSON.stringify(report)})">کپی گزارش</button><button class="start-btn" onclick="location.reload()">بازگشت به آزمون‌ها</button></div>`;
}
async function copyReport(report){try{await navigator.clipboard.writeText(report);alert("گزارش با موفقیت کپی شد.")}catch{alert("کپی خودکار در این مرورگر در دسترس نیست.")}}


document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll("[data-test-id]").forEach(function(button){
    button.addEventListener("click", function(){
      const id = button.getAttribute("data-test-id");
      if (tests[id]) startTest(id);
    });
  });
});

window.startTest = startTest;
window.answerQuestion = answerQuestion;
window.previousQuestion = previousQuestion;
window.copyReport = copyReport;
