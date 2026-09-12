> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffercreatewithbufferreference(allocator:referencebuffer:offsettodata:datalength:flags:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmblockbuffercreatewithbufferreference(allocator:referencebuffer:offsettodata:datalength:flags:blockbufferout:))

# CMBlockBufferCreateWithBufferReference(allocator:referenceBuffer:offsetToData:dataLength:flags:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a block buffer that refers to another block buffer object.

## Declaration

```swift
func CMBlockBufferCreateWithBufferReference(allocator structureAllocator: CFAllocator?, referenceBuffer bufferReference: CMBlockBuffer, offsetToData: Int, dataLength: Int, flags: CMBlockBufferFlags, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>) -> OSStatus
```

## Parameters

- `structureAllocator`: Allocator to use for allocating the `CMBlockBuffer` object. `NULL` will cause the default allocator to be used.
- `bufferReference`: The target `CMBlockBuffer`. This parameter must not be `NULL`. Unless the `kCMBlockBufferPermitEmptyReferenceFlag` is passed, it must not be empty and it must have a data length at least large enough to supply the data subset specified (i.e. offsetToData+dataLength bytes).
- `offsetToData`: Offset within the target `CMBlockBuffer` at which the new `CMBlockBuffer` should refer to data.
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the target `CMBlockBuffer`.
- `flags`: Feature and control flags.
- `blockBufferOut`: Receives newly-created `CMBlockBuffer` object with a retain count of 1. Must not be  `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Creates a new `CMBlockBuffer` that refers to (a possibly subset portion of) another `CMBlockBuffer`. The returned `CMBlockBuffer` may be further expanded using [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md) and/or [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md).

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty(allocator:capacity:flags:blockBufferOut:)](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateContiguous(allocator:sourceBuffer:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

# CMBlockBufferCreateWithBufferReference (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a block buffer that refers to another block buffer object.

## Declaration

```objectivec
extern OSStatus CMBlockBufferCreateWithBufferReference(CFAllocatorRef structureAllocator, CMBlockBufferRef bufferReference, size_t offsetToData, size_t dataLength, CMBlockBufferFlags flags, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `structureAllocator`: Allocator to use for allocating the `CMBlockBuffer` object. `NULL` will cause the default allocator to be used.
- `bufferReference`: The target `CMBlockBuffer`. This parameter must not be `NULL`. Unless the `kCMBlockBufferPermitEmptyReferenceFlag` is passed, it must not be empty and it must have a data length at least large enough to supply the data subset specified (i.e. offsetToData+dataLength bytes).
- `offsetToData`: Offset within the target `CMBlockBuffer` at which the new `CMBlockBuffer` should refer to data.
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the target `CMBlockBuffer`.
- `flags`: Feature and control flags.
- `blockBufferOut`: Receives newly-created `CMBlockBuffer` object with a retain count of 1. Must not be  `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Creates a new `CMBlockBuffer` that refers to (a possibly subset portion of) another `CMBlockBuffer`. The returned `CMBlockBuffer` may be further expanded using [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md) and/or [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md).

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateContiguous](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.
