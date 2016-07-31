'use strict';
// Ссылка на серверную часть приложения
var serviceBase = 'http://server';
// Основной модуль приложения и его компоненты
var min_angprojtemp = angular.module('min_angprojtemp', [
  'ngRoute',
  'min_angprojtemp.site',
  'min_angprojtemp.service_op'
]);
// рабочий модуль
var min_angprojtemp_site = angular.module('min_angprojtemp.site', ['ngRoute']);
var min_angprojtemp_services = angular.module('min_angprojtemp.service_op', ['ngRoute']);
 
min_angprojtemp.config(['$routeProvider', function($routeProvider) {
  // Маршрут по-умолчанию
  $routeProvider.otherwise({redirectTo: '/site/index'});
}]);