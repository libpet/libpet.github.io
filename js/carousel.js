(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        onInitialized: function(event) {
          $(event.target).find('video').each(function(){
            this.pause();
          });
          var currentVideo = $(event.target).find('.owl-item.active video')[0];
          if(currentVideo){
            currentVideo.currentTime = 0;
            currentVideo.play();
          }
          currentVideo.onended = function(){
            $(event.target).trigger('next.owl.carousel');
          };
  
          var progressCircles = $(".center svg").get(0);
          // var progressContents = $(".autoplay-progress span").get(0);
          currentVideo.ontimeupdate = function(){
            var progress = currentVideo.currentTime / currentVideo.duration;
            progressCircles.style.setProperty("--progress", progress);
          }
  
          var playing = true;
          var btn = $(".center .svg").get(0);
          console.log(btn);
  
        },
        onTranslated: function(event) {
          $(event.target).find('video').each(function(){
            this.pause();
          });
          var currentVideo = $(event.target).find('.owl-item.active video')[0];
          if(currentVideo){
            currentVideo.currentTime = 0;
            currentVideo.play();
          }
          currentVideo.onended = function(){
            $(event.target).trigger('next.owl.carousel');
          };    
  
          var progressCircles = $(".center svg").get(0);
          // var progressContents = $(".autoplay-progress span").get(0);
          currentVideo.ontimeupdate = function(){
            var progress = currentVideo.currentTime / currentVideo.duration;
            progressCircles.style.setProperty("--progress", progress);
          }
  
          var playing = true;
          console.log(progressCircles);
  
          $(progressCircles).click(function() {
            console.log("Hello");
          });
        },
        loop: true,
        center: true,
        margin: -20,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          680: {
            items: 1.2,
            nav: true,
          },
          1000: {
            items: 1.5,
            nav: true
          }
        }
      });
      var owlIndex, count;
      $(document).on('click', '.owl-item', function() {
        owlIndex = $(this).index();
        count = document.querySelectorAll(".owl-item.active").length;
        $('.owl-stage-outer').trigger('to.owl.carousel', owlIndex - count);
      });  
      
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();