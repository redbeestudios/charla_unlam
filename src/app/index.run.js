(function() {
  'use strict';

  angular
    .module('unlam')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
