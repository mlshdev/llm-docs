> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/isnewline](https://developer.apple.com/documentation/swift/character/isnewline)

# isNewline

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents a newline.

## Declaration

```swift
var isNewline: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, the following characters all represent newlines:

- “\\n” (U+000A): LINE FEED (LF)
- U+000B: LINE TABULATION (VT)
- U+000C: FORM FEED (FF)
- “\\r” (U+000D): CARRIAGE RETURN (CR)
- “\\r\\n” (U+000D U+000A): CR-LF
- U+0085: NEXT LINE (NEL)
- U+2028: LINE SEPARATOR
- U+2029: PARAGRAPH SEPARATOR

## See Also

### Inspecting a Character

- [isLetter](isletter.md): A Boolean value indicating whether this character is a letter.
- [isPunctuation](ispunctuation.md): A Boolean value indicating whether this character represents punctuation.
- [isWhitespace](iswhitespace.md): A Boolean value indicating whether this character represents whitespace, including newlines.
- [isSymbol](issymbol.md): A Boolean value indicating whether this character represents a symbol.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
- [isCurrencySymbol](iscurrencysymbol.md): A Boolean value indicating whether this character represents a currency symbol.
