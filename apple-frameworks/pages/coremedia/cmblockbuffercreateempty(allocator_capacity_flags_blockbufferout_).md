> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffercreateempty(allocator:capacity:flags:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmblockbuffercreateempty(allocator:capacity:flags:blockbufferout:))

# CMBlockBufferCreateEmpty(allocator:capacity:flags:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an empty block buffer.

## Declaration

```swift
func CMBlockBufferCreateEmpty(allocator structureAllocator: CFAllocator?, capacity subBlockCapacity: UInt32, flags: CMBlockBufferFlags, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>) -> OSStatus
```

## Parameters

- `structureAllocator`: Allocator to use for allocating the `CMBlockBuffer` object. `NULL` will cause the default allocator to be used.
- `subBlockCapacity`: Number of sub-blocks the new `CMBlockBuffer` shall accommodate before expansion occurs. A value of zero means “do the reasonable default”.
- `flags`: Feature and control flags.
- `blockBufferOut`: Receives newly-created empty `CMBlockBuffer` object with retain count of 1. Must not be  `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Creates an empty `CMBlockBuffer`, i.e. one which has no memory block nor reference to a `CMBlockBuffer` supplying bytes to it. It is ready to be populated using `CMBlockBufferAppendMemoryBlock`()  and/or `CMBlockBufferAppendBufferReference`. `CMBlockBufferGetDataLength` will return zero for an empty `CMBlockBuffer` and `CMBlockBufferGetDataPointer` and `CMBlockBufferAssureBufferMemory` will fail.The memory for the `CMBlockBuffer` object will be allocated using the given allocator. If `NULL` is passed for the allocator, the default allocator is used.

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference(allocator:referenceBuffer:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous(allocator:sourceBuffer:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

# CMBlockBufferCreateEmpty (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an empty block buffer.

## Declaration

```objectivec
extern OSStatus CMBlockBufferCreateEmpty(CFAllocatorRef structureAllocator, uint32_t subBlockCapacity, CMBlockBufferFlags flags, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `structureAllocator`: Allocator to use for allocating the `CMBlockBuffer` object. `NULL` will cause the default allocator to be used.
- `subBlockCapacity`: Number of sub-blocks the new `CMBlockBuffer` shall accommodate before expansion occurs. A value of zero means “do the reasonable default”.
- `flags`: Feature and control flags.
- `blockBufferOut`: Receives newly-created empty `CMBlockBuffer` object with retain count of 1. Must not be  `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Creates an empty `CMBlockBuffer`, i.e. one which has no memory block nor reference to a `CMBlockBuffer` supplying bytes to it. It is ready to be populated using `CMBlockBufferAppendMemoryBlock`()  and/or `CMBlockBufferAppendBufferReference`. `CMBlockBufferGetDataLength` will return zero for an empty `CMBlockBuffer` and `CMBlockBufferGetDataPointer` and `CMBlockBufferAssureBufferMemory` will fail.The memory for the `CMBlockBuffer` object will be allocated using the given allocator. If `NULL` is passed for the allocator, the default allocator is used.

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.
