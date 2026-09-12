> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isvariationselector](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isvariationselector)

# isVariationSelector

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a variation selector.

## Declaration

```swift
var isVariationSelector: Bool { get }
```

<a id="discussion"></a>

## Discussion

Variation selectors allow rendering engines that support them to choose different glyphs to display for a particular code point.

This property corresponds to the “Variation_Selector” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
