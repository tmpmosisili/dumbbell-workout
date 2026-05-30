// ── Workout Data ──────────────────────────────────────────────────────────────
const WORKOUTS = [
  {
    id: 'day1',
    label: 'Day 1',
    title: 'Day One (W1/D1)',
    subtitle: '4 exercises · 30 min AMRAP',
    description: 'Set a 30-minute countdown timer and work through as many high-quality rounds as possible. Rest as needed to keep form on point.',
    exercises: [
      {
        num: 1,
        name: 'Dumbbell Floor (or Bench) Press',
        reps: '10–15 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/floor-press-1586948016.jpg?resize=640:*',
        desc: 'Lay flat on your back with knees bent and feet flat on the ground. Press the weights above you, locking out your elbows (A). Lower them slowly until your upper arms are resting on the floor (B), close to your body. Pause here before explosively pressing back up. If you have a bench, use it.'
      },
      {
        num: 2,
        name: 'Bent-Over Row',
        reps: '10–15 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/bent-over-row-1590133418.jpg?resize=640:*',
        desc: 'Stand tall with dumbbells at your sides. Hinge forward until your torso is almost parallel to the ground and allow the dumbbells to hang just below your knees (A). Maintaining a flat back, row both dumbbells towards your hips (B), squeeze your shoulder blades together and lower under control before repeating.'
      },
      {
        num: 3,
        name: 'Front Squat',
        reps: '15–20 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/squat-1641984489.png?resize=640:*',
        desc: 'Clean your dumbbells onto the front of your shoulders (A). Drop into a front squat by pushing your hips back and bending at the knees until your thighs pass parallel to the ground (B), then drive back up explosively. Keep those dumbbells secured high, with a strong, upright torso throughout.'
      },
      {
        num: 4,
        name: 'Split Squat Jump',
        reps: '20 reps (total)',
        img: 'https://hips.hearstapps.com/hmg-prod/images/split-lunge-jump-1586446783.jpg?resize=640:*',
        desc: 'Step one foot backward and sink into a deep lunge with your rear knee lightly touching the floor (A). Explode upward, jumping into the air and switching legs mid-jump (B) to land in a lunge with the opposite leg forward. Alternate legs each rep. Keep this as fast-paced as possible, maximising the height of each jump.'
      }
    ]
  },
  {
    id: 'day2',
    label: 'Day 2',
    title: 'Day Two (W1/D2)',
    subtitle: '4 exercises · 30 min AMRAP',
    description: 'As with day one, perform a thorough warm-up and work through as many rounds as possible in 30 minutes, recording your efforts for each movement.',
    exercises: [
      {
        num: 1,
        name: 'Push Press',
        reps: '8–12 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/push-press-1587031079.jpg?resize=640:*',
        desc: 'Clean your dumbbells onto your shoulders, palms facing in. Take a breath and create tension in your core (A). Dip at the knees and use your legs to help press your dumbbells overhead (B). Lower with a controlled tempo to your shoulders and repeat. If the weights feel light, skip the leg drive and focus on a strict shoulder press.'
      },
      {
        num: 2,
        name: 'High Pull',
        reps: '8–12 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/dumbbell-high-pull-1642170639.jpg?resize=640:*',
        desc: 'Stand tall with dumbbells at your waist, in front of your body (A). Keeping your core tight, hinge forward slightly before explosively standing back upright and pulling the dumbbells up towards your chin, driving your elbows up and back (B). Slowly lower back down under complete control. Avoid simply dropping the weights.'
      },
      {
        num: 3,
        name: 'Dumbbell Deadlift',
        reps: '10–15 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/db-deadlift-1676549341.jpeg?resize=640:*',
        desc: 'With your dumbbells on the floor just outside your feet, hinge down and grip them with a flat back and neutral spine (A). Engage your lats and stand upright, pushing the ground away with your feet, keeping your chest up and back flat throughout (B). Lower them back to the ground in a hinging motion and repeat. Don\'t rush — slower and steady wins.'
      },
      {
        num: 4,
        name: 'Jump Squats',
        reps: '20 reps',
        img: 'https://hips.hearstapps.com/menshealth-uk/main/gallery/32423/2Squat-Jump__resized.jpg?resize=640:*',
        desc: 'Lean slightly forward as you squat (A), then explode up, jumping as high as you can (B). Cushion your landing with bent legs, then sink immediately back into another squat and repeat. Aim for maximum possible height on every rep, even if that means pausing for a quick breath. We\'re looking to produce power here, not simply go through the motions.'
      }
    ]
  },
  {
    id: 'day3',
    label: 'Day 3',
    title: 'Day Three (W1/D3)',
    subtitle: '4 exercises · 30 min AMRAP',
    description: 'Perform a thorough warm-up and work through as many rounds as possible in 30 minutes, recording your efforts for each movement.',
    exercises: [
      {
        num: 1,
        name: 'Press-Up on Dumbbells',
        reps: '10 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/press-up-on-db-1590133140.jpg?resize=640:*',
        desc: 'Assume a long-arm plank position with your core tight and hands below your shoulders stacked on top of your dumbbells (A). Bend your elbows to bring your chest to the floor (B). Keep your elbows close to your body as you push back up explosively.'
      },
      {
        num: 2,
        name: 'Renegade Row',
        reps: '10 each side (20 total)',
        img: 'https://hips.hearstapps.com/hmg-prod/images/renegade-row-1590132924.jpg?resize=640:*',
        desc: 'Keep your hands on your bells and midline tight (A). Shifting your weight onto your left hand, row the right dumbbell towards your hip (B). Pause briefly, then lower the weight under control. Repeat on your left side. Each row equals one rep.'
      },
      {
        num: 3,
        name: 'Tempo Goblet Squat',
        reps: '10 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/goblet-squat-1586253667.jpg?resize=640:*',
        desc: 'Hold a single dumbbell close to your chest (A). Sink your hips back and slowly over a count of four seconds descend into a squat (B). Your elbows should come in between your knees at the bottom. Drive back up explosively. Repeat. Pay attention to that tempo — it matters.'
      },
      {
        num: 4,
        name: "Burpee Over 'Bells",
        reps: '10 reps',
        img: 'https://hips.hearstapps.com/hmg-prod/images/burpee-over-dumbbell-1642170684.jpg?resize=640:*',
        desc: 'With both dumbbells on the floor next to you, step back and hit the deck into a press-up position. Lower your body until your chest touches the floor (A). Stand back up and jump powerfully over the dumbbells (B) — driving through your hips when you take off. Land and immediately drop to the floor and repeat. The dumbbells keep you accountable for the height of each jump.'
      }
    ]
  }
];

