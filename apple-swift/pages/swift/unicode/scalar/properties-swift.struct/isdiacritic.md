> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isdiacritic](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isdiacritic)

# isDiacritic

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a diacritic.

## Declaration

```swift
var isDiacritic: Bool { get }
```

<a id="discussion"></a>

## Discussion

Diacritics are scalars that linguistically modify the meaning of another scalar to which they apply. Scalars for which this property is `true` are frequently, but not always, combining marks or modifiers.

This property corresponds to the “Diacritic” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
