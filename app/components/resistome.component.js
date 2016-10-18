(function(){

    'use strict';

    angular.module('QuandongApp')
    .component("resistome", {
        templateUrl: 'app/templates/resistome_table.template.html',
        bindings: {
            isolates: '<',
            headers: '<',
            display: '<'
        }
    });

})();
