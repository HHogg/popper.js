/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
export default function getStyleComputedProperty(element, property) {
    // NOTE: 1 DOM access here
    const css = window.getComputedStyle(element, null);
    return css[property];
}
