

def caesar_cipher(string, shift):
    """
    This function takes a string and returns the caeser cipher of the string
    rotated by the shift amount.

    Args:
        string (str): The string to be encrypted.
        shift (int): The amount to shift the string.

    Returns:
        str: The encrypted string.

    Example:
        >>> caesar_cipher("Hello, World!", 3)
        'Khoor, Zruog!'
    """

    result = list()
    lower_ascii_offset, upper_ascii_offset = 97, 65

    for char in string:
        if char.isupper():
            result.append(chr((ord(char) - upper_ascii_offset + shift) % 26 + upper_ascii_offset))
        elif char.islower():
            result.append(chr((ord(char) - lower_ascii_offset + shift) % 26 + lower_ascii_offset))
        else:
            result.append(char)

    return "".join(result)


def main():
    print(caesar_cipher("Hello, World!", 3))


if __name__ == '__main__':
    main()
