> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/lowercasemapping](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/lowercasemapping)

# lowercaseMapping

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The lowercase mapping of the scalar.

## Declaration

```swift
var lowercaseMapping: String { get }
```

<a id="discussion"></a>

## Discussion

This property is a `String`, not a `Unicode.Scalar` or `Character`, because some mappings may transform a scalar into multiple scalars or graphemes. For example, the character “İ” (U+0130 LATIN CAPITAL LETTER I WITH DOT ABOVE) becomes two scalars (U+0069 LATIN SMALL LETTER I, U+0307 COMBINING DOT ABOVE) when converted to lowercase.

This property corresponds to the “Lowercase_Mapping” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
