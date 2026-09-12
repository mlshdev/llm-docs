> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer)

# CMMutableDataBlockBuffer

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A block buffer that provides read-write access to a range of bytes.

## Declaration

```swift
struct CMMutableDataBlockBuffer
```

<a id="overview"></a>

## Overview

Mutable block buffer provides a contiguous range of data offsets (from 0 to [count](cmmutabledatablockbuffer/count.md)) a possibly non-contiguous range of bytes. The bytes referenced by this buffer are mutable.

## Topics

### Classes

- [CMMutableDataBlockBuffer.MemoryPool](cmmutabledatablockbuffer/memorypool.md): Optimize memory allocations when working with large block buffers.

### Structures

- [CMMutableDataBlockBuffer.BlockRegion](cmmutabledatablockbuffer/blockregion.md): A contiguous region of mutable memory within a block buffer.
- [CMMutableDataBlockBuffer.BlockSource](cmmutabledatablockbuffer/blocksource.md): Provides ability to allocate memory for blocks using custom allocator

### Operators

- [+=(\_:\_:)](cmmutabledatablockbuffer/+=%28____%29.md): Appends the bytes of another block buffer without copying.

### Initializers

- [init(copying:blockSource:)](cmmutabledatablockbuffer/init%28copying_blocksource_%29.md): Creates a block buffer by copying the given audio buffer list.
- [init(count:blockSource:)](cmmutabledatablockbuffer/init%28count_blocksource_%29.md): Creates a block buffer with `count` number of bytes.
- [init(subBlockCapacity:blockSource:)](cmmutabledatablockbuffer/init%28subblockcapacity_blocksource_%29.md): Creates a block buffer with at least `subBlockCapacity` number of sub blocks.
- [init(unsafeBlockBuffer:)](cmmutabledatablockbuffer/init%28unsafeblockbuffer_%29.md): Creates a mutable block buffer from an existing block buffer.

### Instance Properties

- [attachments](cmmutabledatablockbuffer/attachments-swift.property.md)
- [count](cmmutabledatablockbuffer/count.md): The number of bytes in the block buffer.
- [endIndex](cmmutabledatablockbuffer/endindex.md): The position one greater than the last valid subscript argument.
- [indices](cmmutabledatablockbuffer/indices-swift.property.md): The indices that are valid for subscripting the collection, in ascending order.
- [isContiguous](cmmutabledatablockbuffer/iscontiguous.md): Determine whether the block buffer is contiguous.
- [isEmpty](cmmutabledatablockbuffer/isempty.md): Indicates whether the block buffer is empty.
- [startIndex](cmmutabledatablockbuffer/startindex.md): The position of the first element.

### Instance Methods

- [append(referenceOf:range:optimizeDepth:)](cmmutabledatablockbuffer/append%28referenceof_range_optimizedepth_%29.md): Append a reference to a range of another block buffer.
- [copyBytes(to:)](cmmutabledatablockbuffer/copybytes%28to_%29.md): Copy all bytes to the destination buffer.
- [copyBytes(to:from:)](cmmutabledatablockbuffer/copybytes%28to_from_%29.md): Copy the bytes from the given range to the destination buffer.
- [extend(by:)](cmmutabledatablockbuffer/extend%28by_%29.md): Extend block buffer by appending a memory block of count bytes.
- [isRangeContiguous(\_:)](cmmutabledatablockbuffer/israngecontiguous%28__%29.md): Returns true if the given range refers to a contiguous block of memory.
- [replaceAll(repeating:)](cmmutabledatablockbuffer/replaceall%28repeating_%29.md): Replace all bytes in the buffer with the given byte.
- [replaceAll(with:)](cmmutabledatablockbuffer/replaceall%28with_%29-4sg07.md): Replace all data in the buffer with new bytes.
- [replaceAll(with:)](cmmutabledatablockbuffer/replaceall%28with_%29-6jidg.md): Replace all data in the buffer with new bytes.
- [replaceSubrange(\_:repeating:)](cmmutabledatablockbuffer/replacesubrange%28__repeating_%29.md): Fill a range in the buffer with given byte.
- [replaceSubrange(\_:with:)](cmmutabledatablockbuffer/replacesubrange%28__with_%29-5w62q.md): Replace a range of bytes in the block buffer.
- [replaceSubrange(\_:with:)](cmmutabledatablockbuffer/replacesubrange%28__with_%29-7rqdy.md): Replace a range of bytes in the block buffer.
- [withContiguousMutableStorageIfAvailable(in:\_:)](cmmutabledatablockbuffer/withcontiguousmutablestorageifavailable%28in___%29.md): Access contents of the buffer if available as contiguous memory block.
- [withContiguousStorageIfAvailable(in:\_:)](cmmutabledatablockbuffer/withcontiguousstorageifavailable%28in___%29.md): Access contents of the buffer if available as contiguous memory block.
- [withUnsafeBlockBuffer(\_:)](cmmutabledatablockbuffer/withunsafeblockbuffer%28__%29.md): Access the underlying CMBlockBuffer instance.
- [withUnsafeBlockRegions(\_:)](cmmutabledatablockbuffer/withunsafeblockregions%28__%29.md): Access the potentially non-contiguous memory region referenced by this block buffer.
- [withUnsafeMutableBlockRegions(\_:)](cmmutabledatablockbuffer/withunsafemutableblockregions%28__%29.md): Access the potentially non-contiguous memory region referenced by this block buffer.

### Subscripts

- [subscript(\_:)](cmmutabledatablockbuffer/subscript%28__%29.md): Accesses the data byte at the specified position.

### Type Aliases

- [CMMutableDataBlockBuffer.Attachments](cmmutabledatablockbuffer/attachments-swift.typealias.md)
- [CMMutableDataBlockBuffer.Index](cmmutabledatablockbuffer/index.md)
- [CMMutableDataBlockBuffer.Indices](cmmutabledatablockbuffer/indices-swift.typealias.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.
