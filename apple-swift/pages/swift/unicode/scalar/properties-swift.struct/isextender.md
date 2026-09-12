> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isextender](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isextender)

# isExtender

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar’s principal function is to extend the value or shape of a preceding alphabetic scalar.

## Declaration

```swift
var isExtender: Bool { get }
```

<a id="discussion"></a>

## Discussion

Typical extenders are length and iteration marks.

This property corresponds to the “Extender” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
