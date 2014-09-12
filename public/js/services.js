(function(angular){
  var app = angular.module("CatServices",[]); //you can define module dependencies also here if needed

  app.service("User",["$rootScope",function($rs){
    this.user = null;


    this.register = function(data){
      var test = data.email && data.name ? true:false;
      if(test){
        this.user = data;
        $rs.$broadcast("user:new");
      }
      return test;
    }

  }])
}(window.angular));
