> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isradical](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isradical)

# isRadical

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a radical component of CJK characters, Tangut characters, or Yi syllables.

## Declaration

```swift
var isRadical: Bool { get }
```

<a id="discussion"></a>

## Discussion

These scalars are often the components of ideographic description sequences, as defined by the `isIDSBinaryOperator` and `isIDSTrinaryOperator` properties.

This property corresponds to the “Radical” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
