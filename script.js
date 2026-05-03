/**
 * قاموس عربي ↔ ألماني (١٥٠ كلمة).
 */
const WORDS = [
  { de: "Haus", ar: "بيت" },
  { de: "Auto", ar: "سيارة" },
  { de: "Buch", ar: "كتاب" },
  { de: "Schule", ar: "مدرسة" },
  { de: "Lehrer", ar: "معلم" },
  { de: "Schüler", ar: "طالب" },
  { de: "Wasser", ar: "ماء" },
  { de: "Brot", ar: "خبز" },
  { de: "Apfel", ar: "تفاح" },
  { de: "Tisch", ar: "طاولة" },
  { de: "Stuhl", ar: "كرسي" },
  { de: "Fenster", ar: "نافذة" },
  { de: "Tür", ar: "باب" },
  { de: "Stadt", ar: "مدينة" },
  { de: "Land", ar: "دولة" },
  { de: "Freund", ar: "صديق" },
  { de: "Familie", ar: "عائلة" },
  { de: "Mutter", ar: "أم" },
  { de: "Vater", ar: "أب" },
  { de: "Bruder", ar: "أخ" },
  { de: "Schwester", ar: "أخت" },
  { de: "Kind", ar: "طفل" },
  { de: "Arbeit", ar: "عمل" },
  { de: "Geld", ar: "مال" },
  { de: "Zeit", ar: "وقت" },
  { de: "Tag", ar: "يوم" },
  { de: "Nacht", ar: "ليلة" },
  { de: "Sonne", ar: "شمس" },
  { de: "Mond", ar: "قمر" },
  { de: "Stern", ar: "نجم" },
  { de: "Essen", ar: "طعام" },
  { de: "Trinken", ar: "شرب" },
  { de: "Kaufen", ar: "يشتري" },
  { de: "Verkaufen", ar: "يبيع" },
  { de: "Gehen", ar: "يذهب" },
  { de: "Kommen", ar: "يأتي" },
  { de: "Sehen", ar: "يرى" },
  { de: "Hören", ar: "يسمع" },
  { de: "Sagen", ar: "يقول" },
  { de: "Machen", ar: "يفعل" },
  { de: "Leben", ar: "يعيش" },
  { de: "Lernen", ar: "يتعلم" },
  { de: "Spielen", ar: "يلعب" },
  { de: "Arbeiten", ar: "يعمل" },
  { de: "Schlafen", ar: "ينام" },
  { de: "Lesen", ar: "يقرأ" },
  { de: "Schreiben", ar: "يكتب" },
  { de: "Sprechen", ar: "يتكلم" },
  { de: "Fragen", ar: "يسأل" },
  { de: "Antworten", ar: "يجيب" },
  { de: "Gut", ar: "جيد" },
  { de: "Schlecht", ar: "سيء" },
  { de: "Groß", ar: "كبير" },
  { de: "Klein", ar: "صغير" },
  { de: "Lang", ar: "طويل" },
  { de: "Kurz", ar: "قصير" },
  { de: "Schnell", ar: "سريع" },
  { de: "Langsam", ar: "بطيء" },
  { de: "Alt", ar: "قديم" },
  { de: "Neu", ar: "جديد" },
  { de: "Schön", ar: "جميل" },
  { de: "Hässlich", ar: "قبيح" },
  { de: "Kalt", ar: "بارد" },
  { de: "Warm", ar: "دافئ" },
  { de: "Heiß", ar: "ساخن" },
  { de: "Stark", ar: "قوي" },
  { de: "Schwach", ar: "ضعيف" },
  { de: "Richtig", ar: "صحيح" },
  { de: "Falsch", ar: "خطأ" },
  { de: "Wichtig", ar: "مهم" },
  { de: "Immer", ar: "دائمًا" },
  { de: "Nie", ar: "أبدًا" },
  { de: "Oft", ar: "غالبًا" },
  { de: "Selten", ar: "نادرًا" },
  { de: "Heute", ar: "اليوم" },
  { de: "Morgen", ar: "غدًا" },
  { de: "Gestern", ar: "أمس" },
  { de: "Jetzt", ar: "الآن" },
  { de: "Hier", ar: "هنا" },
  { de: "Dort", ar: "هناك" },
  { de: "Warum", ar: "لماذا" },
  { de: "Wie", ar: "كيف" },
  { de: "Was", ar: "ماذا" },
  { de: "Wer", ar: "من" },
  { de: "Wo", ar: "أين" },
  { de: "Ja", ar: "نعم" },
  { de: "Nein", ar: "لا" },
  { de: "Bitte", ar: "من فضلك" },
  { de: "Danke", ar: "شكرًا" },
  { de: "Entschuldigung", ar: "آسف" },
  { de: "Arzt", ar: "طبيب" },
  { de: "Krankenhaus", ar: "مستشفى" },
  { de: "Medikament", ar: "دواء" },
  { de: "Kopf", ar: "رأس" },
  { de: "Hand", ar: "يد" },
  { de: "Fuß", ar: "قدم" },
  { de: "Auge", ar: "عين" },
  { de: "Ohr", ar: "أذن" },
  { de: "Nase", ar: "أنف" },
  { de: "Mund", ar: "فم" },
  { de: "Herz", ar: "قلب" },
  { de: "Körper", ar: "جسم" },
  { de: "Straße", ar: "شارع" },
  { de: "Bus", ar: "حافلة" },
  { de: "Zug", ar: "قطار" },
  { de: "Flughafen", ar: "مطار" },
  { de: "Hotel", ar: "فندق" },
  { de: "Zimmer", ar: "غرفة" },
  { de: "Schlüssel", ar: "مفتاح" },
  { de: "Tasche", ar: "حقيبة" },
  { de: "Kleidung", ar: "ملابس" },
  { de: "Schuhe", ar: "أحذية" },
  { de: "Hemd", ar: "قميص" },
  { de: "Hose", ar: "بنطال" },
  { de: "Kleid", ar: "فستان" },
  { de: "Farbe", ar: "لون" },
  { de: "Rot", ar: "أحمر" },
  { de: "Blau", ar: "أزرق" },
  { de: "Grün", ar: "أخضر" },
  { de: "Gelb", ar: "أصفر" },
  { de: "Schwarz", ar: "أسود" },
  { de: "Weiß", ar: "أبيض" },
  { de: "Grau", ar: "رمادي" },
  { de: "Braun", ar: "بني" },
  { de: "Essen (Nomen)", ar: "أكل" },
  { de: "Frühstück", ar: "إفطار" },
  { de: "Mittagessen", ar: "غداء" },
  { de: "Abendessen", ar: "عشاء" },
  { de: "Kaffee", ar: "قهوة" },
  { de: "Tee", ar: "شاي" },
  { de: "Milch", ar: "حليب" },
  { de: "Zucker", ar: "سكر" },
  { de: "Salz", ar: "ملح" },
  { de: "Fleisch", ar: "لحم" },
  { de: "Fisch", ar: "سمك" },
  { de: "Gemüse", ar: "خضار" },
  { de: "Obst", ar: "فاكهة" },
  { de: "Reis", ar: "أرز" },
  { de: "Nudeln", ar: "مكرونة" },
  { de: "Suppe", ar: "شوربة" },
  { de: "Schule gehen", ar: "يذهب للمدرسة" },
  { de: "Urlaub", ar: "إجازة" },
  { de: "Reise", ar: "رحلة" },
  { de: "Meer", ar: "بحر" },
  { de: "Berg", ar: "جبل" },
  { de: "Wald", ar: "غابة" },
  { de: "Wetter", ar: "طقس" },
  { de: "Regen", ar: "مطر" },
  { de: "Schnee", ar: "ثلج" },
  { de: "Wind", ar: "رياح" },
];

