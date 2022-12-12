/*

ACCORDION LAYOUT

$(".accordion-panel").hide();

$(".accordion").click(function() {

    if($(this).attr("aria-expanded") == "true"){
        $(this).next().slideUp();
        $(this).attr("aria-expanded", "false");
    }
    else{
        $(this).next().slideDown();
        $(this).attr("aria-expanded", "true");
    }
    
    return false;
});
*/