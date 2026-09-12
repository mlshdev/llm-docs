> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/init(bitpattern:)](https://developer.apple.com/documentation/swift/uint128/init(bitpattern:))

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new instance with the same memory representation as the given value.

## Declaration

```swift
init(bitPattern: Int128)
```

## Parameters

- `bitPattern`: A value to use as the source of the new instance’s binary representation.

<a id="discussion"></a>

## Discussion

This initializer does not perform any range or overflow checking. The resulting instance may not have the same numeric value as `bitPattern`—it is only guaranteed to use the same pattern of bits in its binary representation.
