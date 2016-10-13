(function(){

    'use strict';

    angular.module('QuandongApp')
    .component("mlst", {
        templateUrl: 'app/templates/mlst_table.template.html',
        bindings: {
            isolates: '<',
            headers: '<'
        }
    });

})();
