> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/byteorder](https://developer.apple.com/documentation/swift/byteorder)

# ByteOrder

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A byte ordering in memory.

## Declaration

```swift
@frozen enum ByteOrder
```

## Topics

### Operators

- [==(\_:\_:)](byteorder/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Enumeration Cases

- [ByteOrder.bigEndian](byteorder/bigendian.md): Bytes are ordered with the most significant bits starting at the lowest memory address.
- [ByteOrder.littleEndian](byteorder/littleendian.md): Bytes are ordered with the least significant bits starting at the lowest memory address.

### Instance Properties

- [hashValue](byteorder/hashvalue.md): The hash value.

### Instance Methods

- [hash(into:)](byteorder/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Properties

- [native](byteorder/native.md): The native byte ordering for the runtime target.

### Default Implementations

- [Equatable Implementations](byteorder/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Safe Access to Raw Bytes

- [FullyInhabited](fullyinhabited.md): A protocol for types whose memory can safely be written as or read from raw bytes.
- [ConvertibleFromBytes](convertiblefrombytes.md): A protocol for types whose memory can safely be populated from raw bytes, resulting in a valid instance.
- [ConvertibleToBytes](convertibletobytes.md): A protocol for types whose memory can safely be read as individual raw bytes.
- [bitCast(\_:to:)](bitcast%28__to_%29.md): Returns the bits of the given instance, interpreted as having the specified type.
