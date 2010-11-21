jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox({
    loading_image : 'loading.gif',
    close_image   : 'closelabel.gif'
  })

  $('img.screenshot').bind('click', function() {
    $(this).animate({width: "700px"}, 1000)
  })

  $('a[href^=#]:not([href=#])').click(function() {
    var $target = $(this.hash);
    $target = $target.length && $target
    || $('[name=' + this.hash.slice(1) +']')
    if ($target.length) {
      var targetOffset = $target.offset().top
      $('html,body')
      .animate({scrollTop: targetOffset}, 1000)
      return false
    }
  })
})