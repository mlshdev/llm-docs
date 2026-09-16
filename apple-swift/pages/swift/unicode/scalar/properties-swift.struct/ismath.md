> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/ismath

# isMath

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is one that naturally appears in mathematical contexts.

## Declaration

```swift
var isMath: Bool { get }
```

<a id="discussion"></a>

## Discussion

The set of scalars for which this property is `true` includes mathematical operators and symbols as well as specific Greek and Hebrew letter variants that are categorized as symbols. Notably, it does *not* contain the standard digits or Latin/Greek letter blocks; instead, it contains the mathematical Latin, Greek, and Arabic letters and numbers defined in the Supplemental Multilingual Plane.

This property corresponds to the “Math” and the “Other_Math” properties in the [Unicode Standard](http://www.unicode.org/versions/latest/).
