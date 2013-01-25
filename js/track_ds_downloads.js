(function ($) {

  Drupal.behaviors.islandoraGATrack = {
    attach: function (context, settings) {
      $('td.datastream-download a').click(function() {
        var url = $(this).attr('href');
        _gaq.push(['_trackPageview', url]);
      });
    }
  };

})(jQuery);
