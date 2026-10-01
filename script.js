const copy = {
  en: {
    navStory: "How it works",
    navProgram: "Program",
    navPricing: "Price",
    navCta: "Start for $9.99",
    heroEyebrow: "AI video course · beginner friendly",
    heroTitle: "Create your first AI story video.",
    heroSubtitle: "From idea to finished AI video. No filming. No experience needed.",
    launchLabel: "LAUNCH PRICE",
    heroCta: "Create my first AI video",
    heroSecondary: "See the path",
    pillNoFilming: "no filming",
    stripOne: "One payment",
    stripTwo: "Instant access",
    stripThree: "Built for first-timers",
    storyEyebrow: "Scroll story",
    programEyebrow: "What you learn",
    programTitle: "The full path, not random AI tricks.",
    programIntro:
      "The course is built around making one short AI story video from scratch, step by step.",
    moduleOneTitle: "Idea and story",
    moduleOneText:
      "Find a simple idea, shape the hook, and make the story clear before generation.",
    moduleTwoTitle: "Character consistency",
    moduleTwoText: "Build a recognizable character and keep the same look across scenes.",
    moduleThreeTitle: "Scenes and prompts",
    moduleThreeText:
      "Break the story into shots and write prompts that actually produce usable frames.",
    moduleFourTitle: "Animation and edit",
    moduleFourText:
      "Animate, assemble, polish the sound and pacing, then export a finished short video.",
    resultEyebrow: "Result focused",
    resultTitle: "You are not buying “AI theory”. You are building the video.",
    resultText:
      "Every part of the course points to one outcome: a finished short AI video with a story, a character, scenes, movement and edit.",
    pricingEyebrow: "Launch offer",
    pricingTitle: "Start with the first AI story video.",
    pricingText: "One payment. Instant access. Beginner friendly.",
    pricingNote: "Launch price",
    pricingCta: "Get access",
    checkoutMessage:
      "Checkout link is ready to connect to Stripe, Gumroad or another payment provider.",
    faqOneQ: "Do I need to film anything?",
    faqOneA: "No. The course is built around creating AI video without camera shoots.",
    faqTwoQ: "Is it for beginners?",
    faqTwoA:
      "Yes. It starts from idea and story before moving into prompts, animation and editing.",
    faqThreeQ: "Is this about learning every AI tool?",
    faqThreeA: "No. The focus is the finished video, not memorizing a pile of tools.",
    footerText: "Create AI stories people actually watch.",
  },
  ru: {
    navStory: "Как работает",
    navProgram: "Программа",
    navPricing: "Цена",
    navCta: "Старт за $9.99",
    heroEyebrow: "Курс по AI-видео · для новичков",
    heroTitle: "Создай первый AI story video.",
    heroSubtitle: "От идеи до готового AI-ролика. Без съёмок. Без опыта.",
    launchLabel: "СТАРТОВАЯ ЦЕНА",
    heroCta: "Создать первый AI-ролик",
    heroSecondary: "Посмотреть путь",
    pillNoFilming: "без съёмок",
    stripOne: "Один платёж",
    stripTwo: "Доступ сразу",
    stripThree: "Подходит новичкам",
    storyEyebrow: "Сцена под свайп",
    programEyebrow: "Чему учишься",
    programTitle: "Полный путь, а не случайные AI-фишки.",
    programIntro:
      "Курс построен вокруг создания одного короткого AI-ролика с нуля, шаг за шагом.",
    moduleOneTitle: "Идея и история",
    moduleOneText:
      "Находишь простую идею, собираешь хук и делаешь историю понятной до генерации.",
    moduleTwoTitle: "Постоянный персонаж",
    moduleTwoText: "Создаёшь узнаваемого героя и сохраняешь его внешний вид между сценами.",
    moduleThreeTitle: "Сцены и промпты",
    moduleThreeText:
      "Разбиваешь историю на кадры и пишешь промпты, которые дают пригодный материал.",
    moduleFourTitle: "Анимация и монтаж",
    moduleFourText:
      "Анимируешь, собираешь ролик, чистишь звук и темп, затем экспортируешь финал.",
    resultEyebrow: "Фокус на результате",
    resultTitle: "Ты покупаешь не “теорию про AI”. Ты собираешь ролик.",
    resultText:
      "Каждый блок ведёт к одному результату: готовому короткому AI-видео с историей, персонажем, сценами, движением и монтажом.",
    pricingEyebrow: "Launch offer",
    pricingTitle: "Начни с первого AI story video.",
    pricingText: "Один платёж. Доступ сразу. Подходит новичкам.",
    pricingNote: "Стартовая цена",
    pricingCta: "Получить доступ",
    checkoutMessage: "Платёжную ссылку можно подключить к Stripe, Gumroad или другой системе оплаты.",
    faqOneQ: "Нужно что-то снимать?",
    faqOneA: "Нет. Курс построен вокруг создания AI-видео без съёмок на камеру.",
    faqTwoQ: "Это для новичков?",
    faqTwoA: "Да. Сначала идея и история, потом промпты, анимация и монтаж.",
    faqThreeQ: "Это про изучение всех AI-инструментов?",
    faqThreeA: "Нет. Фокус на готовом ролике, а не на запоминании десятка сервисов.",
    footerText: "Создавай AI-истории, которые реально досматривают.",
  },
};

const storySteps = {
  en: [
    ["Idea", "Start with a simple idea and turn it into a watchable mini-story."],
    ["Story", "Shape the hook, conflict and ending before you touch generation."],
    ["Character", "Build one recognizable hero instead of a new face every scene."],
    ["Scenes", "Break the idea into shots that are easy to generate and animate."],
    ["Animation", "Make the frames move with purpose, not random motion."],
    ["Edit", "Add pacing, sound and polish until it feels like a finished video."],
  ],
  ru: [
    ["Идея", "Берёшь простую идею и превращаешь её в мини-историю."],
    ["История", "Сначала хук, конфликт и финал, потом уже генерация."],
    ["Персонаж", "Собираешь одного узнаваемого героя, а не новое лицо в каждой сцене."],
    ["Сцены", "Разбиваешь идею на кадры, которые реально сгенерировать и оживить."],
    ["Анимация", "Делаешь движение осмысленным, а не просто случайным эффектом."],
    ["Монтаж", "Добавляешь темп, звук и полировку до ощущения готового ролика."],
  ],
};

let activeLang = "en";
const root = document.documentElement;
const story = document.querySelector(".scroll-story");
const sceneTitle = document.querySelector("#scene-title");
const sceneText = document.querySelector("#scene-text");

function setLanguage(lang) {
  activeLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[lang][key]) node.textContent = copy[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  updateStory();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getStoryProgress() {
  if (!story) return 0;
  const rect = story.getBoundingClientRect();
  const scrollable = story.offsetHeight - window.innerHeight;
  return clamp(-rect.top / scrollable, 0, 1);
}

function updateStory() {
  const progress = getStoryProgress();
  root.style.setProperty("--progress", progress.toFixed(4));
  const steps = storySteps[activeLang];
  const index = clamp(Math.floor(progress * steps.length), 0, steps.length - 1);
  sceneTitle.textContent = steps[index][0];
  sceneText.textContent = steps[index][1];
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("[data-checkout]")?.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("[data-checkout-message]")?.classList.add("is-visible");
});

window.addEventListener("scroll", updateStory, { passive: true });
window.addEventListener("resize", updateStory);
setLanguage("en");
