angular.module('MyApp')
  .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    Auth.logout();
  }]);
