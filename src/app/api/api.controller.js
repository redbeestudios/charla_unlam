(function() {
  'use strict';

  angular
    .module('unlam')
    .controller('ApiController', ApiController);

  /** @ngInject */
  function ApiController(githubService, $log) {
    var vm = this;

    vm.buscar = function() {

      $log.info("buscar en github "+vm.query);

      githubService.search(vm.query).then(function(response) {
        
        vm.repositories = response.data.repositories;
        $log.info("resultado "+vm.repositories);          
      });
    };

  }

})();
