(() => {
  const START_MS = 80, STEP_MS = 90;
  let timers = [];
  const enter = (page) => {
    timers.forEach(clearTimeout);
    document.querySelectorAll('.rvp.is-on').forEach((el) => { if (!page.contains(el)) el.classList.remove('is-on'); });
    timers = [...page.querySelectorAll('.rvp:not(.is-on)')].map((el, k) => setTimeout(() => el.classList.add('is-on'), START_MS + STEP_MS * k));
  };
  document.addEventListener('pagechange', (e) => enter(e.detail.page));
  const first = document.querySelector('.page');
  if (first) enter(first);
})();
