var cacheName = 'pwa-piac-cache';
var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/js/main.js',
    '/images/pwa-icon-128.png',
    '/images/pwa-icon-192.png',
    '/images/pwa-icon-512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
