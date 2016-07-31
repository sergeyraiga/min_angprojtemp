'use strict';
min_angprojtemp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/site/index', {
        templateUrl: 'views/site/index.html',
        controller: 'index'
    })
    .when('/site/services', {
        templateUrl: 'views/site/services.html',
        controller: 'services'
    })
    .when('/site/about', {
        templateUrl: 'views/site/about.html',
        controller: 'about'
    })
    .when('/site/contact', {
        templateUrl: 'views/site/contacts.html',
        controller: 'contacts'
    })
    .otherwise({
        redirectTo: '/site/index'
    });
}])
.controller('index', ['$scope', '$http', 'service_op', function($scope,$http,service_op) {
    // Сообщение для отображения представлением
    $scope.message = 'Вы читаете главную страницу приложения. ';
}])
.controller('services', ['$scope', '$http', 'service_op', function($scope,$http,service_op) {
    // Сообщение для отображения представлением
    $scope.message = 'Вы читаете страницу услуг приложения. ';
}])
.controller('about', ['$scope', '$http', function($scope,$http) {
    // Сообщение для отображения представлением
    $scope.message = 'Это страница с информацией о приложении.';
}])
.controller('contacts', ['$scope', '$http', function($scope,$http) {
    // Сообщение для отображения представлением
    $scope.message = 'Пишите письма. Мы будем рады!.';
}]);