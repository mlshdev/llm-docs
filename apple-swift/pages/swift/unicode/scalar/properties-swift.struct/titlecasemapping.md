> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/titlecasemapping](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/titlecasemapping)

# titlecaseMapping

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The titlecase mapping of the scalar.

## Declaration

```swift
var titlecaseMapping: String { get }
```

<a id="discussion"></a>

## Discussion

This property is a `String`, not a `Unicode.Scalar` or `Character`, because some mappings may transform a scalar into multiple scalars or graphemes. For example, the ligature “ﬁ” (U+FB01 LATIN SMALL LIGATURE FI) becomes “Fi” (U+0046 LATIN CAPITAL LETTER F, U+0069 LATIN SMALL LETTER I) when converted to titlecase.

This property corresponds to the “Titlecase_Mapping” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
