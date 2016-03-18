angular
  .module('MyraDurkin', [
    'ngRoute'
  ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'templates/_home.html',
          controller: 'MainController'
        }).
        when('/about', {
          templateUrl: 'templates/_about.html',
          controller: 'MainController'
        }).
        when('/practice', {
          templateUrl: 'templates/_practice.html',
          controller: 'MainController'
        }).
        when('/services', {
          templateUrl: 'templates/_services.html',
          controller: 'MainController'
        }).
        otherwise({
          redirectTo: '/#/'
        });

      // $locationProvider.html5Mode(true);
  }])
  .controller('MainController', ['$scope', function($scope) {
    // code
    console.log('hey dog');
  }]);
