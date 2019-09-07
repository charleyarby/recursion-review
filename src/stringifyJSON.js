// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
​
// but you don't so you're going to write it from scratch:
​
var stringifyJSON = function(obj) {
  // your code goes here
  if ( typeof obj === 'number') {
    return '' + obj + '';
  }
  if ( obj === null) {
    return 'null';
  }
  if ( obj === true) {
    return 'true';
  }
  if ( obj === false) {
    return 'false';
  }
​
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
​
  if ( Array.isArray(obj) === true) {
    var result = '';
    if (obj.length === 0) {
      return '[' + ']';
    } else if (obj.length > 0) {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if (i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }
    return result;
  }
  if ( typeof obj === 'object') {
    var result = '';
    if (Object.keys(obj).length === 0) {
      return '{' + '}';
    } else {
      result += '{';
      var count = 0;
      var numKeys = Object.keys(obj).length;
      for ( var key in obj ) {
        if ( typeof obj[key] === 'function' || key === 'undefined') {
          count++;
          if ( count === numKeys) {
            result += '}';
            break;
          } else {
            continue;
          }
        }
        result += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
        count++;
        if ( count < numKeys) {
          result += ',';
        } else if ( count === numKeys) {
          result += '}';
        }
      }
      return result;
    }
  }
};