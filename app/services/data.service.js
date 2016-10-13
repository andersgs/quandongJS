(function(){
    'use strict';

    angular.module('QuandongApp')
    .service('DataService', DataService);

    DataService.$inject = ['$http'];
    function DataService($http) {
        var service = this;

        service.getData = function(){
            var promise = $http({
                method: 'GET',
                url: 'assets/quandongJS.json'
            });
            console.log("This is the promise:", promise);
            return promise;
        };
    };
})();
