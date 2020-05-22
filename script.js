
if ( $(window).width() > 769){

  $('.card-one').click(
    function(){
      $('.card-one').fadeToggle( "slow", "linear" );
      $('.card-two').toggle();
   
    }
  )

  $('.card-two').click(
    function(){
      $('.card-two').toggle();
      $('.card-three').toggle();
    }
  )


        //using gsap.set() takes care of all vendor-prefixes
        gsap.set(".cardWrapper", {perspective:500});
        gsap.set(".card", {transformStyle:"preserve-3d"});
        gsap.set(".back", {rotationY:-180});
        gsap.set([".back", ".front"], {backfaceVisibility:"hidden"});

        $(".cardWrapper").hover(
        function() {
            gsap.to($(this).find(".card"), {duration: 1.2, rotationY:180, ease:Back.easeOut});
        },
        function() {
            gsap.to($(this).find(".card"), {duration: 1.2, rotationY:0, ease:Back.easeOut});  
        }
        );


        var modal = document.getElementById('myModal');
        var images = document.getElementsByClassName('myImages');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("pop-up-caption");

        var seeIf=true;

        for (var i = 0; i < images.length; i++) {
        var img = images[i];
        // and attach our click listener for this image.
            img.onclick = function(evt) {
                console.log(evt);
                modal.style.display = "block";
                modalImg.src = this.src;
                seeIf = false;
                console.log(seeIf);
        }
        }

        //close the modal image
        modal.onclick =  function () {
            modal.style.display = "none";
        };


        $('.card-three').click(
          function(){
            $('.card-three').toggle();
        
          }
        )
      

    }

    
//change function on mobile version 
else {


  $('.card-one').click(
    function(){
      $('.card-one').fadeToggle( "slow", "linear" );
      $('.card-two').toggle();
   
    }
  )

  $('.card-two').click(
    function(){
      $('.card-two').toggle();
      $('.card-three').toggle();
    }
  )



  gsap.set(".cardWrapper", {perspective:500});
gsap.set(".card", {transformStyle:"preserve-3d"});
gsap.set(".back", {rotationY:-180});
gsap.set([".back", ".front"], {backfaceVisibility:"hidden"});
gsap.config({
    nullTargetWarn: false,
});



  $(function () {
    
    var $card = $(".cardWrapper"),
    timelines = [],
    build = function() {
        $card.each(function() {
            var $this = $(this),
            
            timeline = new TimelineMax({paused: true});
            timelines.push(
                timeline.add([
                    TweenMax.to($this.find(".card"), 1, {
                        rotationY: 180,
                        ease: Back.easeInOut,
                        onComplete: flip,
                        onCompleteParams: [ $this ],
                        onReverseComplete: flip,
                        onReverseCompleteParams: [ $this ]
                    })
                ])
            );
            $this.on({
                click: function(e) {
                    var index = $(e.currentTarget).index();
                    if($(this).hasClass('flipped')) {
                        timelines[index].reverse();
                    } else {
                        timelines[index].play();
                    }
                }
            });
        });
    },
    flip = function( $element ) {
        $element.toggleClass('flipped');
    };
    
    
    build();
    
});
  




  $('.card-three').click(
    function(){
      $('.card-three').toggle();
      $('.layer').fadeToggle("slow", "linear");
    
    }
  )

}