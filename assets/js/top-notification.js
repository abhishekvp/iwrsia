(function($){



$('div#notice').slideDown(1000)

$('span#close').click(

  function() {
      $('div#notice').slideUp("slow")
    }

)

})(jQuery);
