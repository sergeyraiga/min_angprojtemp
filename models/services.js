'use strict';
min_angprojtemp_services.factory("service_op", ['$http','$location','$route', 
    function($http,$location,$route) {
    var obj = {};
    obj.getServices = function(){
        return $http.get(serviceBase + 'services');
    }  
    obj.getService = function(serviceID){
        return $http.get(serviceBase + 'services/' + serviceID);
    }
 
    obj.setServiceComment = function (service) {
        return $http.put(serviceBase + 'services/' + service.id, service )
            .then( successHandler )
            .catch( errorHandler );
        function successHandler( result ) {
            $location.path('/services/' + service.id);
        }
        function errorHandler( result ){
            alert("Error data")
            $location.path('/service/comment/' + result.id)
        }    
    };      
    return obj;   
}]);