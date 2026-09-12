> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/characterset/alphanumerics](https://developer.apple.com/documentation/foundation/characterset/alphanumerics)

# alphanumerics

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in Unicode General Categories L\*, M\*, and N\*.

## Declaration

```swift
static var alphanumerics: CharacterSet { get }
```

## See Also

### Getting Standard Character Sets

- [capitalizedLetters](capitalizedletters.md): Returns a character set containing the characters in Unicode General Category Lt.
- [controlCharacters](controlcharacters.md): Returns a character set containing the characters in Unicode General Category Cc and Cf.
- [decimalDigits](decimaldigits.md): Returns a character set containing the characters in the category of Decimal Numbers.
- [decomposables](decomposables.md): Returns a character set containing individual Unicode characters that can also be represented as composed character sequences (such as for letters with accents), by the definition of “standard decomposition” in version 3.2 of the Unicode character encoding standard.
- [illegalCharacters](illegalcharacters.md): Returns a character set containing values in the category of Non-Characters or that have not yet been defined in version 3.2 of the Unicode standard.
- [letters](letters.md): Returns a character set containing the characters in Unicode General Category L\* & M\*.
- [lowercaseLetters](lowercaseletters.md): Returns a character set containing the characters in Unicode General Category Ll.
- [newlines](newlines.md): Returns a character set containing the newline characters (`U+000A ~ U+000D`, `U+0085`, `U+2028`, and `U+2029`).
- [nonBaseCharacters](nonbasecharacters.md): Returns a character set containing the characters in Unicode General Category M\*.
- [punctuationCharacters](punctuationcharacters.md): Returns a character set containing the characters in Unicode General Category P\*.
- [symbols](symbols.md): Returns a character set containing the characters in Unicode General Category S\*.
- [uppercaseLetters](uppercaseletters.md): Returns a character set containing the characters in Unicode General Category Lu and Lt.
- [whitespaces](whitespaces.md): Returns a character set containing the characters in Unicode General Category Zs and `CHARACTER TABULATION (U+0009)`.
- [whitespacesAndNewlines](whitespacesandnewlines.md): Returns a character set containing characters in Unicode General Category Z\*, `U+000A ~ U+000D`, and `U+0085`.
