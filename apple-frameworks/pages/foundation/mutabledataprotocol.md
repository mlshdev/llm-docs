> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/mutabledataprotocol](https://developer.apple.com/documentation/foundation/mutabledataprotocol)

# MutableDataProtocol

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous mutable data buffers.

## Declaration

```swift
protocol MutableDataProtocol : DataProtocol, MutableCollection, RangeReplaceableCollection
```

## Topics

### Resetting Backing Storage

- [resetBytes(in:)](mutabledataprotocol/resetbytes%28in_%29.md): Replaces the contents of the data buffer with zeros for the provided range.

## Relationships

### Inherits From

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [DataProtocol](dataprotocol.md)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [Data](data.md)

## See Also

### Binary Data

- [Data](data.md): A byte buffer in memory.
- [DataProtocol](dataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous data buffers.
- [ContiguousBytes](contiguousbytes.md): A protocol that declares the type offers direct access to the underlying raw bytes in a contiguous manner.
