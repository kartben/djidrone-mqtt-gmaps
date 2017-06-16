/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('boilerplate', [
      'ngRoute', 'ngMap', 'ngMQTT'
    ])
    .config(config)
    .config(['MQTTProvider',function(MQTTProvider){
        MQTTProvider.setHref('ws://iot.eclipse.org:80/ws');
    }]);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/setup', {
        templateUrl: 'views/setup.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  angular
    .module('boilerplate')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('boilerplate')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();
;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('boilerplate')
    .constant('CONSTANTS', {
      'API_URL': 'http://www.yourAPIurl.com/'
    });


})();

;(function() {


    'use strict';


    /**
     * Service for complex localStorage functionality
     *
     * @category  factory
     * @author    Jozef Butko
     * @example   Inject LocalStorage as the dependency and then use it like this:
     *
     * var data = { property: 'name'};
     * // set, get, remove, removeAll and list localStorage values
     * LocalStorage.set('obj', data);
     * LocalStorage.get('obj');
     * LocalStorage.update('obj', data);
     * LocalStorage.remove('obj');
     * LocalStorage.removeAll();
     * LocalStorage.list();
     *
     * @version   1.0
     *
     */
    angular
      .module('boilerplate')
      .factory('LocalStorage', [
        '$window', '$rootScope', LocalStorageService
      ]);


    //////////////// factory


    function LocalStorageService($window, $rootScope) {

      /**
       * Test browser if it supports localStorage
       */
      var storage = (typeof window.localStorage === 'undefined') ? undefined : window.localStorage,
          supported = !(typeof storage === undefined || typeof window.JSON === undefined);

        /*
        * whenever localStorage gets updated trigger
        * $digest cicle so all values are refreshed in the view
         */
        angular.element($window).on('storage', function(event, name) {
          if (event.key === name) {
            $rootScope.$apply();
          }
        });


        return {
          set: set,
          get: get,
          update: update,
          remove: remove,
          removeAll: removeAll,
          list: list
        };


        //////////////// function definitions


        /**
         * Set localStorage value and check if it already do not exists
         *
         * @param {string} name Name of localStorage value
         * @param {object} val  Return stored value
         */
         function set(name, val) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           // in case we already have localStorage with same name alert error msg
           if (window.localStorage.getItem(name) !== null) {
             console.warn('localStorage with the name ' + name + ' already exists. Please pick another name.');
           } else {
             return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
           }
         }


         /**
          * getData from localStorage
          *
          * @param  {string} name Name of localStorage value
          * @return {*}           Stored value
          */
         function get(name) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           return $window.localStorage && angular.fromJson($window.localStorage.getItem(name));
         }


         /**
          * Update already stored data
          *
          * @param  {string}  name Name of localStorage value
          * @param {object}   val  Return stored value
          */
         function update(name, val) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
         }



         /**
          * Remove localStorage value
          *
          * @param  {string} name Name of localStorage value
          * @return {boolean}     True/false if the value is removed
          */
         function remove(name) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
           }

           return $window.localStorage && $window.localStorage.removeItem(name);
         }


         /**
          * Remove all localStorage values
          *
          * @return {boolean}     True/false if the value is removed
          */
         function removeAll() {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
           }

           return $window.localStorage && $window.localStorage.clear();
         }


         /**
          * Return object of all values that are stored on localStorage
          *
          * @return {object}    Object with all data stored on localStorage
          */
         function list() {
           return $window.localStorage;
         }

    }


})();

;(function() {


  'use strict';


  /**
   * $http service abstraction to make API calls with any HTTP method,
   * custom url and data object to be sent as request.
   * Every REST API call is measured, you can see how much it took
   * in the console.
   *
   * @category  factory
   * @author    Jozef Butko
   * @example   Inject QueryService as the dependency and then use it this way:
   *
   * QueryService.query('GET', 'users/user/', {get: query}, {post: params})
      .then(function(data) {
        console.log(data);
      }, function(error) {
        console.log(error);
      });
   *
   * @param     {String} method HTTP method, eg. 'PUT', 'GET'...
   * @param     {String} url API endpoint, eg. 'users/user' or 'system-properties'
   * @param     {Object} params Map of strings or objects which will be turned
   *                     to `?key1=value1&key2=value2` after the url. If the value
   *                     is not a string, it will be
   *                     JSONified
   * @return    {Object} data Data to be sent as the request message data
   * @version   1.1
   *
   */


  angular
    .module('boilerplate')
    .factory('QueryService', [
      '$http', '$q', 'CONSTANTS', QueryService
    ]);



  //////////////// factory



  function QueryService($http, $q, CONSTANTS) {


    var service = {
      query: query
    };

    return service;


    //////////////// definition


    function query(method, url, params, data) {

      var deferred = $q.defer();

      $http({
        method: method,
        url: CONSTANTS.API_URL + url,
        params: params,
        data: data
      }).then(function(data) {
        if (!data.config) {
          console.log('Server error occured.');
        }
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

  }


})();
