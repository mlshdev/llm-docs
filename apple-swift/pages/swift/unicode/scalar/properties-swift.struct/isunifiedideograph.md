> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isunifiedideograph](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isunifiedideograph)

# isUnifiedIdeograph

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is one of the unified CJK ideographs in the Unicode Standard.

## Declaration

```swift
var isUnifiedIdeograph: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is false for CJK punctuation and symbols, as well as for compatibility ideographs (which canonically decompose to unified ideographs).

This property corresponds to the “Unified_Ideograph” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
