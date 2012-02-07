(function($){

  // a plugin that sets up to 6 levels of header hierarchy 
  // and distributes the styles among the headers present
  // in the document. This helps keep styles sexy regardless
  // of which headers a user chooses to use.
  //
  //  Parameters
  //
  //    headers - Array, list of header styles
  //
  // returns nothing
  $.fn.headsmart = function(){
    var contentElement = $(this)
    setHeaders()


    // sets up to six header styles to be spread over
    // the headers actually found in the content
    //
    //  Parameters
    //
    //    headers - Array, list of header styles
    //    e       - Element whose children will be checked
    //
    // returns nothing
    function setHeaders(){
      var existingHeaders = []
      var headerStyles    = ''

      // find which headers exist
      if(contains('h1')){
        existingHeaders.push('h1')
      }
      if(contains('h2')){
        existingHeaders.push('h2')
      }
      if(contains('h3')){
        existingHeaders.push('h3')
      }
      if(contains('h4')){
        existingHeaders.push('h4')
      }
      if(contains('h5')){
        existingHeaders.push('h5')
      }
      if(contains('h6')){
        existingHeaders.push('h6')
      }

      for(var i=0;i<existingHeaders.length;i++){
        var newClass = 'header-level-'+(i+1)
        contentElement.children(existingHeaders[i]).addClass(newClass)
      }
    }

    // sets up to six header styles to be spread over
    // the headers actually found in the contetn
    //
    //  Parameters
    //
    //    e - element to be look
    //
    // returns boolean
    function contains(e){
      if(contentElement.children(e).length > 0){
        return true
      } else {
        return false
      }
    }
  }
})(jQuery)