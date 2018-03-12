app.controller('formController', function($scope,$http) {
    
    
    $scope.athlete = {};
    
    
    $scope.processForm = function() {
        console.log($scope.athlete);
        $http.post("http://localhost:3000/athlete",$scope.athlete).then(function(response){
            console.log("POST response :" + response.statusText);
        },function(error){
            console.log("An error occurred: " + error.statusText);             
        });
    };
    
});