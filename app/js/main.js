$(document).ready(function(){
    $('#main-nav').hide();
    
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
            
            $('#divider-pounds').attr('style', 'bottom: -' + difference/2 + 'px');
        }
        
    });
    
    $('.certificates-box').on('click', function(){
        $('#certificate-fixed-container embed').attr('src', 'resources/' + $(this).attr('id') + '.pdf');
        displayCertificate();
    });
    
    $('#certificate-fixed-container').on('click', function(){
        $(this).fadeOut(300);
        $('#main-nav').fadeIn(300);
    });
    
    var displayCertificate = function(){
        $('#certificate-fixed-container').fadeIn(300);
        $('#main-nav').fadeOut(300);
    };
    
})