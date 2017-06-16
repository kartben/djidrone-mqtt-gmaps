angular.module("boilerplate").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=en ng-csp ng-app=boilerplate><head><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>AngularJS Boilerplate</title><meta name=description content=\"Simple AngularJS Boilerplate to kick start your new project with SASS support and Gulp watch/build tasks\"><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=\"shortcut icon\" type=image/x-icon href=images/favicon.ico><meta name=msapplication-TileColor content=#f01d4f><link rel=stylesheet href=bower_components/OwlCarousel/owl-carousel/owl.carousel.css><link rel=stylesheet type=text/css href=styles/style.css></head><body class=main-wrapper><main-nav></main-nav><div data-ng-view class=container></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script src=http://maps.google.com/maps/api/js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/scripts.js></script><script type=text/javascript src=bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script type=text/javascript src=bower_components/ngmap/build/scripts/ng-map.js></script><script type=text/javascript src=bower_components/angular-mqtt/src/browserMqtt.js></script><script type=text/javascript src=bower_components/angular-mqtt/src/angular-MQTT.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/LocalStorage.service.js></script><script type=text/javascript src=components/services/queryService.service.js></script><script type=text/javascript src=app/factory.js></script><script type=text/javascript src=app/controller.js></script></html>");
$templateCache.put("views/404.html","<div class=text-center><h4>Page Not Found</h4><h1>404</h1></div>");
$templateCache.put("views/contact.html","<h2>Contact</h2><div class=\"container cf\"><div><p>Copyright (C) 2015 Jozef Butko<br><a href=http://www.jozefbutko.com/resume>www.jozefbutko.com/resume</a><br><a href=http://www.github.com/jbutko>www.github.com/jbutko</a><br><a href=http://www.twitter.com/jozefbutko>@jozefbutko</a></p></div></div>");
$templateCache.put("views/home.html","<style>\n	.custom-marker {\n	}\n	.custom-marker.my1 {\n		/*background: #fff;*/\n	}\n\n	ng-map {\n		width:100%; \n		height:600px;\n		display: block;\n		}\n\n</style><div ng-controller=\"MainController as vm\"><ng-map zoom=17 center=\"[43.551977, 1.470873]\" default-style=false map-type-id=MapTypeId.ROADMAP><marker ng-repeat=\"pos in vm.positions\" position={{pos.lat}},{{pos.lng}}></marker><custom-marker ng-repeat=\"pos in vm.positions\" position={{pos.lat}},{{pos.lng}} centered=false><div class=my1 style=\"font-size: 2em;\"><img src=images/mavic-pro.png style=\"transform: rotateX({{ pos.data.pitch }}deg) rotateY({{ pos.data.roll }}deg) rotateZ({{ pos.data.yaw }}deg)\"></div></custom-marker></ng-map></div>");
$templateCache.put("views/setup.html","<div class=\"container cf\"><div><h2>Download</h2><code>bower install angularjs-boilerplate</code><br>or<br><code>git clone https://github.com/jbutko/AngularJS-Boilerplate.git</code><br><h2>1. Setup</h2><code>npm install</code><br>- install all npm and bower dependencies<br><small><strong>Note:</strong> If npm install fails during dependency installation it will be likely caused by gulp-imagemin. In that case remove gulp-imagemin dependency from package.json, run npm install again and then install gulp-imagemin separately with following command: npm install gulp-imagemin --save-dev</small><h2>2. Watch files</h2><code>gulp</code><br>- all SCSS/HTML will be watched for changes and injected into browser thanks to BrowserSync<h2>3. Build production version</h2><code>gulp build</code><br>- this will process following tasks:<br>* clean _build folder<br>* compile SASS files, minify and uncss compiled css<br>* copy and optimize images<br>* minify and copy all HTML files into $templateCache<br>* build index.html<br>* minify and copy all JS files<br>* copy fonts<br>* show build folder size<br><h2>4. Start webserver without watch task</h2><code>gulp server</code><h2>5. Start webserver from build folder</h2><code>gulp server-build</code></div></div>");
$templateCache.put("components/directives/main-nav.html","<header class=header role=banner itemscope itemtype=http://schema.org/WPHeader><div id=inner-header class=\"wrap container cf\"><h1 id=logo class=\"text-hide h1 pull-left\" itemscope itemtype=http://schema.org/Organization><a href=\"#/\" rel=nofollow><img></a></h1><responsive-nav></responsive-nav><nav role=navigation class=\"main-nav text-center\" itemscope itemtype=http://schema.org/SiteNavigationElement><ul class=\"menu cf\"><li><a href=#/home>Home</a></li><li><a href=#/setup>Setup</a></li><li><a href=#/contact>Contact</a></li></ul></nav></div></header><div class=responsive-wrapper><ul class=\"cf responsive-nav option-set\"><li><a href=#/home>Home</a></li><li><a href=#/setup>Setup</a></li><li><a href=#/contact>Contact</a></li></ul></div>");
$templateCache.put("components/directives/responsive-nav.html","<a href=# class=hamburger></a>");}]);