angular.module('myApp', [])
  .controller('ML-Ctrl', function($scope){
    $scope.maleName='Male Name';
    $scope.femaleName='Female Name';
    $scope.DirtyTask='Dirty Task';
    $scope.OC='Obnoxious Celebrity';
    $scope.JobTitle='Job Title';
    $scope.Celebrity='Celebrity';
    $scope.HN='Huge Number';
    $scope.TediousTask='Tedious Task';
    $scope.UselessSkill='Useless Skill';
    $scope.Adjective='Adjective';
    $scope.Gender='M';
    $scope.$watch('Gender', 
    function(newValue, oldValue){
      console.log(newValue);
      
    });
  });