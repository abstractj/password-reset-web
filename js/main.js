define(['jquery', 'underscore'], function($, _, aerogear, text){
  $(function(){

      var info = _.template( $("#info-template").text() );

      $( "#reset-button" ).click( function() {
          var html = info( {'email': $("#email").val()} );
          $("#reset-page").html( html );
      });
    });
  });
});
