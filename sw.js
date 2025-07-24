self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("fitoflexivia-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./برنامه ورزشی-fitoflexivia.html",
        "./برنامه تمرینی.html",
        "./ارتباط با مربی.html",
        "https://i.ibb.co/TMf9NFK/20250724-1909-Beach-Fitness-Branding-remix-01k0yhaqynf4xtjcbbr1k5rv0g.png",
        "fitoflexivia-icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});