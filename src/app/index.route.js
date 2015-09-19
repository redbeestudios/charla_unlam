(function() {
  'use strict';

  angular
    .module('unlam')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/unlam', {
        templateUrl: 'app/unlam/unlam.html',
        controller: 'UNLaMController',
        controllerAs: 'unlam'
      })
      .when('/api', {
        templateUrl: 'app/api/api.html',
        controller: 'ApiController',
        controllerAs: 'api'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
