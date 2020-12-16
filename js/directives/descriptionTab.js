(function(){
    

    let app = angular.module('descriptab', [])
 
    app.directive('descripTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/description-tab.html',
            controller: function(){
                console.log("description tab")
            }
        }
    })
 })();