//Past Meets Gallery
$(document).ready(function() {

  //2017 Nationals Gallery
  var images1 = [
    "images/nationalsCover.jpg", //0
    "images/nationals0.jpg", //1
    "images/nationals1.jpg", //2
    "images/nationals2.jpg", //3
    "images/nationals3.jpg" //4
  ];

  var currentIndex1 = 0;

  $("#buttonNext1").click(function () {
    // YOUR CODE HERE
    if (currentIndex1 == 4){
      currentIndex1 = 0;
    }
    else{
      currentIndex1++;
    }
    $('#photoGalleryNationals').attr('src', images1[currentIndex1]);
  });
  $("#buttonBack1").click(function () {
    // YOUR CODE HERE
    if (currentIndex1 == 0){
      currentIndex1 = 4;
    }
    else{
      currentIndex1--;
    }
    $('#photoGalleryNationals').attr('src', images1[currentIndex1]);
  });

  //Lindsey Ferris Gallery
  var images2 = [
    "images/lindseyCover.jpg", //0
    "images/lindsey0.jpg", //1
    "images/lindsey1.jpg" //2
  ];

  var currentIndex2 = 0;

  $("#buttonNext2").click(function () {
    // YOUR CODE HERE
    if (currentIndex2 == 2){
      currentIndex2 = 0;
    }
    else{
      currentIndex2++;
    }
    $('#photoGalleryLindsey').attr('src', images2[currentIndex2]);
  });
  $("#buttonBack2").click(function () {
    // YOUR CODE HERE
    if (currentIndex2 == 0){
      currentIndex2 = 2;
    }
    else{
      currentIndex2--;
    }
    $('#photoGalleryLindsey').attr('src', images2[currentIndex2]);
  });
});
