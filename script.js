/* =====================================================================
   ✏️  EDIT THIS PART  ✏️   (everything you need to personalize is here)
   =====================================================================
   HOW TO EDIT:
   - Only change the text between the quote marks "like this".
   - Do not delete the commas at the end of lines.
   - You can use these shortcuts inside any text:
        {name}      -> his name
        {nickname}  -> his nickname
        {her}       -> your name
   - If you leave a field empty (""), that feature is hidden automatically.
   ===================================================================== */

const CONFIG = {

  // ---------- 1. NAMES & DATES ----------
  boyfriendName: "JASHIIIII",          // His name
  girlfriendName: "PRUSHTI",        // Your name
  nickname: "Baby",                   // What you call him
  birthdayDate: "2006-10-30",                   // His birthday like "2026-10-29" (year-month-day). Optional.
  relationshipStartDate: "2026-04-13",          // The day you got together like "2024-02-14". Optional.
                                      // If filled, the welcome page shows "X days together".

  // ---------- 2. OPENING SCREEN ----------
  introTitle: "Hey, Birthday My Pretty Boy...",
  introLine: "There's Something I Made For You ❤️",
  introQuestion: "Are you ready to see what your girl made for you?",
  openButton: "OPEN YOUR SURPRISE ❤️",
  introWelcome: "Welcome, {name}... this is all for you. ❤️",   // shown for a moment after he taps the button

  // ---------- 3. WELCOME PAGE ----------
  welcomeTitle: "Happy Birthday, Babyyyyyyy ❤️",
  welcomeLine: "Out of all the people in this world, I am so glad that life brought you into mine.",
  welcomeParagraph:
    "I made this little corner of the internet just for you.\n" +
    "Take your time, tap around, and smile a little.",
  welcomeButton: "There's more for you...",

  // ---------- 4. QUIZ ----------
  // For each question:
  //   question : the question text
  //   options  : the answer buttons (2 to 4 of them)
  //   correct  : which option is the "right" one. 0 = first, 1 = second, 2 = third...
  //              Use -1 if EVERY answer should count as right.
  //   reactions: the message shown after each option (same order as the options!)
  // To remove the quiz completely, change quizQuestions to []  (empty brackets).
  quizTitle: "Our Little Love Quiz",
  quizQuestions: [
    {
      question: "Who is more dramatic?",
      options: ["Me", "You", "Both of us"],
      correct: 0,
      reactions: [
        "Correct answer : Haa thodi dramatic chu karanke hu tari sathe chu ne!!!!STILL SORRYYY BABESS😅",
        "Tu toh maro pyaroooo bachuu che dramatic naii❤️",
        "Yeh bhi sahi hai!! hum do ho aur drama na hoo aisa kabhi ho sakta haii ❤️"
      ]
    },
    {
      question: "Who is more likely to start teasing the other?",
      options: ["Me", "You"],
      correct: 1,
      reactions: [
        "HOOOOO!!! me toh masum chuu neeee🥺",
        "haannn tu j che mane heran karva vadoo. pan mane aema bi bau maja aave",
      ]
    },
    {
      question: "Who fell first?",
      options: ["Me", "You", "We'll never know"],
      correct: 2,
      reactions: [
        "Maybe... but I think you fell too. 😌",
        "Hehe, I'll let you believe that. 🙈",
        "Correct! We'll never know, and honestly I love that. ❤️"
      ]
    },
    {
      question: "What is something that always makes me smile?",
      options: ["Your messages", "Your silly jokes", "Just hearing from you", "All of the above"],
      correct: 3,
      reactions: [
        "That one is true, but there's more! 😄",
        "True, you are funny. 😂 But that's not all of it!",
        "So true. But it's not the only thing!",
        "ALL OF THE ABOVE. You really do know me. ❤️"
      ]
    },
    {
      question: "Who is the luckiest person in this relationship?",
      options: ["You", "Me", "Both of us"],
      correct: 2,
      reactions: [
        "Aww, thank you. But I'm lucky too. ❤️",
        "I really am. But you are lucky too. 😉",
        "Correct answer: BOTH OF US. We got lucky the day we met. ❤️"
      ]
    }
  ],
  quizPassMessage: "Congratulations! You've officially passed the\nBoyfriend Appreciation Test. 😂❤️",
  quizUnlockButton: "UNLOCK THE NEXT SURPRISE",

  // ---------- 5. LITTLE THINGS I LOVE ----------
  // label = the short word on the heart, message = what appears when he taps it.
  // Add or remove lines freely. Use [] to hide this section.
  reasonsTitle: "Little Things I Love About You",
  reasonsHint: "Tap each heart. There's a little message inside.",
  reasonsButton: "Keep going...",
  reasons: [
    { label: "Care",         message: "Tu always mari bau care kare che !! Thank youuu for that" },
    { label: "Talks",        message: "Tari sathe vaat karu toh badhu j gamva made." },
    { label: "Habits",       message: "Jarak bhulvani bimari tane che pan aene sachavva taro prem j kafi che." },
    { label: "Laughs",       message: "Tu hase ne toh mari aakhi duniya hasva made. My little boy just stay happy." },
    { label: "Thoughts",     message: "Tara j vicharo farata hoy che mara magaj maa bass" },
    { label: "Moments",      message: "Moment ni toh su vaat karu... but best moment with youu is my everyday" },
    { label: "Every day",    message: "bas tu mane rojj yaad kar ne khush thajeee its dhamkiiii" },
    { label: "Inside jokes", message: "waiting for bhariiii lipta liptiii" },
    { label: "You",          message: "You are such a wonderful personnnnn" }
  ],

  // ---------- 6. PHOTO GALLERY ----------
  // Put your pictures in the "images" folder. The name here must match the file EXACTLY
  // (including capital letters and .jpg / .jpeg / .png).
  // If a picture is missing, a pretty placeholder card is shown instead.
  // Use [] to hide the gallery.
  galleryTitle: "Little Moments, Big Memories ❤️",
  galleryHint: "Tap a photo to see it bigger.",
  galleryButton: "Next...",
  photos: [
    { src: "WhatsApp Image 2026-10-29 at 12.16.3.jpeg", caption: "One of my favorite memories." },
    { src: "WhatsApp Image 2026-10-29 at 12.18.26.jpeg", caption: "You look so cute here." },
    { src: "WhatsApp Image 2026-10-29 at 12.16.32.jpeg", caption: "One of the little things I treasure." },
    { src: "WhatsApp Image 2026-10-29 at 12.16.31.jpeg", caption: "Just us being us." }
  ],

  // ---------- 7. LOVE LETTER ----------
  // Replace everything between the backticks ` ` with your own letter.
  // Press Enter for a new line. Leave it as `` (empty) to hide the letter.
  letterTitle: "A Letter From Your Girl 💌",
  letterButton: "ONE LAST THING, BABY...",
  letter: `Happy Birthday, Baby. ❤️

If I could give you one thing today, it would be the ability to see yourself through my eyes.

Maybe then you would understand why you are so special to me and why even the smallest things about you can make me smile.

I wish I could be beside you today, see your smile in person, and give you the biggest hug.

Until I can, I hope this little surprise reminds you that someone spent her time creating something just for you.

I hope this new year of your life brings you happiness, confidence, success, and countless reasons to smile.

I hope you keep believing in yourself and chasing the things that matter to you.

And selfishly, I hope I get to be part of many of those smiles.

Thank you for being part of my life.

Happy Birthday, my favorite person.

I love you. ❤️`,

  // ---------- 8. FINAL SURPRISE ----------
  finalTitle: "You've reached the final surprise...",
  finalPromise: "But before you open it, promise me one thing:\nkeep smiling, birthday boy. ❤️",
  finalButton: "OPEN YOUR FINAL GIFT 🎁",
  // Separate paragraphs with an empty line.
  finalMessage: `Happy Birthday to my favorite human. ❤️🎂

I hope today reminds you of how loved, appreciated, and special you are.

I may not be beside you right now, but I hope this little corner of the internet makes you feel a little closer to me.

Here's to your happiness, your dreams, your growth, and all the beautiful memories still waiting for us.

You deserve so many wonderful things.

And today, I hope you smile a little extra.

Happy Birthday, Baby.

With all my love,
YOUR GIRL ❤️`,
  replayButton: "Watch the surprise again 🔁",

  // ---------- 9. OPTIONAL VIDEO & MUSIC ----------
  // Leave as "" to hide. Examples: "videos/birthday-surprise.mp4"  and  "audio/our-song.mp3"
  birthdayVideo: "",
  backgroundMusic: ""
};

