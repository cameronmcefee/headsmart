(function($){

  // a plugin that sets up to 6 levels of header hierarchy 
  // and distributes the styles among the headers present
  // in the document. This helps keep styles sexy regardless
  // of which headers a user chooses to use.
  //
  // returns nothing
  $.fn.headsmart = function(){
    var contentElement = $(this)
    setHeaders()


    // sets up to six header styles to be spread over
    // the headers actually found in the content
    //
    // returns nothing
    function setHeaders(){
      var existingHeaders = [],
          headerStyles    = ''

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
        contentElement.children(existingHeaders[i]).addClass('header-level-'+(i+1))
      }
    }

    // sets up to six header styles to be spread over
    // the headers actually found in the contetn
    //
    //  Parameters
    //
    //    e - element to be checked
    //
    // returns boolean
    function contains(e){
      return (contentElement.children(e).length > 0) ? true : false
    }
  }
})(jQuery)