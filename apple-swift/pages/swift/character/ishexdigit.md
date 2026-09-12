> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/ishexdigit](https://developer.apple.com/documentation/swift/character/ishexdigit)

# isHexDigit

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character represents a hexadecimal digit.

## Declaration

```swift
var isHexDigit: Bool { get }
```

<a id="discussion"></a>

## Discussion

Hexadecimal digits include 0-9, Latin letters a-f and A-F, and their fullwidth compatibility forms. To get the character’s value, use the `hexDigitValue` property.

## See Also

### Checking a Character’s Numeric Properties

- [isNumber](isnumber.md): A Boolean value indicating whether this character represents a number.
- [isWholeNumber](iswholenumber.md): A Boolean value indicating whether this character represents a whole number.
- [wholeNumberValue](wholenumbervalue.md): The numeric value this character represents, if it represents a whole number.
- [hexDigitValue](hexdigitvalue.md): The numeric value this character represents, if it is a hexadecimal digit.
