> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isasciihexdigit](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isasciihexdigit)

# isASCIIHexDigit

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is an ASCII character commonly used for the representation of hexadecimal numbers.

## Declaration

```swift
var isASCIIHexDigit: Bool { get }
```

<a id="discussion"></a>

## Discussion

The only scalars for which this property is `true` are:

- U+0030…U+0039: DIGIT ZERO…DIGIT NINE
- U+0041…U+0046: LATIN CAPITAL LETTER A…LATIN CAPITAL LETTER F
- U+0061…U+0066: LATIN SMALL LETTER A…LATIN SMALL LETTER F

This property corresponds to the “ASCII_Hex_Digit” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
