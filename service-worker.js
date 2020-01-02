/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2017/05/14/170514-Myself/School.png","049e4faf8b695225433cbb8d292fbe54"],["2017/05/14/170514-Myself/buyaolian.jpg","588cae334e8d40e4444f1b229ff3224c"],["2017/05/14/170514-Myself/index.html","634b3ec502e66620d4eab15d23149908"],["2017/05/15/170515-Website/Pexels.png","0a0dd8b89fb49b12d93c885a8ab8f9ab"],["2017/05/15/170515-Website/Pexels2.png","db530c9246067e269ade9ed30a8c5bd9"],["2017/05/15/170515-Website/index.html","3d66f6c86fdf509b69ebf04d113f2716"],["2017/05/15/170515-Website/logo.jpg","1e5b21fec3292faf250ed48bba1983d8"],["2017/05/15/170515-Website/subhd.png","4a6d2f91c6553ab5e709da0cf8469b76"],["2017/05/20/170520-OpenGL配环境/container.jpg","108747f590a8d24590e2b1ed2605060a"],["2017/05/20/170520-OpenGL配环境/index.html","fefc2a84ee1de9530d04b9a3f4cf18dc"],["2017/05/20/170520-OpenGL配环境/实例.png","c959bf15bb483ffff1ef51a083cb21f0"],["2017/06/26/170627-Unity背包系统制作/GameManagerScript.png","4d9454e8e4222f8a56aef986a7fd5cf7"],["2017/06/26/170627-Unity背包系统制作/Hierarchy.png","5e50baf48b8aa143c5eed773f7394f4b"],["2017/06/26/170627-Unity背包系统制作/InventoryBackground.png","19950d3fd79db72a41cd6acd3ca24773"],["2017/06/26/170627-Unity背包系统制作/InventoryScript.png","464951bd31aa770bc7e36d78faaa694e"],["2017/06/26/170627-Unity背包系统制作/ItemImage.png","b40d7b9be69349ef2462d0e304b4aaa2"],["2017/06/26/170627-Unity背包系统制作/close_button.png","b1162ad174b4bb4726e34f0e349c03c8"],["2017/06/26/170627-Unity背包系统制作/frame.png","c96744250fb9d539f61fd5245f4d2b80"],["2017/06/26/170627-Unity背包系统制作/index.html","87e2ace10d2da6027761ce98a324ac29"],["2017/06/26/170627-Unity背包系统制作/红药.png","b2d6b2994742542d5b91971a998b7cd0"],["2017/06/26/170627-Unity背包系统制作/结果.png","b30eb75e9b0cf1bf00e34d05d957e3ac"],["2019/08/22/190822-MWH CE代码/index.html","47880893b5418588178224e0b651762a"],["2019/10/19/191001-马趴规则整理/index.html","be349c7ba03465481e9da7711c178401"],["archives/2017/05/index.html","7beecfcca782ef1bb826be962060311b"],["archives/2017/06/index.html","1b996c3e1bc3c7df386eb93ab361bfcb"],["archives/2017/index.html","34c503291b2192ab80bba36423649d55"],["archives/2019/08/index.html","ddc2672d22ff37e7de771bf8e97e2f58"],["archives/2019/10/index.html","6e8ea762ef8c1bdde2d0782fd8f0a9c1"],["archives/2019/index.html","638c0481a52913cc09ac06447b266ad0"],["archives/index.html","7db55486357898b5f2b12259997bee3e"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/index.html","622bb9584c588887bc1345f111151ca1"],["categories/实用工具/index.html","e1895feb9f797b6e383bd8b9630e2335"],["categories/杂谈/index.html","be00bedb1e076f44e3a39e587d2930be"],["categories/游戏/index.html","5d1ac8a4ae0808fd07c61560abce4534"],["categories/游戏/怪物猎人：世界/index.html","463224e2683a360b5b373f5dfed92810"],["categories/计算机技术/OpenGL/index.html","86d28f3a92cbae003b0e53060b7eae57"],["categories/计算机技术/Unity/index.html","9b98938f1377f70ce16ee1b276baacff"],["categories/计算机技术/index.html","3b6d204e235bac590726ef7f37cb362f"],["css/index.css","fbc80c80761f773ed2c505094186347a"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9e327f83972e74190feb9675e4323c91"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/favicon.png","14f766d6a4bb98ccb5b03605f55711ab"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["index.html","05d1f7451d48630c30a72ba3c2826fc8"],["js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","49db8bb1837909299a5b53af4be94e27"],["js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["link/index.html","50bbd7a1e749b42697ff72b41e8b0757"],["tags/OpenGL/index.html","da7aded0f8e9f9bbbb160a96e04950b0"],["tags/Unity/index.html","10e07b7f49327e064f991bc802a3702a"],["tags/index.html","669636df095a0dd4afc714139e599aa7"],["tags/工具/index.html","1a6afb3982271e1a24653317c6b51764"],["tags/怪物猎人：世界/index.html","fe880e39c2815216a6150a5ba4719d48"],["tags/推荐/index.html","253bda3efba74e61d7f49c0c9d393ef9"],["tags/杂谈/index.html","e3f4b153cd1d91d9d1959361ffd09401"],["tags/游戏/index.html","911b5f3e665061b39ff9e144638e6624"],["tags/游戏修改/index.html","acc7b88513c2b40db06b71250a7fe398"],["tags/游戏引擎/index.html","cc9b9493cd0e5e93e8ea6adeffb38efa"],["tags/背包系统/index.html","2df096bb81de9d05f719d6d90cb5ba36"],["tags/马里奥派对/index.html","6c52cecd915329cc02c3a40b4b944cfa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







