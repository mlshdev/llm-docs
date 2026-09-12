> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/iscurrencysymbol](https://developer.apple.com/documentation/swift/character/iscurrencysymbol)

# isCurrencySymbol

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents a currency symbol.

## Declaration

```swift
var isCurrencySymbol: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, the following characters all represent currency symbols:

- “$” (U+0024 DOLLAR SIGN)
- “¥” (U+00A5 YEN SIGN)
- “€” (U+20AC EURO SIGN)

## See Also

### Inspecting a Character

- [isLetter](isletter.md): A Boolean value indicating whether this character is a letter.
- [isPunctuation](ispunctuation.md): A Boolean value indicating whether this character represents punctuation.
- [isNewline](isnewline.md): A Boolean value indicating whether this character represents a newline.
- [isWhitespace](iswhitespace.md): A Boolean value indicating whether this character represents whitespace, including newlines.
- [isSymbol](issymbol.md): A Boolean value indicating whether this character represents a symbol.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
