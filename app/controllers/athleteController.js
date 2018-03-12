app.controller('athleteController', function($scope,$http) {
    
    
    $scope.athletes = [];
    $http.get("/athlete").then(function(response){
        $scope.athletes = response.data;
        console.log("Response Status: " + response.statusCode);
        console.log("Response Message: "+ response.statusText);
    },function(error){
        console.log("An error occurred: " + error.statusText);             
    });
    

    $scope.orderByFilter = function(x){
        $scope.orderByProperty = x;
    };
    
});