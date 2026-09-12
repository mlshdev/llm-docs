> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint8/max](https://developer.apple.com/documentation/swift/uint8/max)

# max

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum representable integer in this type.

## Declaration

```swift
static var max: Self { get }
```

<a id="discussion"></a>

## Discussion

For unsigned integer types, this value is `(2 ** bitWidth) - 1`, where `**` is exponentiation.