// ── State ─────────────────────────────────────────────────────────────────────
let currentView = 'home';
let currentWorkout = null;
let timerInterval = null;
let timerSeconds = 30 * 60;
let timerRunning = false;
let timerTotal = 30 * 60;
let scores = JSON.parse(localStorage.getItem('db-scores') || '{}');

// ── DOM Refs ──────────────────────────────────────────────────────────────────
const views = {
  home:    document.getElementById('view-home'),
  workout: document.getElementById('view-workout'),
  timer:   document.getElementById('view-timer'),
};
const tabBtns = document.querySelectorAll('.tab-btn');

// ── Navigation ────────────────────────────────────────────────────────────────
function showView(name) {
  currentView = name;
  Object.entries(views).forEach(([k, el]) => {
    el.classList.toggle('active', k === name);
  });
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === name);
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.view === 'workout' && !currentWorkout) return;
    showView(btn.dataset.view);
  });
});

// ── Home View ─────────────────────────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById('day-grid');
  grid.innerHTML = WORKOUTS.map(w => `
    <div class="day-card" data-id="${w.id}" role="button" tabindex="0" aria-label="Open ${w.title}">
      <span class="day-badge">${w.label}</span>
      <div class="day-info">
        <h3>${w.title}</h3>
        <p>${w.subtitle}</p>
      </div>
      <span class="day-arrow">›</span>
    </div>
  `).join('');

  grid.querySelectorAll('.day-card').forEach(card => {
    const open = () => openWorkout(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}

// ── Workout View ──────────────────────────────────────────────────────────────
function openWorkout(id) {
  currentWorkout = WORKOUTS.find(w => w.id === id);
  renderWorkout();
  showView('workout');
}

function renderWorkout() {
  const w = currentWorkout;
  const container = document.getElementById('workout-content');

  container.innerHTML = `
    <div class="workout-header">
      <button class="back-btn" id="back-btn" aria-label="Back">‹</button>
      <div class="workout-header-text">
        <h2>${w.title}</h2>
        <p>${w.subtitle}</p>
      </div>
    </div>

    <div class="amrap-banner">
      <span class="amrap-icon">⏱</span>
      <div>
        <strong>30-Minute AMRAP</strong>
        <span>${w.description}</span>
      </div>
    </div>

    <div class="exercise-list">
      ${w.exercises.map(ex => renderExerciseCard(ex, w.id)).join('')}
    </div>

    <div class="score-section" id="score-section">
      <h3>📊 Round Score Tracker</h3>
      ${w.exercises.map(ex => `
        <div class="score-row">
          <label for="score-${w.id}-${ex.num}">${ex.num}. ${ex.name}</label>
          <input
            class="score-input"
            id="score-${w.id}-${ex.num}"
            type="number"
            min="0"
            placeholder="0"
            value="${scores[w.id]?.[ex.num] ?? ''}"
            aria-label="Reps for ${ex.name}"
          >
        </div>
      `).join('')}
      <div class="score-total">
        <span>Total reps</span>
        <strong id="score-total-${w.id}">0</strong>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => showView('home'));

  // Read-more toggles
  container.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const desc = btn.previousElementSibling;
      const collapsed = desc.classList.toggle('collapsed');
      btn.textContent = collapsed ? 'Read more' : 'Show less';
    });
  });

  // Score inputs
  container.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('input', () => updateScore(w.id));
  });

  updateScore(w.id);
}

function renderExerciseCard(ex, workoutId) {
  return `
    <div class="exercise-card">
      <div class="exercise-img-wrap">
        <img
          src="${ex.img}"
          alt="${ex.name}"
          loading="lazy"
          class="loading"
          onload="this.classList.remove('loading')"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%231a1a1a%22 width=%22400%22 height=%22300%22/><text fill=%22%23555%22 font-family=%22sans-serif%22 font-size=%2218%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Image unavailable</text></svg>'"
        >
        <span class="exercise-num">${ex.num}</span>
      </div>
      <div class="exercise-body">
        <div class="exercise-name">${ex.name}</div>
        <span class="exercise-reps">${ex.reps}</span>
        <p class="exercise-desc collapsed">${ex.desc}</p>
        <button class="read-more-btn">Read more</button>
      </div>
    </div>
  `;
}

function updateScore(workoutId) {
  const w = WORKOUTS.find(x => x.id === workoutId);
  if (!scores[workoutId]) scores[workoutId] = {};
  let total = 0;
  w.exercises.forEach(ex => {
    const input = document.getElementById(`score-${workoutId}-${ex.num}`);
    if (input) {
      const val = parseInt(input.value) || 0;
      scores[workoutId][ex.num] = val;
      total += val;
    }
  });
  const totalEl = document.getElementById(`score-total-${workoutId}`);
  if (totalEl) totalEl.textContent = total;
  localStorage.setItem('db-scores', JSON.stringify(scores));
}

// ── Timer View ────────────────────────────────────────────────────────────────
const CIRCUMFERENCE = 2 * Math.PI * 90; // r=90

function renderTimer() {
  const ring = document.getElementById('timer-ring');
  if (ring) ring.style.strokeDasharray = CIRCUMFERENCE;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const display = document.getElementById('timer-time');
  if (display) display.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

  const ring = document.getElementById('timer-ring');
  if (ring) {
    const progress = timerSeconds / timerTotal;
    ring.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  }

  const startBtn = document.getElementById('timer-start');
  if (startBtn) startBtn.textContent = timerRunning ? 'Pause' : (timerSeconds < timerTotal ? 'Resume' : 'Start');
}

function startTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  } else {
    if (timerSeconds === 0) resetTimer();
    timerRunning = true;
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        updateTimerDisplay();
        // Vibrate on completion if supported
        if ('vibrate' in navigator) navigator.vibrate([300, 100, 300]);
      }
    }, 1000);
  }
  updateTimerDisplay();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = timerTotal;
  updateTimerDisplay();
}

function setPreset(minutes) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTotal = minutes * 60;
  timerSeconds = timerTotal;
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.mins) === minutes);
  });
  updateTimerDisplay();
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderHome();
renderTimer();
showView('home');

document.getElementById('timer-start').addEventListener('click', startTimer);
document.getElementById('timer-reset').addEventListener('click', resetTimer);
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => setPreset(parseInt(btn.dataset.mins)));
});

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
