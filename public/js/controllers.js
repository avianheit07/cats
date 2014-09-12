(function(angular){
  var app = angular.module("CatControllers",[]); //you can define module dependencies also here if needed

  app.controller("CatsCtrl",["$scope","$http",function($s,$x){
    // $scope.message = "Hello World";
    // $scope.getMessage = function(){
    //   return "from getMessage(): "+$scope.message;
    // }
    $x({
      method:"get",
      url:"/json/cats.json"
    }).success(function(cats){
      $s.cats = cats;
    })
  }]).controller("CatCtrl",function(){

  })
}(window.angular));
