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
    "url": "404.html",
    "revision": "35de61b8687cc09539c4db4fc2cdc9be"
  },
  {
    "url": "assets/css/0.styles.b5ca89be.css",
    "revision": "660866d5be8d119659a303b9e781c0ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fd993560.js",
    "revision": "42ce4f13c1cb9d8a8228b99d80d7b4fb"
  },
  {
    "url": "assets/js/11.32e85c72.js",
    "revision": "5e745836e5ee50ac0caa94e1b0144e86"
  },
  {
    "url": "assets/js/12.a89d82d2.js",
    "revision": "6397f01c3305316ad4d11531559fbc6e"
  },
  {
    "url": "assets/js/13.33ce9989.js",
    "revision": "2c988edc3374ed544527dd520cb8e273"
  },
  {
    "url": "assets/js/14.db2e407d.js",
    "revision": "66fb750ead4b280a85c9c29bdd05f0c7"
  },
  {
    "url": "assets/js/15.a7cb1db8.js",
    "revision": "46f8f25df6c73278162e5e6c95d43157"
  },
  {
    "url": "assets/js/16.c8c7827f.js",
    "revision": "a2fa09d81e1369e53884ba10b03d3f93"
  },
  {
    "url": "assets/js/17.ff654325.js",
    "revision": "1ce9d8da6e97603a87b48b20a7de4245"
  },
  {
    "url": "assets/js/18.fe26ed74.js",
    "revision": "ab11f709d26d08fef8a96b49c82c8854"
  },
  {
    "url": "assets/js/19.b2f3f25f.js",
    "revision": "ce5324afe45637fdc463fa87c57c52df"
  },
  {
    "url": "assets/js/20.c8c96d15.js",
    "revision": "6915a97ed7a082ba1692b49510a1d3ab"
  },
  {
    "url": "assets/js/21.049d6a34.js",
    "revision": "3550a8113d15c79ea7c08b7d9c192d3c"
  },
  {
    "url": "assets/js/22.ced2acdb.js",
    "revision": "62f3eafa4c140e675608646a82ed3f9c"
  },
  {
    "url": "assets/js/23.52f23a85.js",
    "revision": "d13e44774faf2372b1581050932dae92"
  },
  {
    "url": "assets/js/24.a4b3463b.js",
    "revision": "3ea80ed4b3ea83f7edd4356aa80a341a"
  },
  {
    "url": "assets/js/25.683a4fea.js",
    "revision": "2d386970f00c1dd655d73c89c1ec33e8"
  },
  {
    "url": "assets/js/26.d5d7e3a0.js",
    "revision": "c0c386d34347eb31a87f36faa4b54a7f"
  },
  {
    "url": "assets/js/27.22730dbc.js",
    "revision": "361f25b6b5715b850adc0693667877ae"
  },
  {
    "url": "assets/js/28.0353aeb0.js",
    "revision": "6b7ea33e7104fd06ba1cc145750a0c6b"
  },
  {
    "url": "assets/js/29.7cb9c5ed.js",
    "revision": "265a3e81d5b040158dc2202be9b10c97"
  },
  {
    "url": "assets/js/3.2d8213a3.js",
    "revision": "ef24fa52faa37443a664ef726d64b098"
  },
  {
    "url": "assets/js/30.5f567b27.js",
    "revision": "549ac6ae4a39132b8919720282426e0a"
  },
  {
    "url": "assets/js/31.1c54437e.js",
    "revision": "858f675009bc92eed62a6d604bc9330a"
  },
  {
    "url": "assets/js/32.0af00bbc.js",
    "revision": "99cb690704bb6da7afb6f7b8eb003523"
  },
  {
    "url": "assets/js/33.31925ff6.js",
    "revision": "2aac396cc018651bc1ccc10e12ca98ce"
  },
  {
    "url": "assets/js/34.831c9fe4.js",
    "revision": "23035ecff52910a01c913f223de9b0a8"
  },
  {
    "url": "assets/js/35.1666efe9.js",
    "revision": "ba661e4c3bb45ca1541c65c6f62bc5b8"
  },
  {
    "url": "assets/js/36.02732a60.js",
    "revision": "f9dd46ddf355989d068921e4f10accf3"
  },
  {
    "url": "assets/js/37.1fb6e0ed.js",
    "revision": "ccd617e9ad8c0d04dc4779d3db735e0e"
  },
  {
    "url": "assets/js/38.0533e81a.js",
    "revision": "13a72b8107ca40311a5621e81112eb8d"
  },
  {
    "url": "assets/js/39.3f3ded7c.js",
    "revision": "487f8d5bd9c5c49b045e92f653541da9"
  },
  {
    "url": "assets/js/4.c9223272.js",
    "revision": "1d861c3f31f2c3d35f30a4273a190294"
  },
  {
    "url": "assets/js/40.383e01c0.js",
    "revision": "08b3e17d9af2b3ba06d5ecc32339a3a3"
  },
  {
    "url": "assets/js/41.a86e165e.js",
    "revision": "993cf86a30552e02b74a3c4d97f68853"
  },
  {
    "url": "assets/js/5.50275e23.js",
    "revision": "987ea56314016160a5432eebd5d4c7b3"
  },
  {
    "url": "assets/js/6.728859f4.js",
    "revision": "ddf9e8020b7c1f1e25353b147f8469e4"
  },
  {
    "url": "assets/js/7.0f0b4032.js",
    "revision": "b296eeae4a4c79e41375788336183466"
  },
  {
    "url": "assets/js/8.92a6ca10.js",
    "revision": "d330b7ff6d23cd1237904f88daeb0b82"
  },
  {
    "url": "assets/js/9.7c48951a.js",
    "revision": "722cf6286555589fb81c6ee88782eb4d"
  },
  {
    "url": "assets/js/app.2a7cc532.js",
    "revision": "55cce19d277be027c131e9c852ac9c09"
  },
  {
    "url": "assets/js/vendors~docsearch.008c7241.js",
    "revision": "1b77e25d42f79fc9f6aaa72ef7b833b3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "49f007d016bd02e4739e5c528c7420c8"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "19d6a75fb707c04a3a013f3a6c842472"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "e9a055f628d485925f6c7bf7996633fd"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "873134440ca5ce053194e8554052e7dc"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b5f627aac3e0dfac1a513fd96efd69fb"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7dc649f464e97cef5a21ed3a0179b1e7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4906fd9c88188430b0a8590111d9bd19"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "ae459181e2ae266417f3941e391f1d7c"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "61c78ad8491fda2f65badf22fd7408f3"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "500805c24ace632854875e50b226eb13"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "179910e55b4cff733b173260482f6c40"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ba7926b38f9b069faa4cb5b432dda459"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "16f1f45c05b2485f868608177e4262f8"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "67d059e892c46efb96942b27dda26d6d"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "9e0fc06740545ed33a9e8056ba7e5897"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5e0945dc2b86daaa831e452d0cbdc59d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a600929bb964514893ce16fbff0a84cb"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "6ffe7871fe03a12fe822bf6b8bb6100d"
  },
  {
    "url": "resources/books.html",
    "revision": "624641cae9655ccd45a69814db3ada3c"
  },
  {
    "url": "resources/community.html",
    "revision": "14d42cf51c90670cf715f146581f4906"
  },
  {
    "url": "resources/conferences.html",
    "revision": "0b97241a183edadad20fb2cc742c6182"
  },
  {
    "url": "resources/courses.html",
    "revision": "83b8bacab8e69550e62565b40255f90d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "f0847310b2e266f6144f3c3150d18857"
  },
  {
    "url": "resources/examples.html",
    "revision": "37089a84f77a1fe975fd8b44cebef8cf"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "124c5cbe94796842d1ea760a0aa1e9bc"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "faacab80fcb9cdae6ea595c56bce1226"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f920d48eabbe95ed4b786d7c91686e06"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "526aa7c072a88904a02563f4e42108cc"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "b43eceba0f07a6e70b417e97260897cf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a826d071e58efbcac6701a2b3565150c"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "2023484bc94603a7892aa641f3c73ca1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
