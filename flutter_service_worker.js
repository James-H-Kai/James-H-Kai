'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2bac3f9f4ad4e37089acc25e6088986b",
"index.html": "9a9e6f282aa27bf04b88c7c00ae24e95",
"/": "9a9e6f282aa27bf04b88c7c00ae24e95",
"main.dart.js": "62a85b4c2cc4cd2af5c8385109cd629c",
"favicon.png": "a89f9c4c436558f747f244807a9d03d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "33b43bce9608e97fbcb995241a6daf2a",
".git/config": "f3567bc388503b15c71f25aa604b2451",
".git/objects/66/5048fadf6b11514a1e8b7cf939103e31930852": "b090e92bb78ad5d340756c0013f55fdb",
".git/objects/3b/57c4e817de86a05a16a07077e10b85777a44b2": "797a28e281af394cb8b37cbdde849636",
".git/objects/a3/35d4351b5cb8d2d80196cba1284c117f913ec0": "00dc70e2ef73caa84ea64120d7215404",
".git/objects/b5/d97c61701aa01d0fecb4b7440f95edf1cf7bb0": "cc0bf6e61fe1fd38a6093e835f54c806",
".git/objects/bc/5f0e2d7df2725c4c10c183124085f34be17bac": "c3e6e9a7487807f7b10ef71fb0a74ae6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/fb08f7b0c2a7a539a0eab503811febe6b713b5": "ba29bf205e8ecdc8ef9a531efc7df4e2",
".git/objects/42/0146f8b0ddd236550240ae3b0b6db7b9b19bb7": "f87cd2ba538bfb84f5b44259eadf8086",
".git/objects/7b/d2a01619698a0f849764aa3193f66781498a45": "a0bef77d95b432a816f3f1e89258e945",
".git/objects/19/7761462daf8abea571f2230febaefab3e2539b": "2a8130b54e1f668d537fc2084855b4d3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/f26ef9419fbb2c8b0eb9c2d15a22f33342ebdc": "2ec0b2d98f4c8359810bdab9f29492ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/da9008a70a7d6140c216f933c3cf12c40de15f": "f5480997e4005dce0bc04ba3cbc0d30c",
".git/objects/6e/d6b58ca1b11231b37fa1c489abe724c8876157": "c8576d5b48060757f288aeb837523354",
".git/objects/96/ca5eadf8fcc7c6cc42f567d5fc4e7c7b0a47cc": "1d71219bf429d96bf31fad4acb157f6e",
".git/objects/01/882cffa99bd4758a6a6660afd51cd20d2da1cf": "338dbc660f768993346be95ca22d41f4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d2/f559c73c4b648c260cb9e921e952a5c9f07ce5": "db3786ba07fbe92eec0d189b7521e7ca",
".git/objects/d2/9e18e3f28e4786705aa4848c467fafc93ffd1a": "e581a7f089ca2db398761e2f8202f720",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/cd/e279ab3faeee2d3733ecfa444bf3262f0e35e9": "30a063ab24cc9f6cd72d94ef143719fc",
".git/objects/f8/0028ea84b4d273dd9c7fde89c4cf228566f83d": "96c3c4c0a14210e41e7ccd0c04afb3e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/3f94a851711c1ae0a9c52953c8b6fdaf8e5163": "2263afa87521ef24da48f20731d19286",
".git/objects/23/5963a892079a8aa57c69315f7203a7195f4abe": "9d773b06a76e190370b45249d86dc251",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/91ed0cf3b7f1ad401e73e15cf613d459cdabd5": "d65c59d6e36d7d66319e121fe5df5dba",
".git/objects/8c/0bf9fd6ad3b86e4e9525dfe5624ce63f68a6cf": "93b1a5ed8a4b9c987b7dee80323dd674",
".git/objects/8b/96e4fc183b46eff861ff2d4156e2b7772a5319": "e7870dfc919128535b4d2111bdfcf9a2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5bb2ceef41b23c6240a6a6bfd804d3f",
".git/logs/refs/heads/main": "0b83b82d56c6283ed9eedd21f22497eb",
".git/logs/refs/remotes/origin/main": "54da1a563e88855f96242a486f324d7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "0699852f054f885f2e25097e4871907f",
".git/refs/remotes/origin/main": "0699852f054f885f2e25097e4871907f",
".git/index": "71dc8abe09e7bde460645a691440b54b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "9a929dc52cdcb99b173e5183a3b7571c",
"assets/AssetManifest.json": "e12b6daab0938afe2c1ca5f5fbfb217d",
"assets/NOTICES": "c3e8c0a4f0696cad96971daa736afc62",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/short_words.txt": "2c7416619931f1ee93efd82d6ac2041c",
"assets/assets/claire_words.txt": "11763ea6a4798d1d30a80dfd8e0a1e79",
"assets/assets/words.txt": "a9d8803321021b95128f9351f6b022d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
