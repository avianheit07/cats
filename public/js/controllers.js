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
  }]).controller("CatCtrl",["$scope","$routeParams","$http",function($s,$rp,$x){
    //console.log($rp);
    $s.activeIndex = 0;
    $s.show = function(idx){
      $s.activeIndex = idx;
    }
    $x.get("/json/cat"+$rp.id+".json").success(function(data){
        $s.cat = data;
    })
  }])
}(window.angular));
