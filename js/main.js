define(['jquery', 'underscore', 'aerogear'], function($, _, aerogear){
  $(function(){

      var info = _.template( $("#info-template").text() );

      $( "#reset-button" ).click( function() {
          var html = info( {'email': $("#email").val()} );
          $("#reset-page").html( html );
      });

      var forgotPipeline = AeroGear.Pipeline([
          {
              name: "forgot",
              settings: {
                  baseURL: "http://localhost:8080/password-reset/rest/"
              }
          }
      ]).pipes.forgot;

      forgotPipeline.read({email : 'bruno@abstractj.com'} ,{
          success: function( data ) {
            console.log("Yay: " + data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
              console.log("WAT? " + textStatus);
          }
      });
  });
});
