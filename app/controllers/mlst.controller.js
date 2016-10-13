(function(){

    'use strict';

    angular.module('QuandongApp')
    .controller('MlstController', MlstController);

    MlstController.$inject = ['data'];
    function MlstController(data) {
        var mlst = this;
        mlst.isolates = data.data.MLST;
        mlst.tab_head = ['Isolate', 'Scheme', 'ST'];
        for(var i = 0; i < mlst.isolates[0].alleles.length; i++){
            mlst.tab_head.push("Allele" + (i + 1));
        }
        mlst.tab_head.push("Quality");

        console.log("This is isolates:", mlst.isolates);
        console.log("This is header:", mlst.tab_head);
    };

})();