const DIACRITICS_RE = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;

/** @type {'ar' | 'de'} */
let sourceLang = "ar";

/** @type {{ text: string; lang: string } | null} */
let lastTargetSpeak = null;

/** @type {number} */
let suggestActive = -1;
/** @type {typeof WORDS} */
let lastSuggestionList = [];

const SWIPE_MIN_PX = 56;

const sourceInput = document.getElementById("source-input");
const speakSourceBtn = document.getElementById("speak-source");
const speakTargetBtn = document.getElementById("speak-target");
const targetOutput = document.getElementById("target-output");
const suggestionsEl = document.getElementById("suggestions");
const inputShellEl = document.getElementById("input-shell");
const lblSource = document.getElementById("lbl-source");
const lblTarget = document.getElementById("lbl-target");
const swapBtn = document.getElementById("swap-btn");
const swipeZone = document.getElementById("swipe-zone");

function normalizeArabicKey(s) {
  return s.replace(/\s+/g, " ").trim();
}

function foldArabic(s) {
  let t = normalizeArabicKey(s);
  t = t.replace(DIACRITICS_RE, "");
  t = t.replace(/\u0640/g, "");
  t = t.replace(/[\u0622\u0623\u0625\u0671]/g, "\u0627");
  t = t.replace(/\u0649/g, "\u064A");
  t = t.replace(/\u0629/g, "\u0647");
  t = t.replace(/\u0626/g, "\u064A");
  t = t.replace(/\u0624/g, "\u0648");
  return t;
}

