(function() {
    'use strict';

    angular.module("QuandongApp")
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // define the default location
        $urlRouterProvider.otherwise("/");

        // define the UI states
        $stateProvider

        // home page
        .state('home',{
            url: '/',
            templateUrl: 'app/templates/home.template.html'
        })

        // QC
        .state("qc", {
            url: '/qc',
            templateUrl: 'app/templates/qc.template.html'
        })

        // MLST
        .state('mlst', {
            url: '/mlst',
            templateUrl: 'app/templates/mlst.template.html',
            controller: 'MlstController as mlst',
            resolve: {
                data: ['DataService', function(DataService){
                    return DataService.getData();
                }]
            }
        })

        //resistome
        .state('resistome', {
            url: '/resistome',
            templateUrl: 'app/templates/resistome.template.html'
        })

        // phylogenetics
        .state('phylogenetics', {
            url: '/phylogenetics',
            templateUrl: 'app/templates/phylogenetics.template.html'
        })

        // isolates
        .state('isolates', {
            url: '/isolates',
            templateUrl: 'app/templates/isolates.template.html'
        });

    }
})();
