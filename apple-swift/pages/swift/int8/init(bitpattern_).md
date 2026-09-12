> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int8/init(bitpattern:)](https://developer.apple.com/documentation/swift/int8/init(bitpattern:))

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance with the same memory representation as the given value.

## Declaration

```swift
init(bitPattern x: UInt8)
```

## Parameters

- `x`: A value to use as the source of the new instance’s binary representation.

<a id="discussion"></a>

## Discussion

This initializer does not perform any range or overflow checking. The resulting instance may not have the same numeric value as `bitPattern`—it is only guaranteed to use the same pattern of bits in its binary representation.
