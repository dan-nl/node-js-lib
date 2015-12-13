'use strict';

/**
 * @public
 * @param {Object} elm
 * @param {string} class_name
 * @returns {*}
 */
function hasClass( elm, class_name ) {
  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'hasClass( ' + elm + ', ' +  class_name + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( typeof class_name !== 'string' ) {
    console.warn( 'hasClass( ' + elm + ', ' +  class_name + ' ): class name not provided as a string' );
    return;
  }

  if ( elm.classList ) {
    return elm.classList.contains( class_name );
  }

  return new RegExp( '(^|\\s)' + class_name + '($|\\s)' ).test( elm.className );
}

module.exports = hasClass;