> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fullyinhabited](https://developer.apple.com/documentation/swift/fullyinhabited)

# FullyInhabited

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol for types whose memory can safely be written as or read from raw bytes.

## Declaration

```swift
typealias FullyInhabited = ConvertibleFromBytes & ConvertibleToBytes
```

## See Also

### Safe Access to Raw Bytes

- [ConvertibleFromBytes](convertiblefrombytes.md): A protocol for types whose memory can safely be populated from raw bytes, resulting in a valid instance.
- [ConvertibleToBytes](convertibletobytes.md): A protocol for types whose memory can safely be read as individual raw bytes.
- [ByteOrder](byteorder.md): A byte ordering in memory.
- [bitCast(\_:to:)](bitcast%28__to_%29.md): Returns the bits of the given instance, interpreted as having the specified type.
