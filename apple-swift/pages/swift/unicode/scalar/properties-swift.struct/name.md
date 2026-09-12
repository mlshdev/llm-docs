> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/name](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/name)

# name

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The published name of the scalar.

## Declaration

```swift
var name: String? { get }
```

<a id="discussion"></a>

## Discussion

Some scalars, such as control characters, do not have a value for this property in the Unicode Character Database. For such scalars, this property is `nil`.

This property corresponds to the “Name” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
