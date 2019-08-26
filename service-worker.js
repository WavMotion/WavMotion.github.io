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

var precacheConfig = [["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/14/170514-Myself/School.png","049e4faf8b695225433cbb8d292fbe54"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/14/170514-Myself/buyaolian.jpg","588cae334e8d40e4444f1b229ff3224c"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/14/170514-Myself/index.html","f261b04f1e5de2561044acd86dcbc511"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/15/170515-Website/Pexels.png","0a0dd8b89fb49b12d93c885a8ab8f9ab"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/15/170515-Website/Pexels2.png","db530c9246067e269ade9ed30a8c5bd9"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/15/170515-Website/index.html","fdcddc8977e39f12cb88e4091ccf040c"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/15/170515-Website/logo.jpg","1e5b21fec3292faf250ed48bba1983d8"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/15/170515-Website/subhd.png","4a6d2f91c6553ab5e709da0cf8469b76"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/20/170520-OpenGL配环境/container.jpg","108747f590a8d24590e2b1ed2605060a"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/20/170520-OpenGL配环境/index.html","98386983615169ba22e4899e3a238d75"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/05/20/170520-OpenGL配环境/实例.png","c959bf15bb483ffff1ef51a083cb21f0"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/GameManagerScript.png","4d9454e8e4222f8a56aef986a7fd5cf7"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/Hierarchy.png","5e50baf48b8aa143c5eed773f7394f4b"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/InventoryBackground.png","19950d3fd79db72a41cd6acd3ca24773"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/InventoryScript.png","464951bd31aa770bc7e36d78faaa694e"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/ItemImage.png","b40d7b9be69349ef2462d0e304b4aaa2"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/close_button.png","b1162ad174b4bb4726e34f0e349c03c8"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/frame.png","c96744250fb9d539f61fd5245f4d2b80"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/index.html","c9f85e8b62bbfdfc640350728169b141"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/红药.png","b2d6b2994742542d5b91971a998b7cd0"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2017/06/26/170627-Unity背包系统制作/结果.png","b30eb75e9b0cf1bf00e34d05d957e3ac"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/2019/08/22/190822-MWH CE代码/index.html","b0e3339235a30b5f5362a62e3b49f047"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/2017/05/index.html","fb6e9feaeef6d20bcc53a77494f59174"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/2017/06/index.html","e4cb064457c431f901362290f2a12693"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/2017/index.html","fe201e0d98f4269028b726a6c569cfb6"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/2019/08/index.html","e10bdc024d459ae28455ffeaf456f1d8"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/2019/index.html","63da4a3b2a05b667508c1bf88fd4e5ae"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/archives/index.html","082c5354a481e5d758ff589894c78ad0"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/index.html","be54daf027a1165d97d4c6c918a0c708"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/实用工具/index.html","b53792617accdfc2cfbf099720d52c47"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/杂谈/index.html","df979fb22be24d45b347c14389194c04"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/游戏/index.html","e4169d32e1ebcf35c98b52a31888ba96"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/游戏/怪物猎人：世界/index.html","8ee2ed03488ee0c2084d6365677db7a0"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/计算机技术/OpenGL/index.html","c61544dfff9cdd5a29ef676b92a3a78a"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/计算机技术/Unity/index.html","3f1c7cd936b6c6fb3ffebef30b646495"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/categories/计算机技术/index.html","1f6418c3bb46b7f581b0d075c1aba892"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/css/index.css","fbc80c80761f773ed2c505094186347a"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/gallery/index.html","4ea5250a1c08ea7dc82cddc27db2ec66"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/favicon.png","14f766d6a4bb98ccb5b03605f55711ab"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/index.html","df9e7e094cca7967e7acabbf8eb929fb"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/main.js","49db8bb1837909299a5b53af4be94e27"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/link/index.html","b23a354b31299df906fc10c14fd7b085"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/OpenGL/index.html","d9080e13862789fb7944d5d31fe3263f"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/Unity/index.html","0cabd250de4e0b1a2120e1c02bcbc226"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/index.html","1738ba32ae16f668f37437e93a0e1094"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/工具/index.html","109653d068422a2579589df61bd76660"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/怪物猎人：世界/index.html","1c83586443c60b7bd6c7a2ce234ed3a8"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/推荐/index.html","871fb1c7924aa85b19f4ad122bd6f966"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/杂谈/index.html","b53f2c8d36e4c401bb3d647e716b7379"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/游戏修改/index.html","79a953dee64d85f843627f1e8748fdca"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/游戏引擎/index.html","5ed042708be11ff1a3b557d098ed7a1b"],["C:/Users/ZhouMingzhe/OneDrive/blog/public/tags/背包系统/index.html","3ff8eeef1d9e98bde5e8052373fd5e78"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







