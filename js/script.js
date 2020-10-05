
/*------------ Show and hide sticky navbar -------------*/

$(document).ready(function () {
   
    // show/hide nav on page load
    showHideNave();
    
    $(window).scroll(function () {
       
        // show/hide nav on window's scroll
        showHideNave();
        
    });
    
    function showHideNave() {
        
        if ($(window).scrollTop () > 150 ) {
            
            // show sticky navbar
            $('nav').addClass('sticky-navbar');
            
        } else {
            
            // hide sticky navbar
            $('nav').removeClass('sticky-navbar');
            
        }
        
    }
    
});

/*------------ Mobile menu (Toggler btn) -------------*/

$(document).ready(function () {
    
    $('.navbar-toggler').click(function () {
       
        $('.navbar-toggler').toggleClass('change');
        
    });
    
})

/*------------ login form -------------*/

const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if (this.value == "" ){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {   
    input.addEventListener('focus', focusFunc);    
    input.addEventListener('blur', blurFunc);    
});

/*------------ smooth scrolling -------------*/

$(document).ready(function () {
   
    $('a.smooth-scroll').click(function (event) {
        
        event.preventDefault();
        
        // get section id
        var section = $(this).attr('href');
        
        $('html, body').animate ({
           
            scrollTop: $(section).offset().top - 64
            
        }, 1250, 'easeInOutExpo');
        
    });
    
});







