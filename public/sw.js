const cacheName = "v1";
async function impl(e) {
    let cache = await caches.open(cacheName); // Cache megnyitása, async
    let cacheResponse = await cache.match(e.request); // Lookup
    if (cacheResponse) // Ha megvan
        return cacheResponse // Visszadjuk
    else {
        let networkResponse = await fetch(e.request); // Ha nincs meg, akkor elindítjuk a ténylegeshálózati lekérdezést
        cache.put(e.request, networkResponse.clone()) // Eltároljuk
        return networkResponse; // Visszadjuk
    }
}

async function notif(e, _self) {
    const text = e.data?.text() || "[NINCS ÜZENET]";
    const prom = _self.registration.showNotification("Chat Notification", {body: text, icon:"logo192.png"});
    e.waitUntil(prom);
}
self.addEventListener("fetch", e => e.respondWith(impl(e))); // Eseményre feliratkozás
self.addEventListener("push", e => notif(e, self));