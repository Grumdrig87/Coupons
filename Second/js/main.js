jQuery(document).ready(function($){    
    jQuery('[data-readmore]').readmore({
      collapsedHeight: 720,
      moreLink: '<a href="#">READ MORE</a>'
	  });

    // // faq
    $('[data-faq]').click(function(){
      $(this).find('.faq__title').toggleClass('open');
      $(this).find('p').slideToggle(300);
    })
    // slide to id
      $('[data-nav]').on("click","li:not(:last-child) a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    // burger

    $('[data-burger]').click(function(){
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
    });


})