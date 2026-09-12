> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/issymbol](https://developer.apple.com/documentation/swift/character/issymbol)

# isSymbol

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents a symbol.

## Declaration

```swift
var isSymbol: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` only for characters composed of scalars in the “Math_Symbol”, “Currency_Symbol”, “Modifier_Symbol”, or “Other_Symbol” categories in the [Unicode Standard](https://unicode.org/reports/tr44/#General_Category_Values).

For example, the following characters all represent symbols:

- “®” (U+00AE REGISTERED SIGN)
- “⌹” (U+2339 APL FUNCTIONAL SYMBOL QUAD DIVIDE)
- “⡆” (U+2846 BRAILLE PATTERN DOTS-237)

## See Also

### Inspecting a Character

- [isLetter](isletter.md): A Boolean value indicating whether this character is a letter.
- [isPunctuation](ispunctuation.md): A Boolean value indicating whether this character represents punctuation.
- [isNewline](isnewline.md): A Boolean value indicating whether this character represents a newline.
- [isWhitespace](iswhitespace.md): A Boolean value indicating whether this character represents whitespace, including newlines.
- [isMathSymbol](ismathsymbol.md): A Boolean value indicating whether this character represents a symbol that naturally appears in mathematical contexts.
- [isCurrencySymbol](iscurrencysymbol.md): A Boolean value indicating whether this character represents a currency symbol.
