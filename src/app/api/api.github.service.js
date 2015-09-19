(function() {
  'use strict';

  angular
    .module('unlam')
    .factory('githubService', githubService);

  /* @ngInject */
  function githubService($http) {
    var apiHost = 'https://api.github.com/legacy/repos/search/';

    var service = {
      apiHost: apiHost,
      search: search
    };

    return service;

    function search(query) {

      return $http.get(apiHost + query);        
    }
  }
})();
