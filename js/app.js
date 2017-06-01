angular
  .module('MyraDurkin', [
    'ngRoute'
  ])
  .config([
    '$httpProvider',
    '$routeProvider',
    '$locationProvider',
    function($httpProvider, $routeProvider, $locationProvider) {
      var siteVersion = '17.6.1';

      $httpProvider.interceptors.push(function() {
        return {
          'request': function(config) {
            // !config.cached is set by angular-templatecache option
            if (!config.cached) {
              config.url += ( config.url.indexOf('?') > -1 ? '&' : '?' )
                + config.paramSerializer({v: siteVersion});
            }

            return config;
          }
        }
      });

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
  .run(['$rootScope', '$route', '$anchorScroll',
        function($rootScope, $route, $anchorScroll) {
          $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
            //Change page title, based on Route information
            $rootScope.title = $route.current.title;
            $rootScope.page = $route.current.page;


            // $location.hash('bottom');

            // jump to anchor links when applicable
            $anchorScroll();
          });
    }])
  .controller('MainController', ['$scope', function($scope) {
    // code
    // console.log('hey dog');
    // '$anchorScroll'
  }]);
