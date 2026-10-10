(() => {
  'use strict';
  const data = window.SPATIALHARNESS;
  const mainTabs = [...document.querySelectorAll('[data-main]')];
  const methodTabs = [...document.querySelectorAll('[data-policy]')];
  const taskTabs = [...document.querySelectorAll('[data-task]')];
  const status = document.querySelector('[data-status]');
  let activeMain = 'overview';
  let activeTask = 'stack';
  let activeMethod = 'ours';
  const copy = {
    success: 'Success', failure: 'Failure', count: (s, n) => `${s} / ${n} successful trials`,
    steps: n => `${n} steps`, pendingSteps: 'Awaiting author confirmation',
    gallery: (task, method, count) => `${task} · ${method} · ${count} selected runs`,
    video: (task, run, result) => `${task}, ${run}, ${result}, 8× speed`,
    mediaError: 'The video could not load. Check the local media and refresh the page.',
    pendingVideo: 'Video processing', mainStatus: name => `Showing ${name}`,
    demoStatus: (task, method, rate, count) => `Showing all ${count} ${method} runs for ${task}. Full-experiment success rate: ${rate}%.`
  };
  const text = (selector, value) => { document.querySelector(selector).textContent = value; };
  function markSelected(tabs, attribute, selected) {
    tabs.forEach(tab => {
      const active = tab.dataset[attribute] === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  }
  function pauseVideos(root = document) { root.querySelectorAll('video').forEach(video => video.pause()); }
  function selectMain(name) {
    if (name === activeMain) return;
    pauseVideos();
    activeMain = name;
    markSelected(mainTabs, 'main', name);
    mainTabs.forEach(tab => { document.getElementById(tab.getAttribute('aria-controls')).hidden = tab.dataset.main !== name; });
    text('[data-footer-page]', mainTabs.find(tab => tab.dataset.main === name).textContent.trim());
    status.textContent = copy.mainStatus(name);
  }
  function updateDemosCopy() {
    const task = data.tasks[activeTask];
    const group = task.methods[activeMethod];
    const method = data.methods[activeMethod];
    const name = task.name;
    const t = copy;
    text('[data-setting-model]', method.model);
    text('[data-setting-input]', method.observations);
    const rate = document.querySelector('[data-setting-rate]');
    const percent = document.createElement('strong');
    const percentText = (group.successes / group.total * 100).toFixed(2);
    percent.textContent = `${percentText}%`;
    const count = document.createElement('span');
    count.className = 'stat-detail'; count.textContent = t.count(group.successes, group.total);
    rate.replaceChildren(percent, count);
    const steps = document.querySelector('[data-setting-steps]');
    steps.textContent = group.executableSteps ? t.steps(group.executableSteps.value) : t.pendingSteps;
    steps.classList.toggle('pending-value', !group.executableSteps);
    text('[data-task-name]', name);
    text('[data-criterion]', task.criterion);
    text('[data-run-count]', `${group.runs.length} SELECTED RUNS`);
    text('[data-gallery-note]', `Success rates use all 15 trials in each group. The ${group.runs.length} displayed runs use the nearest achievable success/failure ratio, retaining their original outcome labels.`);
    document.querySelector('.gallery').setAttribute('aria-label', t.gallery(name, method.name, group.runs.length));
    document.querySelectorAll('.clip').forEach((figure, index) => {
      const run = group.runs[index];
      const result = t[run.outcome];
      figure.querySelector('.outcome').textContent = result;
      figure.querySelector('video')?.setAttribute('aria-label', t.video(name, run.label, result));
      const error = figure.querySelector('.media-error');
      if (error) error.textContent = t.mediaError;
      const pending = figure.querySelector('.video-pending');
      if (pending) pending.textContent = t.pendingVideo;
    });
    status.textContent = t.demoStatus(name, method.name, percentText, group.runs.length);
  }
  function renderDemos() {
    const group = data.tasks[activeTask].methods[activeMethod];
    const gallery = document.querySelector('.gallery');
    pauseVideos(gallery);
    markSelected(methodTabs, 'policy', activeMethod);
    markSelected(taskTabs, 'task', activeTask);
    document.getElementById('method-content').setAttribute('aria-labelledby', `select-${activeMethod}`);
    document.getElementById('task-content').setAttribute('aria-labelledby', `task-${activeTask}`);
    const cards = group.runs.map(run => {
      const figure = document.createElement('figure'); figure.className = 'clip'; figure.dataset.run = run.originalRun;
      if (run.ready) {
        const video = document.createElement('video');
        video.controls = true; video.playsInline = true; video.muted = true;
        video.preload = 'metadata'; video.poster = run.poster; video.src = run.video;
        video.addEventListener('error', () => {
          if (figure.querySelector('.media-error')) return;
          const message = document.createElement('p'); message.className = 'media-error';
          message.textContent = copy.mediaError; figure.append(message);
        });
        figure.append(video);
      } else {
        const pending = document.createElement('div'); pending.className = 'video-pending'; figure.append(pending);
      }
      const caption = document.createElement('figcaption');
      const label = document.createElement('span'); label.className = 'run-label'; label.textContent = run.label;
      const outcome = document.createElement('span'); outcome.className = `outcome ${run.outcome}`;
      caption.append(label, outcome); figure.append(caption); return figure;
    });
    gallery.replaceChildren(...cards);
    updateDemosCopy();
  }
  mainTabs.forEach(tab => tab.addEventListener('click', () => selectMain(tab.dataset.main)));
  methodTabs.forEach(tab => tab.addEventListener('click', () => {
    if (activeMethod === tab.dataset.policy) return;
    activeMethod = tab.dataset.policy; renderDemos();
  }));
  taskTabs.forEach(tab => tab.addEventListener('click', () => {
    if (activeTask === tab.dataset.task) return;
    activeTask = tab.dataset.task; renderDemos();
  }));
  [mainTabs, methodTabs, taskTabs].forEach(tabs => tabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault(); tabs[next].focus(); tabs[next].click();
  })));
  document.querySelector('[data-go-demos]').addEventListener('click', () => {
    selectMain('demos'); document.getElementById('nav-demos').focus(); window.scrollTo({top: 0});
  });
  const codeLink = document.querySelector('[data-code-link]');
  if (data.codeUrl && codeLink) {
    codeLink.href = data.codeUrl;
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseVideos(); });
  renderDemos();
})();
