!function(){function o(o,e,t,r){e.html5Mode(!1),o.when("/",{templateUrl:"views/home.html",controller:"MainController",controllerAs:"main"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainController",controllerAs:"main"}).when("/setup",{templateUrl:"views/setup.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"}),t.interceptors.push("authInterceptor")}function e(o,e,t,r){return{request:function(o){return o.headers=o.headers||{},o},responseError:function(o){return 404===o.status?(r.path("/"),e.reject(o)):e.reject(o)}}}function t(o,e){}angular.module("boilerplate",["ngRoute","ngMap","ngMQTT"]).config(o).config(["MQTTProvider",function(o){o.setHref("ws://iot.eclipse.org:80/ws")}]),o.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("boilerplate").factory("authInterceptor",e),e.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("boilerplate").run(t),t.$inject=["$rootScope","$location"]}(),function(){angular.module("boilerplate").constant("CONSTANTS",{API_URL:"http://www.yourAPIurl.com/"})}(),function(){"use strict";function o(o,e){function t(e,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(e)?o.localStorage&&o.localStorage.setItem(e,angular.toJson(t)):void console.warn("localStorage with the name "+e+" already exists. Please pick another name.")}function r(e){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&angular.fromJson(o.localStorage.getItem(e))}function n(e,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.setItem(e,angular.toJson(t))}function l(e){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.removeItem(e)}function a(){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.clear()}function c(){return o.localStorage}var u="undefined"==typeof window.localStorage?void 0:window.localStorage,i=!(void 0===typeof u||void 0===typeof window.JSON);return angular.element(o).on("storage",function(o,t){o.key===t&&e.$apply()}),{set:t,get:r,update:n,remove:l,removeAll:a,list:c}}angular.module("boilerplate").factory("LocalStorage",["$window","$rootScope",o])}(),function(){"use strict";function o(o,e,t){function r(r,n,l,a){var c=e.defer();return o({method:r,url:t.API_URL+n,params:l,data:a}).then(function(o){o.config||console.log("Server error occured."),c.resolve(o)},function(o){c.reject(o)}),c.promise}var n={query:r};return n}angular.module("boilerplate").factory("QueryService",["$http","$q","CONSTANTS",o])}();