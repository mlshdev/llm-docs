> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/decimaldigit()](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/decimaldigit())

# decimalDigit() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in the category of decimal numbers.

## Declaration

```swift
class func decimalDigit() -> NSMutableCharacterSet
```

## See Also

### Getting Standard Character Sets

- [alphanumeric()](alphanumeric%28%29.md): Returns a character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetter()](capitalizedletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lt.
- [control()](control%28%29.md): Returns a character set containing the characters in Unicode General Category Cc and Cf.
- [decomposable()](decomposable%28%29.md): Returns a character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegal()](illegal%28%29.md): Returns a character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letter()](letter%28%29.md): Returns a character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetter()](lowercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Ll.
- [newline()](newline%28%29.md): Returns a character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBase()](nonbase%28%29.md): Returns a character set containing the characters in Unicode General Category M\*.
- [punctuation()](punctuation%28%29.md): Returns a character set containing the characters in Unicode General Category P\*.
- [symbol()](symbol%28%29.md): Returns a character set containing the characters in Unicode General Category S\*.
- [uppercaseLetter()](uppercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaceAndNewline()](whitespaceandnewline%28%29.md): Returns a character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespace()](whitespace%28%29.md): Returns a character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).

# decimalDigitCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in the category of decimal numbers.

## Declaration

```objectivec
+ (NSMutableCharacterSet *) decimalDigitCharacterSet;
```

## See Also

### Getting Standard Character Sets

- [alphanumericCharacterSet](alphanumeric%28%29.md): Returns a character set containing the characters in Unicode General Categories L\*, M\*, and N\*.
- [capitalizedLetterCharacterSet](capitalizedletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lt.
- [controlCharacterSet](control%28%29.md): Returns a character set containing the characters in Unicode General Category Cc and Cf.
- [decomposableCharacterSet](decomposable%28%29.md): Returns a character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegalCharacterSet](illegal%28%29.md): Returns a character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letterCharacterSet](letter%28%29.md): Returns a character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetterCharacterSet](lowercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Ll.
- [newlineCharacterSet](newline%28%29.md): Returns a character set containing the newline characters (`U+000A` ~ `U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBaseCharacterSet](nonbase%28%29.md): Returns a character set containing the characters in Unicode General Category M\*.
- [punctuationCharacterSet](punctuation%28%29.md): Returns a character set containing the characters in Unicode General Category P\*.
- [symbolCharacterSet](symbol%28%29.md): Returns a character set containing the characters in Unicode General Category S\*.
- [uppercaseLetterCharacterSet](uppercaseletter%28%29.md): Returns a character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaceAndNewlineCharacterSet](whitespaceandnewline%28%29.md): Returns a character set containing characters in Unicode General Category Z\*, `U+000A` ~ `U+000D`, and `U+0085`.
- [whitespaceCharacterSet](whitespace%28%29.md): Returns a character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION` (`U+0009`).
