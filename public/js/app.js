(function(angular){
  var app = angular.module("CatApp",["ngRoute","CatControllers","CatServices","CatDirectives","CatFilters"]); //CatApp is our main module and the array next to it are the modules this module is dependent on
  app.config(function($routeProvider){
    $routeProvider
    .when("/",{
      templateUrl:"/templates/cats.html",
      controller:"CatsCtrl"
    })
    .when("/cat/:id",{
      templateUrl:"/templates/cat.html",
      controller:"CatCtrl"
    })
    .otherwise({
      redirectTo:"/"
    })
  })
}(window.angular))
