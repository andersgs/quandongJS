(function(){
    'use strict';

    angular.module('QuandongApp')
    .controller('ResistomeController', ResistomeController);

    ResistomeController.$inject = ['data'];
    function ResistomeController(data) {
        var resistome = this;
        resistome.isolates = [];
        resistome.tab_head = [];
        resistome.isolates_raw = data.data.Resistome;


        for(var i = 0; i < resistome.isolates_raw.length; i++){
            var tmp = resistome.isolates_raw[i].Results;
            if (tmp.length > 0) {
                for(var j = 0; j < tmp.length; j++){
                    var no_partial = tmp[j].replace("?", "");
                    if (resistome.tab_head.indexOf(no_partial) == -1) {
                        resistome.tab_head.push(no_partial);
                    }
                }
            }
        }

        if (resistome.tab_head.length > 0) {
            resistome.tab_head.sort(function(a,b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            resistome.display = true;
            resistome.tab_head.unshift('Isolate')
        } else {
            resistome.display = false;
        }


        for(var i = 0; i < resistome.isolates_raw.length; i++){
            var old_isolate = resistome.isolates_raw[i];
            var new_isolate = {};
            new_isolate.id = old_isolate.Isolate;
            for(var j =0; j < resistome.tab_head.length; j++){
                var gene = resistome.tab_head[j];
                new_isolate[gene] = {};
                if( old_isolate.Results.indexOf(gene) > -1){
                    new_isolate[gene].icon = 'glyphicon glyphicon-ok';
                    new_isolate[gene].display_class = 'success';
                } else if(old_isolate.Results.indexOf(gene+"?") > -1) {
                    new_isolate[gene].icon = 'glyphicon glyphicon-sunglasses';
                    new_isolate[gene].display_class = 'warning';
                } else {
                    new_isolate[gene].icon = 'glyphicon glyphicon-minus';
                    new_isolate[gene].display_class = 'active';
                }
            }
            resistome.isolates.push(new_isolate);
        }
    };



})();
