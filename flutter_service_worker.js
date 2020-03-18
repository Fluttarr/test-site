'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "39e7833af846fbe97eea00b40f1605c9",
"/assets/assets/edulytics-logo.png": "b9259c393c7270123b6fe6e77146a99c",
"/assets/assets/logovr.png": "22fce9f2f4c00db1be494f1619b35454",
"/assets/assets/openedx-2020-logo.png": "b03e264fa7ad8a0e779f50eaabe2db2b",
"/assets/assets/play.png": "9b9971a27a25e6d7acd422192de73339",
"/assets/assets/tree.png": "09f06849c652e52925fa1b8b6f1bd4b2",
"/assets/assets/vrilustration.png": "ea7d516fc55aee1afbd7a73fad128a92",
"/assets/FontManifest.json": "bac308e1a9b3af904b20332352b44f02",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/index.html": "53e0c9948a62c874f380a4706fb2f7f3",
"/main.dart.js": "e510631ec70d3d207b319b2b3edab55c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
