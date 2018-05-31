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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "d74ba4a74740778ef244be1ec0a43aab"
  },
  {
    "url": "scripts/app.js",
    "revision": "53a5f56803803335067fbb70a41a550d"
  },
  {
    "url": "scripts/utils.js",
    "revision": "232444f1ab69fdf92a43c583fcb8bf7a"
  },
  {
    "url": "styles/app.css",
    "revision": "4a067d643106b17a4e1e294a63582950"
  },
  {
    "url": "styles/normalize.min.css",
    "revision": "877f174ba71fcbb4bd316accf30ab613"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
