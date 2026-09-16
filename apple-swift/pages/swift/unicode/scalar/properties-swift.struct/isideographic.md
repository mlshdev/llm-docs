> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isideographic

# isIdeographic

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is considered to be a CJKV (Chinese, Japanese, Korean, and Vietnamese) or other siniform (Chinese writing-related) ideograph.

## Declaration

```swift
var isIdeographic: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property roughly defines the class of “Chinese characters” and does not include characters of other logographic scripts such as Cuneiform or Egyptian Hieroglyphs.

This property corresponds to the “Ideographic” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
