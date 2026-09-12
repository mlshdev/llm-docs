> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(littleendian:)](https://developer.apple.com/documentation/swift/int/init(littleendian:))

# init(littleEndian:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an integer from its little-endian representation, changing the byte order if necessary.

## Declaration

```swift
init(littleEndian value: Self)
```

## Parameters

- `value`: A value to use as the little-endian representation of the new integer.

## See Also

### Working with Byte Order

- [byteSwapped](byteswapped.md): A representation of this integer with the byte order swapped.
- [littleEndian](littleendian.md): The little-endian representation of this integer.
- [bigEndian](bigendian.md): The big-endian representation of this integer.
- [init(bigEndian:)](init%28bigendian_%29.md): Creates an integer from its big-endian representation, changing the byte order if necessary.
