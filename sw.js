
const CACHE_NAME = "fitoflexivia-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/coach-contact.html",
  "/training-plan.html",
  "/manifest.json",
  "/background-fitoflexivia.png",
  "/icon-192x192.png",
  "/icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});
