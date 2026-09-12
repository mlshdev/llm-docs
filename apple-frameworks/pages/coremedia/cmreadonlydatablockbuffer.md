> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadonlydatablockbuffer](https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer)

# CMReadOnlyDataBlockBuffer

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A block buffer that provides read-only access to the a range of bytes.

## Declaration

```swift
struct CMReadOnlyDataBlockBuffer
```

<a id="overview"></a>

## Overview

Block buffer provides a contiguous range of data offsets (from 0 to [count](cmreadonlydatablockbuffer/count.md)) across a possibly non-contiguous range of bytes. The byte range may contain memory blocks and buffer references. The bytes held by this buffer can not be modified. However, the composition of the byte range can be changed by appending other memory blocks or buffer references.

## Topics

### Structures

- [CMReadOnlyDataBlockBuffer.BlockRegion](cmreadonlydatablockbuffer/blockregion.md): A contiguous region of memory within a block buffer.

### Operators

- [+(\_:\_:)](cmreadonlydatablockbuffer/+%28____%29-58lg4.md): Creates a new block buffer by concatenating two block buffers.
- [+(\_:\_:)](cmreadonlydatablockbuffer/+%28____%29-92jke.md): Creates a new block buffer by concatenating two block buffers.
- [+=(\_:\_:)](cmreadonlydatablockbuffer/+=%28____%29-67kx8.md): Appends the bytes of another block buffer without copying.
- [+=(\_:\_:)](cmreadonlydatablockbuffer/+=%28____%29-7fm8e.md): Appends the bytes of another block buffer without copying.

### Initializers

- [init(\_:)](cmreadonlydatablockbuffer/init%28__%29-5fdm2.md): Create a readonly block buffer from existing block buffer.
- [init(\_:)](cmreadonlydatablockbuffer/init%28__%29-80jym.md)
- [init(\_:)](cmreadonlydatablockbuffer/init%28__%29-w7h3.md): Create a new block buffer referencing bytes from Data.
- [init(subBlockCapacity:)](cmreadonlydatablockbuffer/init%28subblockcapacity_%29.md): Create empty block buffer.
- [init(unsafeBlockBuffer:)](cmreadonlydatablockbuffer/init%28unsafeblockbuffer_%29.md): Create a readonly block buffer from an existing block buffer.

### Instance Properties

- [attachments](cmreadonlydatablockbuffer/attachments-swift.property.md)
- [isContiguous](cmreadonlydatablockbuffer/iscontiguous.md): Determine whether the block buffer is contiguous.

### Instance Methods

- [append(referenceOf:optimizeDepth:)](cmreadonlydatablockbuffer/append%28referenceof_optimizedepth_%29-2x1ta.md): Append a reference to a range of another block buffer.
- [append(referenceOf:optimizeDepth:)](cmreadonlydatablockbuffer/append%28referenceof_optimizedepth_%29-5g65c.md): Append a reference to a range of another block buffer.
- [withContiguousStorageIfAvailable(\_:)](cmreadonlydatablockbuffer/withcontiguousstorageifavailable%28__%29-7tacg.md): Access contents of the buffer if available as contiguous memory block.
- [withUnsafeBlockBuffer(\_:)](cmreadonlydatablockbuffer/withunsafeblockbuffer%28__%29.md): Access the underlying CMBlockBuffer instance.

### Type Aliases

- [CMReadOnlyDataBlockBuffer.Attachments](cmreadonlydatablockbuffer/attachments-swift.typealias.md)

### Default Implementations

- [Collection Implementations](cmreadonlydatablockbuffer/collection-implementations.md)
- [DataProtocol Implementations](cmreadonlydatablockbuffer/dataprotocol-implementations.md)
- [RandomAccessCollection Implementations](cmreadonlydatablockbuffer/randomaccesscollection-implementations.md)
- [Sequence Implementations](cmreadonlydatablockbuffer/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [CMSampleBuffer.Content](cmsamplebuffer/content.md)
- [CMSampleBuffer.ContentWithFormatDescription](cmsamplebuffer/contentwithformatdescription.md)
- [CMSampleBuffer.MultiSampleContent](cmsamplebuffer/multisamplecontent.md)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DataProtocol](../foundation/dataprotocol.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.
