> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadonlydatablockbuffer/blockregion](https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/blockregion)

# CMReadOnlyDataBlockBuffer.BlockRegion

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A contiguous region of memory within a block buffer.

## Declaration

```swift
struct BlockRegion
```

## Topics

### Instance Properties

- [count](blockregion/count.md): Number of bytes in the block region
- [endIndex](blockregion/endindex.md): The position one greater than the last valid subscript argument.
- [regions](blockregion/regions.md): The single buffer that makes up this region.
- [startIndex](blockregion/startindex.md): The position of the first element in a nonempty collection.

### Instance Methods

- [withContiguousStorageIfAvailable(\_:)](blockregion/withcontiguousstorageifavailable%28__%29.md): Access contents of the buffer if available as contiguous memory block.
- [withUnsafeBytes(\_:)](blockregion/withunsafebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the region’s contiguous storage.

### Subscripts

- [subscript(\_:)](blockregion/subscript%28__%29.md): Accesses the data byte at the specified position.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ContiguousBytes](../../foundation/contiguousbytes.md)
- [DataProtocol](../../foundation/dataprotocol.md)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
