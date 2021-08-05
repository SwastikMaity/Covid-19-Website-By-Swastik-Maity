(function() {

  var items = document.querySelectorAll(".timeline li");
  /* function to check whether list item passes as parameter has its
  margin area falling inside document's visible width and height.
  Returns true in case above condition is met. */
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /* function to iterate through list items and check individual item for a condition,
   whether its margin area is falling inside document's visible width and height.
   The condition is checked through another function call and in case it retuns true,
   list item is made visible, by adding style class "in-view" */
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  /* check for scroll event on document
  and call specified function */
  window.addEventListener("scroll", callbackFunc);

})();