'use strict';

/**
 * module variables
 * @private
 */
var hasClass;

/**
 * variable assignments
 */
hasClass = require( './has-class' );

/**
 * addClass
 *
 * @private
 * @param {Object} elm
 * @param {string|Array} class_name
 * @param {Function|undefined} callback
 */
function addClass( elm, class_name, callback ) {
  var i;
  var added;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'addClass( ' + elm + ', ' + class_name + ', ' + callback + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'addClass( ' + elm + ', ' + class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
    return;
  }

  // handle Array of classes
  if ( class_name instanceof Array ) {
    for ( i = 0; i < class_name.length; i += 1 ) {
      addClass( elm, class_name[ i ] );
    }

    return;
  }

  if ( hasClass( elm, class_name ) ) {
    added = true;
  }

  // add class via classList
  if ( !added && elm.classList ) {
    elm.classList.add( class_name );
    added = true;
  }

  // add class via className
  if ( !added && elm.className.length > 0 ) {
    elm.className += ' ' + class_name;
    added = true;
  }

  if ( !added ) {
    elm.className = class_name;
  }

  // callback
  if ( callback && callback instanceof Function ) {
    callback();
  }
}

module.exports = addClass;