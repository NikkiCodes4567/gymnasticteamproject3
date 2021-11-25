// Dropdown Menu
$(document).ready(function() {

  //Gymnasts Dropdown
  $("#dropdown1").hover(function () {
    var dropdown = $("#gymnastsDropdown").hasClass("hidden");

    if(dropdown == true){
      $("#gymnastsDropdown").removeClass("hidden");
    }
    else{
      $("#gymnastsDropdown").addClass("hidden");
    }
  });

  //Gymnasts Child Maintain Hover
  $(".child1").hover(function () {
    var dropdown = $("#gymnastsDropdown").hasClass("hidden");

    if(dropdown == true){
      $("#gymnastsDropdown").removeClass("hidden");
    }
    else{
      $("#gymnastsDropdown").addClass("hidden");
    }
  });

  //Meets Dropdown
  $("#dropdown2").hover(function () {
    var dropdown = $("#meetsDropdown").hasClass("hidden");

    if(dropdown == true){
      $("#meetsDropdown").removeClass("hidden");
    }
    else{
      $("#meetsDropdown").addClass("hidden");
    }
  });

  //Meets Child Maintain Hover
  $(".child2").hover(function () {
    var dropdown = $("#meetsDropdown").hasClass("hidden");

    if(dropdown == true){
      $("#meetsDropdown").removeClass("hidden");
    }
    else{
      $("#meetsDropdown").addClass("hidden");
    }
  });
});
