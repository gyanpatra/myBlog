function letterChanges() { 
   var msg = $("#updateable").val();
    
   console.log( msg );
  
  // declate the result; 
   var result = "";
    
  // for (initial condition, true condition, operation)
  for (var i=0; i<msg.length; i++) {
    var letter = msg[i];
    var cc = msg.charCodeAt(i);
    var nextcc = cc+1;                 
    var nextletter = String.fromCharCode(nextcc);

    console.log(nextletter);
      
    if("aeiou".indexOf(nextletter.toLowerCase())!=-1){
        nextletter = nextletter.toUpperCase();
    }
      
    result += nextletter;
  }
  
  $("#result").html(result);
  return result;          
}

$("#LetterChanges").click(letterChanges);