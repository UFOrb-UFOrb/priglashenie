(() => {
  'use strict';
  // The personal code stays in the URL fragment and is never sent to Pages.
  const token = window.location.hash.slice(1);
  const event = document.documentElement.dataset.event;
  if (!/^[A-Za-z0-9_-]{43}$/.test(token)) return;
  if (!['venchanie', 'anniversary'].includes(event)) return;
  const destination = new URL('/i', 'https://45.138.157.9');
  destination.searchParams.set('event', event);
  destination.searchParams.set('cover', '1');
  destination.hash = token;
  const button = document.getElementById('open-invitation');
  button.href = destination.href;
  button.hidden = false;
  document.getElementById('personal-link-hint').hidden = true;
  window.location.replace(destination.href);
})();
