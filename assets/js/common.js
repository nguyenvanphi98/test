const showDiv = () => {
  if ($(window).scrollTop() > 300) {
    $("#top").fadeIn("slow");
  } else {
    $("#top").fadeOut("slow");
  }
};
$(window).scroll(showDiv);
