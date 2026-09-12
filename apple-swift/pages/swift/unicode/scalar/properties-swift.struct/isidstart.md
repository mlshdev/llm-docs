> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isidstart](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isidstart)

# isIDStart

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is one which is recommended to be allowed to appear in a starting position in a programming language identifier.

## Declaration

```swift
var isIDStart: Bool { get }
```

<a id="discussion"></a>

## Discussion

Applications that store identifiers in NFKC normalized form should instead use `isXIDStart` to check whether a scalar is a valid identifier character.

This property corresponds to the “ID_Start” and the “Other_ID_Start” properties in the [Unicode Standard](http://www.unicode.org/versions/latest/).
