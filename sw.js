const CACHE_NAME = 'allnet-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.postimg.cc/QM3R8Qh6/Gemini-Generated-Image-z1xlfcz1xlfcz1xl-removebg-preview.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});