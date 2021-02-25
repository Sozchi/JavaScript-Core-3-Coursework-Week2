document.addEventListener( 'DOMContentLoaded', function ()
{
    fetch( 'https://xkcd.now.sh/?comic=latest' )
        .then( response => response.json() )
        .then( function ( data )
        {
            console.log( data );
            let image = document.querySelector( 'img' );
            image.src = data.img;
        } )
        .catch( ( error ) =>
        {
            console.log( error );
    })
})