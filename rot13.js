function rot13 (string) {
  var arr = string.split(''),
      resultArr = [],
      temp;
  
  arr.forEach(function(val, index){
    temp = val.charCodeAt();  // Get the ascii code
    temp+=13;                 // Apply the cipher
    temp-=97;                 // Shift it back to a=0, b=1, etc.
    temp%=26;                 // Take the mod 26 "modulo?" -> geniusss!
    temp+=97;                 // Shift back to ascii code
    resultArr[index] = String.fromCharCode(temp);
  });
  
  return resultArr.join('')
}
