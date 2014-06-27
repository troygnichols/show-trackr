angular.module('MyApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
    Auth.login({
      email: $scope.email,
      password: $scope.password
    });
  }]);
