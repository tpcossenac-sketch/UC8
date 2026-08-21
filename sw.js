const CACHE_NAME = "meu-disney-v1";

const arquivos = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/script.js"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(arquivos);
            })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(function(cachesExistentes) {
            return Promise.all(
                cachesExistentes.map(function(cache) {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(resposta) {
                if (resposta) {
                    return resposta;
                }

                return fetch(event.request);
            })
    );
});