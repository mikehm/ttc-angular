var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope, $http){


	$scope.add = function(){

	$http.jsonp("http://myttc.ca/"+$scope.station+"_station.json?callback=JSON_CALLBACK")
	.success(function(data){

	$scope.arr = [];

	$scope.stops = data.stops	
	console.log($scope.stops);
		angular.forEach(data.stops, function(item){
			angular.forEach(item.routes, function(item){
					angular.forEach(item.stop_times, function(item){

						$scope.arr.push(item);
						console.log(item.departure_time);
					})
			
			})

		})

	});

	$scope.station = '';
	}

	
});