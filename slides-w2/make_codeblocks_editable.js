window.onload = function () {
    var code_elements = document.querySelectorAll( 'pre code' );
    for( var i = 0; i < code_elements.length; i++ ) {
        code_elements[i].contentEditable = 'true';
    }
}
