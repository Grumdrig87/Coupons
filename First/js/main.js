jQuery(document).ready(function($){    


    // // faq
    // $('[data-faq]').click(function(){
    //   $(this).toggleClass('open');
    //   $(this).find('.faq__card-help').toggleClass('open');
    //   $(this).find('p').slideToggle(300);
    // })
    // burger

    $('[data-burger]').click(function(){
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('opened');
    });
})