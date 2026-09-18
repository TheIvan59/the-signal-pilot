const CACHE = 'the-signal-shell-v1';
const shell = ['./', './index.html', './styles.css', './status.css', './app.js', './manifest.webmanifest'];

self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(shell))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (new URL(request.url).pathname.endsWith('/data/live-edition.json')) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
