const VERSION = "v1";

const folders = [
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4",
];

self.addEventListener("install", (event) => {
    console.log('Instalando Sevice Worker');    
    event.waitUntil(
        caches.open(VERSION)
            .then(cache => {
                cache.addAll(folders);
            })
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    // GET
    if (request.method !== "GET") {
        return;
    }

    // Buscar en cache
    event.respondWith(
        caches.match(request)
        .then(cachedResponse => (cachedResponse ? cachedResponse : caches.match(offlinePage)))
        .catch( () => caches.match('error.html'))
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter( key => key !== VERSION)
                        .map(key => caches.delete(key))
                )
            })
    )
})