/* =====================================================================
   🛑  YOU DON'T NEED TO CHANGE ANYTHING BELOW THIS LINE  🛑
   ===================================================================== */

(function () {
  "use strict";

  // ---------- small helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function fill(text) {
    return String(text || "")
      .replace(/\{name\}/g, CONFIG.boyfriendName)
      .replace(/\{nickname\}/g, CONFIG.nickname)
      .replace(/\{her\}/g, CONFIG.girlfriendName);
  }
  // Put text into an element; hide the element if the text is empty.
  function setText(selector, text) {
    const el = $(selector);
    const value = fill(text);
    el.textContent = value;
    el.hidden = !value.trim();
  }
  function make(tag, className, html) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (html !== undefined) el.innerHTML = html;
    return el;
  }
  const HEART_SVG = '<svg viewBox="0 0 32 29" aria-hidden="true"><path d="M16 28S2 19 2 10A7 7 0 0 1 16 6a7 7 0 0 1 14 4c0 9-14 18-14 18z"/></svg>';

  // =====================================================================
  // NIGHT SKY: stars, floating hearts, sparkles, bursts, cursor hearts
  // =====================================================================
  const canvas = $("#sky");
  const ctx = canvas.getContext("2d");
  const COLORS = ["#FF8FB8", "#FFD6E5", "#FF5C8D", "#FFF7FB"];
  let W = 0, H = 0, stars = [], floaters = [], particles = [], rafId = null;

  function resizeSky() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = W < 600 ? 60 : 110;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.4,
      phase: Math.random() * 6.28, speed: 0.0006 + Math.random() * 0.0016
    }));
    if (reduceMotion) drawStaticSky();
  }
  function newFloater(anywhere) {
    return {
      x: Math.random() * W, y: anywhere ? Math.random() * H : H + 20,
      size: 4 + Math.random() * 7, vy: 0.25 + Math.random() * 0.4,
      sway: 10 + Math.random() * 18, phase: Math.random() * 6.28,
      color: COLORS[Math.floor(Math.random() * 3)], alpha: 0.12 + Math.random() * 0.25
    };
  }
  function heartPath(x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.3);
    ctx.bezierCurveTo(x, y - s * 0.2, x - s, y - s * 0.2, x - s, y + s * 0.35);
    ctx.bezierCurveTo(x - s, y + s * 0.8, x, y + s, x, y + s * 1.3);
    ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.8, x + s, y + s * 0.35);
    ctx.bezierCurveTo(x + s, y - s * 0.2, x, y - s * 0.2, x, y + s * 0.3);
    ctx.closePath();
  }
  function drawStaticSky() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#FFF7FB";
    stars.forEach((s) => { ctx.globalAlpha = 0.7; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill(); });
    ctx.globalAlpha = 1;
  }
  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    // stars
    ctx.fillStyle = "#FFF7FB";
    for (const s of stars) {
      ctx.globalAlpha = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill();
    }
    // slow floating hearts
    const maxFloaters = W < 600 ? 7 : 12;
    while (floaters.length < maxFloaters) floaters.push(newFloater(false));
    floaters = floaters.filter((f) => f.y > -30);
    for (const f of floaters) {
      f.y -= f.vy;
      ctx.globalAlpha = f.alpha; ctx.fillStyle = f.color;
      heartPath(f.x + Math.sin(f.phase + t * 0.0007) * f.sway, f.y, f.size); ctx.fill();
    }
    // bursts, sparkles and cursor hearts
    particles = particles.filter((p) => p.life < p.max);
    for (const p of particles) {
      p.life++; p.vy += p.g; p.x += p.vx; p.y += p.vy;
      ctx.globalAlpha = Math.max(0, 1 - p.life / p.max); ctx.fillStyle = p.color;
      if (p.heart) { heartPath(p.x, p.y, p.size); ctx.fill(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.35, 0, 6.28); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(frame);
  }
  function startSky() { if (!reduceMotion && !rafId) rafId = requestAnimationFrame(frame); }
  function stopSky() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

  // A burst of hearts and sparkles from a point on the screen.
  function burst(x, y, amount) {
    if (reduceMotion) return;
    for (let i = 0; i < (amount || 28) && particles.length < 260; i++) {
      const angle = Math.random() * 6.28, speed = 1.5 + Math.random() * 4;
      particles.push({
        x: x, y: y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 2, g: 0.06,
        life: 0, max: 70 + Math.random() * 50, size: 4 + Math.random() * 8,
        heart: Math.random() < 0.6, color: COLORS[Math.floor(Math.random() * COLORS.length)]
      });
    }
  }
  function burstFromElement(el, amount) {
    const r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, amount);
  }
  // Big celebration: several bursts around the screen.
  function celebrate() {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => burst(W * (0.15 + Math.random() * 0.7), H * (0.2 + Math.random() * 0.4), 34), i * 450);
    }
  }

  // Small hearts that follow the mouse (desktop only; the normal cursor stays).
  let lastTrail = 0;
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    window.addEventListener("pointermove", (e) => {
      const now = performance.now();
      if (e.pointerType !== "mouse" || now - lastTrail < 80 || particles.length > 200) return;
      lastTrail = now;
      particles.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 0.6, vy: -0.8, g: -0.004, life: 0, max: 45, size: 4, heart: true, color: "#FF8FB8" });
    });
  }

  document.addEventListener("visibilitychange", () => { document.hidden ? stopSky() : startSky(); });
  window.addEventListener("resize", resizeSky);

  // =====================================================================
  // SCENES: moving between pages
  // =====================================================================
  const sceneIds = ["intro", "welcome", "quiz", "reasons", "gallery", "letter", "final"];
  const hasContent = {
    intro: true,
    welcome: true,
    quiz: CONFIG.quizQuestions.length > 0,
    reasons: CONFIG.reasons.length > 0,
    gallery: CONFIG.photos.length > 0,
    letter: String(CONFIG.letter || "").trim() !== "",
    final: true
  };
  const order = sceneIds.filter((id) => hasContent[id]);
  const scenes = {};
  sceneIds.forEach((id) => {
    const el = $("#scene-" + id);
    if (order.includes(id)) { scenes[id] = el; el.inert = true; }
    else el.hidden = true;   // feature is empty, so this page is skipped
  });

  const backBtn = $("#backBtn");
  const progressBar = $("#progressBar");
  let current = -1;

  function goTo(pos) {
    pos = Math.max(0, Math.min(order.length - 1, pos));
    if (pos === current) return;
    if (current >= 0) { const old = scenes[order[current]]; old.classList.remove("active"); old.inert = true; }
    current = pos;
    const id = order[pos];
    const scene = scenes[id];
    scene.inert = false;
    scene.scrollTop = 0;
    scene.classList.add("active");
    backBtn.hidden = pos === 0;
    progressBar.style.width = (order.length > 1 ? (pos / (order.length - 1)) * 100 : 100) + "%";
    const heading = scene.querySelector("h1, h2");
    if (heading) setTimeout(() => heading.focus({ preventScroll: true }), 50);
    if (id === "letter") startTyping(); else stopTyping();
  }
  const next = () => goTo(current + 1);
  backBtn.addEventListener("click", () => goTo(current - 1));
  document.querySelectorAll("[data-go='next']").forEach((b) => b.addEventListener("click", next));

  // =====================================================================
  // FILL IN ALL THE TEXT FROM CONFIG
  // =====================================================================
  document.title = fill("Happy Birthday, {name} ❤️");
  setText("#introTitle", CONFIG.introTitle);
  setText("#introLine", CONFIG.introLine);
  setText("#introQuestion", CONFIG.introQuestion);
  setText("#openBtn", CONFIG.openButton);
  setText("#headphones", CONFIG.headphonesNote);
  setText("#welcomeTitle", CONFIG.welcomeTitle);
  setText("#welcomeLine", CONFIG.welcomeLine);
  setText("#welcomeParagraph", CONFIG.welcomeParagraph);
  setText("#welcomeBtn", CONFIG.welcomeButton);
  setText("#quizTitle", CONFIG.quizTitle);
  setText("#reasonsTitle", CONFIG.reasonsTitle);
  setText("#reasonsHint", CONFIG.reasonsHint);
  setText("#reasonsBtn", CONFIG.reasonsButton);
  setText("#galleryTitle", CONFIG.galleryTitle);
  setText("#galleryHint", CONFIG.galleryHint);
  setText("#galleryBtn", CONFIG.galleryButton);
  setText("#letterTitle", CONFIG.letterTitle);
  setText("#letterBtn", CONFIG.letterButton);
  setText("#finalTitle", CONFIG.finalTitle);
  setText("#finalPromise", CONFIG.finalPromise);
  setText("#giftBtn", CONFIG.finalButton);
  setText("#replayBtn", CONFIG.replayButton);
  $("#letterBtn").hidden = true;   // appears after the letter is typed
  $("#finalPromise").style.whiteSpace = "pre-line";
  $("#quizPass").style.whiteSpace = "pre-line";

  // Days-together counter / birthday date (both optional)
  (function dayInfo() {
    const el = $("#welcomeCounter");
    const parts = [];
    const start = CONFIG.relationshipStartDate ? new Date(CONFIG.relationshipStartDate + "T00:00:00") : null;
    if (start && !isNaN(start)) {
      const days = Math.floor((Date.now() - start.getTime()) / 86400000);
      if (days >= 0) parts.push("❤️ " + days.toLocaleString() + " days together");
    }
    const bday = CONFIG.birthdayDate ? new Date(CONFIG.birthdayDate + "T00:00:00") : null;
    if (bday && !isNaN(bday)) {
      parts.push("🎂 " + bday.toLocaleDateString(undefined, { day: "numeric", month: "long" }));
    }
    el.textContent = parts.join("   ");
    el.hidden = parts.length === 0;
  })();

  // =====================================================================
  // MUSIC (optional)
  // =====================================================================
  const musicBtn = $("#musicBtn");
  let audio = null;
  if (CONFIG.backgroundMusic) {
    audio = new Audio();
    audio.loop = true;
    audio.preload = "none";
    audio.src = CONFIG.backgroundMusic;
    audio.addEventListener("error", dropMusic);
    audio.addEventListener("play", () => setMusicState(true));
    audio.addEventListener("pause", () => setMusicState(false));
  }
  function dropMusic() { audio = null; musicBtn.hidden = true; }   // missing file: hide the button
  function setMusicState(playing) {
    musicBtn.classList.toggle("playing", playing);
    musicBtn.setAttribute("aria-pressed", String(playing));
    musicBtn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
  }
  function playMusic() {
    if (!audio) return;
    const p = audio.play();
    if (p && p.catch) p.catch((err) => { if (err && err.name !== "NotAllowedError") dropMusic(); });
  }
  musicBtn.addEventListener("click", () => { if (audio) { audio.paused ? playMusic() : audio.pause(); } });

  // =====================================================================
  // 1. OPENING BUTTON
  // =====================================================================
  const openBtn = $("#openBtn");
  openBtn.addEventListener("click", () => {
    openBtn.disabled = true;
    burstFromElement(openBtn, 36);
    if (audio) { musicBtn.hidden = false; playMusic(); }
    $("#scene-intro").classList.add("opening");
    setText("#introWelcome", CONFIG.introWelcome);
    setTimeout(next, reduceMotion ? 300 : 2200);
  });

  // =====================================================================
  // 3. QUIZ
  // =====================================================================
  const quiz = CONFIG.quizQuestions;
  let qIndex = 0, qScore = 0, qAnswered = false;

  function showQuestion() {
    const q = quiz[qIndex];
    qAnswered = false;
    $("#quizCount").textContent = "Question " + (qIndex + 1) + " of " + quiz.length;
    $("#quizMeter").style.width = (qIndex / quiz.length) * 100 + "%";
    $("#quizQuestion").textContent = fill(q.question);
    $("#quizReaction").hidden = true;
    $("#quizNext").hidden = true;
    const box = $("#quizOptions");
    box.innerHTML = "";
    q.options.forEach((text, i) => {
      const b = make("button", "option");
      b.type = "button";
      b.textContent = fill(text);
      b.addEventListener("click", () => chooseAnswer(i));
      box.appendChild(b);
    });
  }
  function chooseAnswer(i) {
    if (qAnswered) return;
    qAnswered = true;
    const q = quiz[qIndex];
    const anyRight = q.correct === -1 || q.correct === undefined || q.correct === null;
    const isRight = anyRight || i === q.correct;
    if (isRight) qScore++;
    Array.from($("#quizOptions").children).forEach((b, n) => {
      b.disabled = true;
      if (n === i) b.classList.add("chosen");
      if (!anyRight && n === q.correct) b.classList.add("right");
      else if (n !== i) b.classList.add("dim");
    });
    const reactions = q.reactions || [];
    const reaction = $("#quizReaction");
    reaction.textContent = fill(reactions[i] || (isRight ? "Correct! ❤️" : "Hehe, not quite! 😄"));
    reaction.hidden = false;
    if (isRight) burstFromElement($("#quizOptions").children[i], 14);
    const last = qIndex === quiz.length - 1;
    const nextBtn = $("#quizNext");
    nextBtn.textContent = last ? "See my result ❤️" : "Next question";
    nextBtn.hidden = false;
    nextBtn.focus({ preventScroll: true });
    nextBtn.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
  }
  function showQuizResult() {
    $("#quizPlay").hidden = true;
    $("#quizResult").hidden = false;
    setText("#quizPass", CONFIG.quizPassMessage);
    setText("#quizUnlock", CONFIG.quizUnlockButton);
    $("#quizScore").textContent = "Your score: " + qScore + " out of " + quiz.length;
    burstFromElement($("#quizPass"), 40);
  }
  function resetQuiz() {
    if (!quiz.length) return;
    qIndex = 0; qScore = 0;
    $("#quizPlay").hidden = false;
    $("#quizResult").hidden = true;
    showQuestion();
  }
  if (quiz.length) {
    $("#quizNext").addEventListener("click", () => {
      if (qIndex < quiz.length - 1) { qIndex++; showQuestion(); }
      else { $("#quizMeter").style.width = "100%"; showQuizResult(); }
    });
    showQuestion();
  }

  // =====================================================================
  // 4. REASONS (heart cards)
  // =====================================================================
  const reasons = CONFIG.reasons;
  const reasonCards = [];
  const openedReasons = new Set();
  const reasonOverlay = $("#reasonOverlay");
  let currentReason = 0;

  function updateReasonCount() {
    $("#reasonCount").textContent = openedReasons.size + " of " + reasons.length + " hearts opened";
  }
  reasons.forEach((r, i) => {
    const card = make("button", "heart-card", HEART_SVG + "<span></span>");
    card.type = "button";
    card.lastChild.textContent = fill(r.label || "");
    card.setAttribute("aria-label", "Open a little message: " + (r.label || "heart"));
    card.addEventListener("click", () => openReason(i));
    $("#reasonGrid").appendChild(card);
    reasonCards.push(card);
  });
  updateReasonCount();

  function openReason(i) {
    currentReason = i;
    openedReasons.add(i);
    reasonCards[i].classList.add("opened");
    $("#reasonMessage").textContent = fill(reasons[i].message);
    reasonOverlay.hidden = false;
    $("#reasonNext").hidden = reasons.length < 2;
    $("#reasonClose").focus();
    burstFromElement($(".big-heart", reasonOverlay), 12);
    updateReasonCount();
  }
  function closeReason() {
    reasonOverlay.hidden = true;
    reasonCards[currentReason].focus({ preventScroll: true });
  }
  function anotherReason() {
    let n = -1;
    for (let k = 1; k <= reasons.length; k++) {
      const idx = (currentReason + k) % reasons.length;
      if (!openedReasons.has(idx)) { n = idx; break; }
    }
    if (n === -1) n = (currentReason + 1) % reasons.length;   // all opened: just go to the next one
    openReason(n);
    reasonCards[n].scrollIntoView({ block: "nearest" });
  }
  $("#reasonClose").addEventListener("click", closeReason);
  $("#reasonNext").addEventListener("click", anotherReason);
  reasonOverlay.addEventListener("click", (e) => { if (e.target === reasonOverlay) closeReason(); });

  // =====================================================================
  // 5. PHOTO GALLERY + LIGHTBOX
  // =====================================================================
  const lightbox = $("#lightbox");
  let lastFocus = null;

  function placeholderHTML(src) {
    return '<span class="ph-heart" aria-hidden="true">♥</span><span class="ph-note">Your photo goes here<br>' + (src ? src : "") + "</span>";
  }
  CONFIG.photos.forEach((photo, i) => {
    const caption = fill(photo.caption || "");
    const card = make("button", "photo-card");
    card.type = "button";
    card.setAttribute("aria-label", "Open photo: " + (caption || "photo " + (i + 1)));
    const frame = make("div", "photo-frame", placeholderHTML(photo.src));
    const cap = make("span", "cap");
    cap.textContent = caption;
    card.append(frame, cap);
    card.dataset.loaded = "no";
    if (photo.src) {
      // Only swap the placeholder for the real photo if the file actually loads.
      const img = new Image();
      img.alt = caption;
      img.onload = () => { frame.replaceChildren(img); card.dataset.loaded = "yes"; };
      img.src = photo.src;
    }
    card.addEventListener("click", () => openLightbox(photo, caption, card));
    $("#photoGrid").appendChild(card);
  });

  function openLightbox(photo, caption, card) {
    lastFocus = card;
    const media = $("#lightMedia");
    media.innerHTML = "";
    if (card.dataset.loaded === "yes") {
      const img = new Image();
      img.alt = caption;
      img.src = photo.src;
      media.appendChild(img);
    } else {
      const ph = make("div", "photo-frame", placeholderHTML(photo.src));
      ph.style.maxWidth = "320px"; ph.style.margin = "0 auto";
      media.appendChild(ph);
    }
    $("#lightCaption").textContent = caption;
    lightbox.hidden = false;
    $("#lightClose").focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $("#lightClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  // Escape closes whichever popup is open
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!lightbox.hidden) closeLightbox();
    else if (!reasonOverlay.hidden) closeReason();
  });

  // =====================================================================
  // 6. LOVE LETTER (typing animation)
  // =====================================================================
  const paper = $("#paper");
  const typedNode = document.createTextNode("");
  $("#typed").appendChild(typedNode);
  let typeTimer = null, letterDone = false;
  const letterChars = Array.from(fill(CONFIG.letter).trim());   // Array.from keeps emoji whole
  paper.setAttribute("aria-label", fill(CONFIG.letter).trim());

  function finishLetter() {
    clearTimeout(typeTimer);
    typedNode.data = letterChars.join("");
    letterDone = true;
    paper.classList.add("done");
    $("#letterSkip").hidden = true;
    $("#letterBtn").hidden = false;
  }
  function startTyping() {
    clearTimeout(typeTimer);
    if (letterDone) return;
    if (reduceMotion) { finishLetter(); return; }
    let i = 0;
    typedNode.data = "";
    (function step() {
      if (i >= letterChars.length) { finishLetter(); return; }
      const ch = letterChars[i++];
      typedNode.data += ch;
      if (ch === "\n") paper.scrollIntoView({ block: "end", behavior: "smooth" });
      let delay = 24 + Math.random() * 22;
      if (ch === "\n") delay = 260;
      else if (".!?".includes(ch)) delay = 240;
      else if (ch === ",") delay = 130;
      typeTimer = setTimeout(step, delay);
    })();
  }
  function stopTyping() { clearTimeout(typeTimer); }
  paper.addEventListener("click", () => { if (!letterDone) finishLetter(); });
  paper.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && !letterDone) { e.preventDefault(); finishLetter(); } });

  // =====================================================================
  // 7. FINAL SURPRISE
  // =====================================================================
  const gift = $("#gift");
  const giftBtn = $("#giftBtn");
  const giftStage = $("#giftStage");
  const finalReveal = $("#finalReveal");

  function buildFinalMessage() {
    const box = $("#finalMessage");
    box.innerHTML = "";
    fill(CONFIG.finalMessage).trim().split(/\n\s*\n/).forEach((para, i) => {
      const p = make("p");
      p.textContent = para.trim();
      p.style.whiteSpace = "pre-line";
      p.style.animationDelay = (reduceMotion ? 0 : 0.4 + i * 0.7) + "s";   // one paragraph at a time
      box.appendChild(p);
    });
  }
  function buildVideo() {
    const box = $("#videoBox");
    box.innerHTML = "";
    box.hidden = true;
    if (!CONFIG.birthdayVideo) return;
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;       // no autoplay, and no forced fullscreen on iPhone
    video.preload = "metadata";
    video.src = CONFIG.birthdayVideo;
    video.addEventListener("error", () => { box.hidden = true; box.innerHTML = ""; });   // missing file: hide player
    video.addEventListener("loadedmetadata", () => { box.hidden = false; });
    video.addEventListener("play", () => { if (audio && !audio.paused) audio.pause(); });  // so you can hear the video
    box.appendChild(video);
  }
  giftBtn.addEventListener("click", () => {
    giftBtn.disabled = true;
    gift.classList.add("open");
    burstFromElement(gift, 40);
    setTimeout(() => {
      giftStage.classList.add("done");
      buildFinalMessage();
      buildVideo();
      finalReveal.hidden = false;
      $("#scene-final").scrollTop = 0;
      $("#finalMessage").setAttribute("tabindex", "-1");
      $("#finalMessage").focus({ preventScroll: true });
      celebrate();
    }, reduceMotion ? 100 : 1500);
  });

  // Replay: reset everything and go back to the start
  $("#replayBtn").addEventListener("click", () => {
    gift.classList.remove("open");
    giftStage.classList.remove("done");
    giftBtn.disabled = false;
    finalReveal.hidden = true;
    $("#videoBox").innerHTML = "";
    letterDone = false;
    typedNode.data = "";
    paper.classList.remove("done");
    $("#letterSkip").hidden = false;
    $("#letterBtn").hidden = true;
    openedReasons.clear();
    reasonCards.forEach((c) => c.classList.remove("opened"));
    updateReasonCount();
    resetQuiz();
    openBtn.disabled = false;
    $("#scene-intro").classList.remove("opening");
    $("#introWelcome").hidden = true;
    goTo(0);
  });

  // =====================================================================
  // START
  // =====================================================================
  resizeSky();
  floaters = Array.from({ length: W < 600 ? 5 : 9 }, () => newFloater(true));
  startSky();
  goTo(0);
})();
