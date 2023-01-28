const sliderImages = document.querySelectorAll("img");
console.log(sliderImages);

//this function is from somehwere ////// what it does is run the function passed in it at most howerver many seconds
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach((image) => {
    //halfway thru the image
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2; //pixel level of where we arenat the bpttom - the half of the image
    //bottom of the image
    const imageBottom = image.offsetTop + image.height; //the offset tells us how far the top of te images is from the top of the screen

    ///if the image is half shown
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPassed = window.screenY < imageBottom;

    if (isHalfShown && isNotScrolledPassed) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
