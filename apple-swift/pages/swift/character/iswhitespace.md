> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/iswhitespace](https://developer.apple.com/documentation/swift/character/iswhitespace)

# isWhitespace

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents whitespace, including newlines.

## Declaration

```swift
var isWhitespace: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, the following characters all represent whitespace:

- “\\t” (U+0009 CHARACTER TABULATION)
- “ “ (U+0020 SPACE)
- U+2029 PARAGRAPH SEPARATOR
- U+3000 IDEOGRAPHIC SPACE

## See Also

### Inspecting a Character

- [isLetter](isletter.md): A Boolean value indicating whether this character is a letter.
- [isPunctuation](ispunctuation.md): A Boolean value indicating whether this character represents punctuation.
- [isNewline](isnewline.md): A Boolean value indicating whether this character represents a newline.
- [isSymbol](issymbol.md): A Boolean value indicating whether this character represents a symbol.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
- [isCurrencySymbol](iscurrencysymbol.md): A Boolean value indicating whether this character represents a currency symbol.
