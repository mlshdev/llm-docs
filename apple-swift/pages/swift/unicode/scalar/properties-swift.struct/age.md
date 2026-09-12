> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/age](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/age)

# age

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The earliest version of the Unicode Standard in which the scalar was assigned.

## Declaration

```swift
var age: Unicode.Version? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` for code points that have not yet been assigned.

This property corresponds to the “Age” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).
