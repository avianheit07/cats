(function(angular){
  var app = angular.module("CatFilters",[]); //you can define module dependencies also here if needed
  app.filter("replace",[function(){
    return function(str,pattern,replace){

      if(pattern && replace){
        re = new RegExp(pattern, "g");
        str = str.replace(re,replace);
      }
      return str;
    }
  }])
}(window.angular));
