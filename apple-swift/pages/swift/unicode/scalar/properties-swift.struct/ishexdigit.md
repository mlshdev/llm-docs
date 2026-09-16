> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/ishexdigit

# isHexDigit

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is one that is commonly used for the representation of hexadecimal numbers or a compatibility equivalent.

## Declaration

```swift
var isHexDigit: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` for all scalars for which `isASCIIHexDigit` is `true` as well as for their CJK halfwidth and fullwidth variants.

This property corresponds to the “Hex_Digit” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
