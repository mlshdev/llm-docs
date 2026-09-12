> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/issoftdotted](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/issoftdotted)

# isSoftDotted

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar has a “soft dot” that disappears when a diacritic is placed over the scalar.

## Declaration

```swift
var isSoftDotted: Bool { get }
```

<a id="discussion"></a>

## Discussion

For example, “i” is soft dotted because the dot disappears when adding an accent mark, as in “í”.

This property corresponds to the “Soft_Dotted” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
