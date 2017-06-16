angular.module("boilerplate").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=en ng-csp ng-app=boilerplate><head><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>AngularJS Boilerplate</title><meta name=description content=\"Simple AngularJS Boilerplate to kick start your new project with SASS support and Gulp watch/build tasks\"><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=\"shortcut icon\" type=image/x-icon href=images/favicon.ico><meta name=msapplication-TileColor content=#f01d4f><link rel=stylesheet href=bower_components/OwlCarousel/owl-carousel/owl.carousel.css><link rel=stylesheet type=text/css href=styles/style.css></head><body class=main-wrapper><main-nav></main-nav><div data-ng-view class=container style=\"width: 100%; height: 100%;\"></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script src=//maps.google.com/maps/api/js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/scripts.js></script><script type=text/javascript src=bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script type=text/javascript src=bower_components/ngmap/build/scripts/ng-map.js></script><script type=text/javascript src=bower_components/angular-mqtt/src/browserMqtt.js></script><script type=text/javascript src=bower_components/angular-mqtt/src/angular-MQTT.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/LocalStorage.service.js></script><script type=text/javascript src=components/services/queryService.service.js></script><script type=text/javascript src=app/factory.js></script><script type=text/javascript src=app/controller.js></script></html>");
$templateCache.put("views/home.html","<style>\n	.custom-marker {\n	}\n	.custom-marker.my1 {\n		/*background: #fff;*/\n	}\n\n	ng-map {\n		width:100%; \n		height:auto;\n		display: block;\n		}\n\n</style><div ng-controller=\"MainController as vm\"><ng-map zoom=17 center=\"[43.551977, 1.470873]\" default-style=false map-type-id=MapTypeId.ROADMAP><marker ng-repeat=\"pos in vm.positions\" position={{pos.lat}},{{pos.lng}}></marker><custom-marker ng-repeat=\"pos in vm.positions\" position={{pos.lat}},{{pos.lng}} centered=false><div class=my1 style=\"font-size: 2em;\"><img src=images/mavic-pro.png style=\"transform: rotateX({{ pos.data.pitch }}deg) rotateY({{ pos.data.roll }}deg) rotateZ({{ pos.data.yaw }}deg)\"></div></custom-marker></ng-map></div>");}]);