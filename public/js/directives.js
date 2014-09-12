(function(angular){
  var app = angular.module("CatDirectives",[]); //you can define module dependencies also here if needed

  app.directive("thumbBlinker",[
    "$interval",
    function($i){
      return {
        restrict:"E",
        templateUrl:"/templates/thumb-blinker.html",
        replace:true,
        scope:{
          images:"=",// "=" means will maintain two way binding
          seconds:"@" // attribute as string
        },
        link:function(scope,element,attributes){
          scope.active = 0; //default is 0 index as active

          sec = attributes.seconds ? ( (+attributes.seconds) * 1000 ) : 3000; // the + is a shortcut for parseInt(num,10)

          $i(function(){
            scope.active++;
            if(scope.active === scope.images.length){
              scope.active = 0;
            }
          },sec)
        }
      }
    }
  ])
}(window.angular));
