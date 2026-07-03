/* ============================================================
   BIURO POSTĘPOWAŃ TOWARZYSKICH — service worker
   Strategia: całość akt przechowuje się w archiwum urządzenia
   (cache-first). Aplikacja działa w pełni bez łączności.
   Przy zmianie wersji należy podnieść numer archiwum poniżej.
   ============================================================ */
const ARCHIWUM = "bpt-archiwum-v3";
const AKTA = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg"
];

/* Instalacja: złożenie kompletu akt do archiwum */
self.addEventListener("install", (zdarzenie) => {
  zdarzenie.waitUntil(
    caches.open(ARCHIWUM).then((archiwum) => archiwum.addAll(AKTA))
  );
  self.skipWaiting();
});

/* Aktywacja: brakowanie archiwów przestarzałych */
self.addEventListener("activate", (zdarzenie) => {
  zdarzenie.waitUntil(
    caches.keys().then((klucze) =>
      Promise.all(klucze.filter((k) => k !== ARCHIWUM).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Pobranie: najpierw archiwum, w ostateczności sieć */
self.addEventListener("fetch", (zdarzenie) => {
  if (zdarzenie.request.method !== "GET") return;
  zdarzenie.respondWith(
    caches.match(zdarzenie.request, { ignoreSearch: true }).then((odpis) => {
      if (odpis) return odpis;
      return fetch(zdarzenie.request).then((odpowiedz) => {
        const kopia = odpowiedz.clone();
        caches.open(ARCHIWUM).then((archiwum) => archiwum.put(zdarzenie.request, kopia));
        return odpowiedz;
      });
    })
  );
});
