> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/isletter](https://developer.apple.com/documentation/swift/character/isletter)

# isLetter

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character is a letter.

## Declaration

```swift
var isLetter: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, the following characters are all letters:

- “A” (U+0041 LATIN CAPITAL LETTER A)
- “é” (U+0065 LATIN SMALL LETTER E, U+0301 COMBINING ACUTE ACCENT)
- “ϴ” (U+03F4 GREEK CAPITAL THETA SYMBOL)
- “ڈ” (U+0688 ARABIC LETTER DDAL)
- “日” (U+65E5 CJK UNIFIED IDEOGRAPH-65E5)
- “ᚨ” (U+16A8 RUNIC LETTER ANSUZ A)

## See Also

### Inspecting a Character

- [isPunctuation](ispunctuation.md): A Boolean value indicating whether this character represents punctuation.
- [isNewline](isnewline.md): A Boolean value indicating whether this character represents a newline.
- [isWhitespace](iswhitespace.md): A Boolean value indicating whether this character represents whitespace, including newlines.
- [isSymbol](issymbol.md): A Boolean value indicating whether this character represents a symbol.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
- [isCurrencySymbol](iscurrencysymbol.md): A Boolean value indicating whether this character represents a currency symbol.
