> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dataprotocol](https://developer.apple.com/documentation/foundation/dataprotocol)

# DataProtocol

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous data buffers.

## Declaration

```swift
protocol DataProtocol : RandomAccessCollection where Self.Element == UInt8, Self.SubSequence : DataProtocol
```

## Topics

### Accessing Backing Storage

- [regions](dataprotocol/regions-swift.property.md): A collection of buffers that make up the whole of the type conforming to a data protocol.
- [Regions](dataprotocol/regions-swift.associatedtype.md): A type that represents a collection of contiguous parts that make up the type conforming to a data protocol.

### Copying Underlying Bytes

- [copyBytes(to:)](dataprotocol/copybytes%28to_%29-52wps.md): Copies the bytes of data from the type into a typed memory buffer.
- [copyBytes(to:)](dataprotocol/copybytes%28to_%29-3mk27.md): Copies the bytes of data from the type into a raw memory buffer.
- [copyBytes(to:count:)](dataprotocol/copybytes%28to_count_%29-6krsm.md): Copies the provided number of bytes from the start of the type into a typed memory buffer.
- [copyBytes(to:count:)](dataprotocol/copybytes%28to_count_%29-29t5.md): Copies the provided number of bytes from the start of the type into a raw memory buffer.
- [copyBytes(to:from:)](dataprotocol/copybytes%28to_from_%29-1ol47.md): Copies a range of the bytes from the type into a typed memory buffer.
- [copyBytes(to:from:)](dataprotocol/copybytes%28to_from_%29-1y839.md): Copies a range of the bytes from the type into a raw memory buffer.

### Searching Within Data

- [firstRange(of:)](dataprotocol/firstrange%28of_%29.md): Returns the first found range of the type’s data buffer.
- [firstRange(of:in:)](dataprotocol/firstrange%28of_in_%29.md): Returns the first found range of the type’s data buffer.
- [lastRange(of:)](dataprotocol/lastrange%28of_%29.md): Returns the last found range of the type’s data buffer.
- [lastRange(of:in:)](dataprotocol/lastrange%28of_in_%29.md): Returns the last found range of the type’s data buffer.

## Relationships

### Inherits From

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Inherited By

- [MutableDataProtocol](mutabledataprotocol.md)

### Conforming Types

- [Data](data.md)
- [NSData](nsdata.md)
- [NSMutableData](nsmutabledata.md)
- [NSPurgeableData](nspurgeabledata.md)

## See Also

### Binary Data

- [Data](data.md): A byte buffer in memory.
- [MutableDataProtocol](mutabledataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous mutable data buffers.
- [ContiguousBytes](contiguousbytes.md): A protocol that declares the type offers direct access to the underlying raw bytes in a contiguous manner.
