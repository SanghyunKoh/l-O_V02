
  $('.card-one').click(
    function(){
      $('.card-one').delay(100).fadeToggle( "slow", "linear" );
      $('.card-two').delay(600).fadeToggle( "slow", "linear" );
    }
  )

  $('.card-two').click(
    function(){
      $('.card-two').fadeToggle( "slow", "linear" );
      $('.card-three').delay(700).fadeToggle( "slow", "linear" );
    }
  )









if ( $(window).width() > 769){
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
            $('.card-three').delay(100).fadeToggle( "slow", "linear" );
        
          }
        )
      

    }

    
//change function on mobile version 
else {
gsap.set(".cardWrapper", {perspective:500});
gsap.set(".card", {transformStyle:"preserve-3d"});
gsap.set(".back", {rotationY:-180});
gsap.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".cardWrapper").mousedown(
    function() {
      gsap.to($(this).find(".card"), {duration: 1.2, rotationY:180, ease:Back.easeOut});
    })
    .mouseup(function() {
      gsap.to($(this).find(".card"), {duration: 1.2, rotationY:0, ease:Back.easeIn});  
    }
  );

  $('.card-three').click(
    function(){
      $('.card-three').delay(300).fadeToggle( "slow", "linear" );
      $('.layer').delay(300).fadeToggle( "slow", "linear" );
    
    }
  )

}