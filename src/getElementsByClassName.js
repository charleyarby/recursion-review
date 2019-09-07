// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
​
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var searchNode = function(nodes) {
    // if ( nodes.childNodes.length === 0 ) {
​
    if (nodes.classList !== undefined && nodes.classList.contains(className) ) {
​
      result.push(nodes);
    }
​
    // }
    if (nodes.childNodes.length > 0 ) {
      for ( var i = 0; i < nodes.childNodes.length; i++) {
​
        searchNode(nodes.childNodes[i]);
      }
    }
​
​
​
  };
​
​
  searchNode(document.body);
  console.log(result);
  return result;
};
​
// var getElementsByClassName = function(className) {
//   // your code here
//   var result = [];
//   var searchNode = function(nodes) {
//     if ( nodes.children !== true ) {
//       if ( nodes.classList.contains(className) ) {
//         result.push(nodes);
//       }
//     }
//     if (nodes.children) {
//       for ( var i = 0; i < nodes.children.length; i++) {
//         searchNode(nodes.children[i]);
//       }
//     }
//     return result;
//   };
//   console.log(result);
//   return searchNode(document.body);
// };