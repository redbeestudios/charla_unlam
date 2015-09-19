(function() {
  'use strict';

  angular
    .module('unlam')
    .controller('UNLaMController', UNLaMController);

  /** @ngInject */
  function UNLaMController() {
    var vm = this;

    vm.alumno = {nombre:'Maxi'};

    vm.reset = function() {
      vm.alumno = {};
    };
  }

})();
