document.querySelector( '#add' ).addEventListener( 'click', function ()
{
    fetch( `https://dog.ceo/api/breeds/image/random` )
        .then( response => response.json() )
        .then( function ( data )
        {
            let ul = document.querySelector( 'ul' );
            let li = document.createElement( 'li' );
            let image = document.createElement( 'img' );
            image.src = data.message;
            li.append( image );
            ul.insertBefore( li, ul.firstChild );
        } )
        .catch( ( error ) =>
        {
            console.log( error )
        } );
} );

document.querySelector( '#delete' ).addEventListener( 'click', function ()
{
    document.querySelector( 'ul' ).innerHTML = '';
})