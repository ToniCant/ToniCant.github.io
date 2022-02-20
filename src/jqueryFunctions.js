$(document).ready(function(){
    $(".drop-down-btn").click(function(){
        $(".drop-down-menu").slideToggle("slow");
        $("#icon").toggleClass("fa fa-bars");
        $("#icon").toggleClass("fa fa-close");
    });
});