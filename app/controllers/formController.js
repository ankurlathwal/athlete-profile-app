app.controller('formController', function($scope) {
    
    
    $scope.athlete = {};
    
    
    $scope.processForm = function() {
        console.log($scope.athlete);
    };
    
});