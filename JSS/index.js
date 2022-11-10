console.log("your index.js file is loaded correctly!");
<script>
function fade() {
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
</script>