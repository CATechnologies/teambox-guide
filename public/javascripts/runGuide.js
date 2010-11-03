jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox({
    loading_image : 'loading.gif',
    close_image   : 'closelabel.gif'
  })
  
  $('img.screenshot').bind('click', function() {
    $(this).animate({width: "700px"}, 1000)
  })
})