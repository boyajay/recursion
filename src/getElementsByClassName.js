// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
  var getElementsByClassName = function(className){
    var arr = [];
    //***HELPER FUNCTION BELOW***
    function checkForChild (test) {
      if (test.classList){
        if (test.classList.contains(className)){
        	arr.push(test);
        }
      }
      var allElements = test.childNodes;
      if (allElements){
        for (var i=0; i<allElements.length; i++) {
          if (allElements[i].childNodes) {
            checkForChild(allElements[i]);
          }
        }
      }
    };
    checkForChild(document.body);
    return arr;
  }
    