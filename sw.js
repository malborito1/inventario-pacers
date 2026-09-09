// Service worker mínimo, requerido por Chrome/Android para instalar la app
// como PWA real (aparece en el cajón de aplicaciones, no solo como acceso directo).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough: no cachea nada, solo deja pasar la solicitud a la red.
  event.respondWith(fetch(event.request));
});
