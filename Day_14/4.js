//Get the single vaslue from a single select and an array of 
//values from a multiple select and display their valuse.

function displayvals() {
    var singlevalues = $( "#single" ).val();
    var multiplevalues = $( "#multiple" ).val();
    $( "p" ).html( "<b>single:</b> " + singlevalues +
    " <b>multiple:</b> " + multiplevalues.join( " , ") );
}

$( "select" ).on( "change", displayvals );
displayvals();