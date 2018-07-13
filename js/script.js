/*$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 2200;
    if(headr){
        $(".chatContainer").animate({
            right: '0px',
            opacity: '1',}, 1000);
    }else {
    	false;
    }
});*/
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 2200 ;
    let headrB = scroll <= 2200 || scroll >= 2200;
    if(headr){
        $(".chatContainer").addClass("chatA");
    }else if (headrB){
        $(".exit").click(function(){
            $(".chatContainer").addClass("chatC");
        });
    }else {
        false;
    }
});


