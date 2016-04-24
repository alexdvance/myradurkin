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
          controller: 'MainController',
          title: 'Myra Durkin, LICSW',
          page: 'home'
        }).
        when('/about', {
          templateUrl: 'templates/_about.html',
          controller: 'MainController',
          title: 'Myra Durkin, LICSW | About',
          page: 'about'
        }).
        when('/practice', {
          templateUrl: 'templates/_practice.html',
          controller: 'MainController',
          title: 'Myra Durkin, LICSW | Practice',
          page: 'practice'
        }).
        when('/services', {
          templateUrl: 'templates/_services.html',
          controller: 'MainController',
          title: 'Myra Durkin, LICSW | Services',
          page: 'services'
        }).
        otherwise({
          redirectTo: '/#/'
        });

      // $locationProvider.html5Mode(true);
  }])
  .run(function($rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
      //Change page title, based on Route information
      $rootScope.title = $route.current.title;
      $rootScope.page = $route.current.page;
    });
  })
  .controller('MainController', ['$scope', function($scope) {
    // code
    console.log('hey dog');
  }]);
