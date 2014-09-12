(function(angular){
  var app = angular.module("CatControllers",[]); //you can define module dependencies also here if needed

  app.controller("MainCtrl",["$scope","User",function($s, User){
    $s.checkUser = function(){
      // continuously be tested by ng-if from index.html
      return User.user ? true:false;
    };
    $s.register = function(user){
      if(!User.register(user)){
        $s.message = "please  provide the complete details"
      };
    };
    $s.message = "please provide your name and email";
  }])
  .controller("CatsCtrl",["$scope","$http","User",function($s,$x,User){
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

    $s.user = User.user;

    $s.$on("user:new",function(){ //listening for a custom event
      console.log("new user added");
      $s.user = User.user;
    })
  }])
  .controller("CatCtrl",["$scope","$routeParams","$http","User",function($s,$rp,$x,User){
    //console.log($rp);
    $s.activeIndex = 0;
    $s.show = function(idx){
      $s.activeIndex = idx;
    }
    $x.get("/json/cat"+$rp.id+".json").success(function(data){
        $s.cat = data;
    })
    $s.user = User.user;

    $s.$on("user:new",function(){ //listening for a custom event
      console.log("new user added");
      $s.user = User.user;
    });
    $s.bids = [];
    $s.bid = function(bid){
      if(bid.price && bid.message){
        $s.newBid = {}; //terminating the current content of the bid form
        bid.user = $s.user.name;
        $s.bids.push(bid);
      }
    }
  }])
}(window.angular));
