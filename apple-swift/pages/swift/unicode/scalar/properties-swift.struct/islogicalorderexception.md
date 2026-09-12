> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/islogicalorderexception](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/islogicalorderexception)

# isLogicalOrderException

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar requires special handling for operations involving ordering, such as sorting and searching.

## Declaration

```swift
var isLogicalOrderException: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property applies to a small number of spacing vowel letters occurring in some Southeast Asian scripts like Thai and Lao, which use a visual order display model. Such letters are stored in text ahead of syllable-initial consonants.

This property corresponds to the “Logical_Order_Exception” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
