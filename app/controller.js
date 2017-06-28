/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

//  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(NgMap, MQTTService, $interval, $scope) {
    var vm = this;

     MQTTService.on('djidrone', function(data){
            console.log(data);
            var lat = data.latitude || 43.551977;
            var lng = data.longitude || 1.470873;
            vm.drone = {lat:lat, lng:lng, data:data};
            //$scope.$apply();
        });



    // var generateMarkers = function() {
    //   vm.positions = [];
    //   var numMarkers = Math.floor(Math.random() * 4) + 4; //between 4 to 8 markers
    //   for (i = 0; i < numMarkers; i++) {
    //     var lat = 43.6600000 + (Math.random() / 100);
    //     var lng = -79.4103000 + (Math.random() / 100);
    //     vm.positions.push({lat:lat, lng:lng});
    //   }
    //   //console.log("vm.positions", vm.positions);
    // };

    // $interval(generateMarkers, 100);


  }


})();