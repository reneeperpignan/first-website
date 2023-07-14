window.addEventListener('scroll', function() {
  var containerSections = document.querySelectorAll('.container');

  containerSections.forEach(function(section) {
    var images = section.querySelectorAll('.slide-in');

    images.forEach(function(image, index) {
      var imagePosition = image.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      var delay = index * 100; // Adjust the delay time for each image

      if (imagePosition - windowHeight <= 0) {
        setTimeout(function() {
          image.classList.add('active');
        }, delay);
      } else {
        image.classList.remove('active');
      }
    });
  });
});



function myFunction() {
  alert("I am an alert box!");
}
