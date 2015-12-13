'use strict';

/**
 * @public
 * @param elm
 * @param {string|Array} class_name
 * @param {Function|undefined} callback
 */
function removeClass( elm, class_name, callback ) {
  var i;
  var removed;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'removeClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'removeClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
    return;
  }

  // handle Array of class names
  if ( class_name instanceof Array ) {
    for ( i = 0; i < class_name.length; i += 1 ) {
      removeClass( elm, class_name[i] );
    }
  }

  // remove class via classList
  if ( !removed && elm.classList ) {
    elm.classList.remove( class_name );
    removed = true;
  }

  // remove class via className
  if ( !removed ) {
    elm.className =
      elm.className.replace( new RegExp( '(^|\\s)' + class_name + '($|\\s)' ), ' ' )
        .replace( /^\s+|\s+$/g, '' );
  }

  // callback
  if ( callback && callback instanceof Function ) {
    callback();
  }
}

module.exports = removeClass;