function foldGerman(s) {
  return s
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function findByGerman(query) {
  const fq = foldGerman(query.trim());
  return WORDS.find((w) => foldGerman(w.de) === fq) ?? null;
}

function findByArabic(query) {
  const q = normalizeArabicKey(query);
  const exact = WORDS.find((w) => normalizeArabicKey(w.ar) === q);
  if (exact) return exact;
  const fq = foldArabic(q);
  return WORDS.find((w) => foldArabic(w.ar) === fq) ?? null;
}

function getSuggestions(query) {
  const q = query.trim();
  if (!q) return [];

  if (sourceLang === "ar") {
    const hits = WORDS.filter((w) =>
      foldArabic(w.ar).includes(foldArabic(q))
    );

    hits.sort((a, b) =>
      foldArabic(a.ar).localeCompare(foldArabic(b.ar), "ar")
    );

    return hits;
  }

  const hits = WORDS.filter((w) =>
    foldGerman(w.de).includes(foldGerman(q))
  );

  hits.sort((a, b) =>
    foldGerman(a.de).localeCompare(foldGerman(b.de), "de")
  );

  return hits;
}

function refreshLangUi() {
  const isAr = sourceLang === "ar";
  lblSource.textContent = isAr ? "العربية" : "Deutsch";
  lblTarget.textContent = isAr ? "Deutsch" : "العربية";
  sourceInput.placeholder = isAr ? "اكتب الكلمة…" : "Wort eingeben…";
  sourceInput.setAttribute("dir", isAr ? "rtl" : "ltr");
  sourceInput.classList.toggle("dir-ltr", !isAr);
  targetOutput.setAttribute("dir", isAr ? "ltr" : "rtl");
}

function clearOutput() {
  targetOutput.textContent = "—";
  targetOutput.classList.remove("is-error");
  targetOutput.setAttribute("dir", sourceLang === "ar" ? "ltr" : "rtl");
  lastTargetSpeak = null;
  speakTargetBtn.disabled = true;
}

function applyTranslation() {
  const trimmed = sourceInput.value.trim();

  if (!trimmed) {
    clearOutput();
    syncSpeakSourceState();
    return;
  }

  const entry =
    sourceLang === "ar" ? findByArabic(trimmed) : findByGerman(trimmed);

  if (!entry) {
    targetOutput.textContent = "الكلمة مش موجودة في القاموس.";
    targetOutput.classList.add("is-error");
    lastTargetSpeak = null;
    speakTargetBtn.disabled = true;
    syncSpeakSourceState();
    return;
  }

  targetOutput.classList.remove("is-error");
  const targetText = sourceLang === "ar" ? entry.de : entry.ar;
  const targetLangCode = sourceLang === "ar" ? "de-DE" : "ar-SA";

  targetOutput.textContent = targetText;
  targetOutput.setAttribute("dir", sourceLang === "ar" ? "ltr" : "rtl");
  lastTargetSpeak = { text: targetText, lang: targetLangCode };
  speakTargetBtn.disabled = false;
  syncSpeakSourceState();
}

function speak(text, lang) {
  const t = text.trim();
  if (!t) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t);
  u.lang = lang;
  speechSynthesis.speak(u);
}

function onSpeakSource() {
  const t = sourceInput.value.trim();
  if (!t) return;
  speak(t, sourceLang === "ar" ? "ar-SA" : "de-DE");
}

