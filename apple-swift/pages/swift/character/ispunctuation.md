> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/ispunctuation](https://developer.apple.com/documentation/swift/character/ispunctuation)

# isPunctuation

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents punctuation.

## Declaration

```swift
var isPunctuation: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, the following characters all represent punctuation:

- “!” (U+0021 EXCLAMATION MARK)
- “؟” (U+061F ARABIC QUESTION MARK)
- “…” (U+2026 HORIZONTAL ELLIPSIS)
- “—” (U+2014 EM DASH)
- ““” (U+201C LEFT DOUBLE QUOTATION MARK)

## See Also

### Inspecting a Character

- [isLetter](isletter.md): A Boolean value indicating whether this character is a letter.
- [isNewline](isnewline.md): A Boolean value indicating whether this character represents a newline.
- [isWhitespace](iswhitespace.md): A Boolean value indicating whether this character represents whitespace, including newlines.
- [isSymbol](issymbol.md): A Boolean value indicating whether this character represents a symbol.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
- [isCurrencySymbol](iscurrencysymbol.md): A Boolean value indicating whether this character represents a currency symbol.
