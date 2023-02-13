/**
 * The getInputValueById function returns the value entered into
 * an input field.
 *
 *
 * @param inputID Identify which input field to get the value from
 *
 * @return The number value entered into the input field.
 *
 */
function getInputValueById(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  // step 3: Clear input field after capturing the entered value
  inputField.value = "";

  return inputFieldValue;
}

/**
 * The getTextElementValueById function returns the value of an
 * HTML element with a specific ID.
 *
 *
 * @param elementID Specify which element to get the value from
 *
 * @return The number value from the HTML element
 *
 */
function getTextElementValueById(elementID) {
  const element = document.getElementById(elementID);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);

  return value;
}

/**
 * The setTextElementValueById function sets the innerText of
 * an HTML element with a given id to a new value.
 *
 *
 * @param elementID Identify the element in the dom
 * @param newValue Pass in the value that will be set to the element
 *
 */
function setTextElementValueById(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}
