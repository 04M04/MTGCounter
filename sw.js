/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "418b6ddefc13c857a2ee3f68d2b98c28"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "4aa7bc5a84bfe55abccce145f0b3502c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "64b08d1e7a14366abb1edbe4b0c61c8f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "fa6aae57f47691a0a416f994ffaa0caf"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "480177d5f4a4310437909e8ae604783b"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "16917b1e53889072e7014d33a995a322"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "16917b1e53889072e7014d33a995a322"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "56d98336dfb0bef4356b82f0d825e6e8"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "7af25ad7e181f66a7d5064ce16aad6f1"
  },
  {
    "url": "index.html",
    "revision": "cbe9e7c4933c6a306a9c4f607827b4ef"
  },
  {
    "url": "js/app.js",
    "revision": "b6c7b6a1b2651e5af8858817228b41cf"
  },
  {
    "url": "manifest.json",
    "revision": "543bb0213d487349ad192daac2e38d94"
  },
  {
    "url": "package-lock.json",
    "revision": "8f70fa8000e12e6f987adf00a00a94fc"
  },
  {
    "url": "res/04M04_Logo_Round.png",
    "revision": "f869147aabb723bea831b3dab5caa6b3"
  },
  {
    "url": "res/MagicColorsWP.jpg",
    "revision": "d2efe4fb6eb6aa439df2935283a4e0d3"
  },
  {
    "url": "res/MTGIcon.png",
    "revision": "7ac030e26a66418096359e61031e85f7"
  },
  {
    "url": "res/MTGLabelWP.jpg",
    "revision": "4bfe60f29593650475aa8aa2612c67e3"
  },
  {
    "url": "res/WastelandIcon.png",
    "revision": "1701cbf096d19f3341877f780c3d0b23"
  },
  {
    "url": "res/WastelandIconShadow.png",
    "revision": "a33094377ad5ea4548f563e818d438ec"
  },
  {
    "url": "res/WastelandIconSoft.png",
    "revision": "930a2404ce0e3988705c1a0245c7f8ec"
  },
  {
    "url": "workbox-config.js",
    "revision": "25f4d45795615710bed045dd82df1a35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
