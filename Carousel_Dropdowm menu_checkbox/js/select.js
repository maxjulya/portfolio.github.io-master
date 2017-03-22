/**
 *  Set up jcarousel
 */
$(function() {
    $('.jcarousel').jcarousel().on('jcarousel:animateend', function(event, carousel) {
      var id = $(carousel._visible['0']).index();
      
      $('.jp-item').removeClass('active'); 
      $('.jp-item').eq(id).addClass('active');

    });
});

 $(document).ready(function() {
   // set width of item
   $('.jcarousel li').width($('.jcarousel').width());
   
   // move slider
   $('body').on('click', '.jc-right', function() {
     event.preventDefault();
    $('.jcarousel').jcarousel('scroll', '+=1');
   });
   
   $('body').on('click', '.jc-left', function() {
     event.preventDefault();
    $('.jcarousel').jcarousel('scroll', '-=1');
   });
   
   $('body').on('click', '.jp-item', function() {
    event.preventDefault();
    var id = $(this).index();
    $('.jcarousel').jcarousel('scroll', id);
   });
   
});

 $(document).ready(function(){
  $('.selectBox').each(function(){

    var $this = $(this),
        firstVal = $this.find(".selectOption:eq(0)").text();

    // Set first option
    $this.find(".selectBoxTop .selected").text(firstVal);

    // Show/hide drop down
    $this.find(".selectBoxTop").on("click", function(){
      if(!$(".selectOptions").is(":visible")){
        $(".selectOptions").slideDown();
      }else{
        $(".selectOptions").slideUp();
      }
    });

    // Set selected value
    $this.find(".selectOption").on("click", function(){
      val = $(this).text();
      $this.find(".selected").text(val);
      $(".selectOptions").slideUp();
    });
  });
});