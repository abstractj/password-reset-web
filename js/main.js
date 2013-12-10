define(['jquery', 'underscore'], function($, _, aerogear, text){

    $(function(){
      _(["rebecca", "adam"]).each(function(n){
        console.log(n + " is my BFF!");
    });
  });
});
