app.controller('formController', function($scope,$http,$location) {
    
    
    $scope.athlete = {};
    
    
    $scope.processForm = function() {
        console.log($scope.athlete);
        $http.post("/athlete",$scope.athlete).then(function(response){
            console.log("Response Status: " + response.statusCode);
            console.log("Response Message: "+ response.statusText);
            $location.path("/athletes/added");
        },function(error){
            console.log("An error occurred: " + error.statusText);             
        });
    };

    $scope.sports = [
        "Golf","Tennis","Cricket", "Basketball",
"Baseball",
"American Football",
"Aquatics",
"Archery",
"Automobile Racing",
"Badminton",
"Beach Volleyball",
"Bobsleigh",
"Body Building",
"Boxing",
"Cross Country Running",
"Cross Country Skiing",
"Curling",
"Cycling",
"Darts",
"Decathlon",
"Down Hill Skiing",
"Equestrianism",
"eSports",
"Fencing",
"Field Hockey",
"Figure Skating",
"Gymnastics",
"Ice Hockey",
"Martial Arts",
"Mixed Martial Arts",
"Modern Pentathlon",
"Motorcycle Racing",
"Netball",
"Polo",
"Racquetball",
"Rowing",
"Rugby",
"Sailing",
"Softball",
"Shooting",
"Skateboarding",
"Skeet Shooting",
"Skeleton",
"Snow Boarding",
"Soccer (Football)",
"Squash",
"Surfing",
"Swimming",
"Track and Field"
    ];
    
});