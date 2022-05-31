/**
 * This function will encrypt the given string using the Caesar Cipher.
 *
 * @param {String} string The string to be encrypted
 * @param {Integer} shift The number of places to shift the string
 * @returns {String} The encrypted string
 */
const caesarCipher = (string, shift) => {
  const result = [];

  const lowerAsciiOffset = 97;
  const upperAsciiOffset = 65;

  for (const char of string) {
    if (char.toUpperCase() === char) {
      result.push(
        String.fromCharCode(
          ((char.charCodeAt(0) - upperAsciiOffset + shift) % 26) +
            upperAsciiOffset
        )
      );
    } else if (char.toLowerCase() === char) {
      result.push(
        String.fromCharCode(
          ((char.charCodeAt(0) - lowerAsciiOffset + shift) % 26) +
            lowerAsciiOffset
        )
      );
    } else {
      result.push(char);
    }
  }

  return result.join("");
};

module.exports = { caesarCipher };