function onSpeakTarget() {
  if (!lastTargetSpeak) return;
  speak(lastTargetSpeak.text, lastTargetSpeak.lang);
}

function swapLanguages() {
  const src = sourceInput.value.trim();
  const out = targetOutput.textContent.trim();
  const wasError = targetOutput.classList.contains("is-error");

  sourceLang = sourceLang === "ar" ? "de" : "ar";
  refreshLangUi();

  if (!wasError && out && out !== "—") {
    sourceInput.value = out;
    applyTranslation();
  } else if (src) {
    sourceInput.value = src;
    applyTranslation();
  } else {
    sourceInput.value = "";
    clearOutput();
  }

  refreshSuggestions();
}

function setSuggestionsOpen(open) {
  if (open && lastSuggestionList.length > 0) {
    suggestionsEl.hidden = false;
    sourceInput.setAttribute("aria-expanded", "true");
  } else {
    suggestionsEl.hidden = true;
    sourceInput.setAttribute("aria-expanded", "false");
    suggestActive = -1;
  }
}

function closeSuggestions() {
  setSuggestionsOpen(false);
}

function renderSuggestions(list) {
  lastSuggestionList = list;
  suggestionsEl.innerHTML = "";
  list.forEach((entry, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "suggest-item";
    btn.setAttribute("role", "option");
    btn.dataset.index = String(index);
    const line = sourceLang === "ar" ? entry.ar : entry.de;
    btn.textContent = line;
    btn.setAttribute("dir", sourceLang === "ar" ? "rtl" : "ltr");
    btn.addEventListener("mousedown", (e) => e.preventDefault());
    btn.addEventListener("click", () => selectSuggestion(index));
    suggestionsEl.appendChild(btn);
  });
  highlightActive();
  setSuggestionsOpen(list.length > 0);
}

function highlightActive() {
  const items = suggestionsEl.querySelectorAll(".suggest-item");
  items.forEach((el, i) => el.classList.toggle("is-active", i === suggestActive));
}

function selectSuggestion(index) {
  const entry = lastSuggestionList[index];
  if (!entry) return;
  sourceInput.value = sourceLang === "ar" ? entry.ar : entry.de;
  closeSuggestions();
  applyTranslation();
}

function refreshSuggestions() {
  const list = getSuggestions(sourceInput.value);
  suggestActive = list.length > 0 ? 0 : -1;
  renderSuggestions(list);
}

function syncSpeakSourceState() {
  speakSourceBtn.disabled = !sourceInput.value.trim();
}

speakSourceBtn.addEventListener("click", onSpeakSource);
speakTargetBtn.addEventListener("click", onSpeakTarget);
swapBtn.addEventListener("click", swapLanguages);

sourceInput.addEventListener("input", () => {
  refreshSuggestions();
  syncSpeakSourceState();
  applyTranslation();
});

sourceInput.addEventListener("focus", refreshSuggestions);

sourceInput.addEventListener("keydown", (e) => {
  const open = !suggestionsEl.hidden && lastSuggestionList.length > 0;

  if (e.key === "Escape") {
    closeSuggestions();
    return;
  }

  if (open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    e.preventDefault();
    const n = lastSuggestionList.length;
    if (e.key === "ArrowDown") {
      suggestActive = suggestActive < 0 ? 0 : (suggestActive + 1) % n;
    } else {
      suggestActive = suggestActive <= 0 ? n - 1 : suggestActive - 1;
    }
    highlightActive();
    return;
  }

  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (open && suggestActive >= 0) {
      selectSuggestion(suggestActive);
    } else {
      closeSuggestions();
      applyTranslation();
    }
  }
});

document.addEventListener("click", (e) => {
  if (inputShellEl && !inputShellEl.contains(e.target)) {
    closeSuggestions();
  }
});

let touchStartX = 0;
let touchStartY = 0;

swipeZone.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  },
  { passive: true },
);

swipeZone.addEventListener(
  "touchend",
  (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return;
    swapLanguages();
  },
  { passive: true },
);

refreshLangUi();
clearOutput();
syncSpeakSourceState();
sourceInput.setAttribute("aria-expanded", "false");
