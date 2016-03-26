(function($){


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<=27 && mm<=3 && yyyy==2016){
$('div#notice').slideDown(1000)

$('span#close').click(

  function() {
      $('div#notice').slideUp("slow")
    }

)
}
})(jQuery);
