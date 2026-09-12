> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferprotocol](https://developer.apple.com/documentation/coremedia/cmblockbufferprotocol)

# CMBlockBufferProtocol

**Framework:** Core Media  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol for objects that operate on a range of a block buffer.

## Declaration

```swift
protocol CMBlockBufferProtocol
```

## Topics

### Modifying a Block Buffer

- [copyDataBytes(to:)](cmblockbufferprotocol/copydatabytes%28to_%29.md)
- [dataBytes()](cmblockbufferprotocol/databytes%28%29.md)
- [fillDataBytes(with:)](cmblockbufferprotocol/filldatabytes%28with_%29.md)
- [replaceDataBytes(with:)](cmblockbufferprotocol/replacedatabytes%28with_%29.md)
- [isContiguous](cmblockbufferprotocol/iscontiguous.md)
- [makeContiguous(allocator:deallocator:flags:)](cmblockbufferprotocol/makecontiguous%28allocator_deallocator_flags_%29.md)
- [makeContiguous(allocator:flags:)](cmblockbufferprotocol/makecontiguous%28allocator_flags_%29.md)
- [withContiguousStorage(\_:)](cmblockbufferprotocol/withcontiguousstorage%28__%29.md)

### Inspecting a Block Buffer

- [dataLength](cmblockbufferprotocol/datalength.md)
- [startIndex](cmblockbufferprotocol/startindex.md)
- [endIndex](cmblockbufferprotocol/endindex.md)
- [owner](cmblockbufferprotocol/owner.md)

### Subscripts

- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-7a30d.md): Creates a slice from a `ClosedRange`.
- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-1go3.md)
- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-9ntfs.md)
- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-6ghj4.md)
- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-532k5.md)
- [subscript(\_:)](cmblockbufferprotocol/subscript%28__%29-8jilq.md)

## Relationships

### Conforming Types

- [CMBlockBuffer](cmblockbuffer.md)
- [CMBlockBuffer.Slice](cmblockbuffer/slice.md)

## See Also

### Data Types

- [CMBlockBuffer](cmblockbuffer.md): A reference to a block buffer instance.
