$(document).ready(function(){
    $('#main-nav').hide();
    
    //main scroll event 
    $(document).on('scroll', function(){
        var windowHeight = $(window).innerHeight();
        var scrollTopNumber = $(window).scrollTop();
        var dividerOneTopEdge = $('#section-divider-1')[0].offsetTop;
        var windowBottomEdge = windowHeight + scrollTopNumber;
        var difference = windowBottomEdge - dividerOneTopEdge;
        
        if (scrollTopNumber >= windowHeight) {
            $('#main-nav').slideDown(300);
        } else if (scrollTopNumber < windowHeight) {
            $('#main-nav').fadeOut(300);
        }
        
        if (windowBottomEdge >= dividerOneTopEdge) {
            
            $('#divider-pounds').attr('style', 'bottom: -' + difference/3 + 'px');
        }
        
    });
    
    //assignments
    $('.certificates-box').on('click', function(){
        $('#certificate-fixed-container embed').attr('src', 'resources/' + $(this).attr('id') + '.pdf');
        displayCertificate();
    });
    
    $('#certificate-fixed-container').on('click', function(){
        $(this).fadeOut(300);
        $('#main-nav').fadeIn(300);
        $('body').css('overflow', 'auto');
    });
    
    $('#fish-photo-fixed').on('click', function(){
        $(this).fadeOut(300);
    });
    
    $('.fish-photo-box').on('click', function(){
        $('#fish-photo-fixed img').attr('src', 'resources/' + $(this).attr('id') + '.jpg');
        $('#fish-photo-fixed').fadeIn(300);
    });
    
    //functions
    var displayCertificate = function(){
        $('#certificate-fixed-container').fadeIn(300);
        $('#main-nav').fadeOut(300);
        $('body').css('overflow', 'hidden');
    };
    
});