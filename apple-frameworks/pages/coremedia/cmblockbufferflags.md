> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferflags](https://developer.apple.com/documentation/coremedia/cmblockbufferflags)

# CMBlockBufferFlags (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A type for flags that control behaviors and features of block buffer APIs.

## Declaration

```swift
typealias CMBlockBufferFlags = UInt32
```

## Topics

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBuffer](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferDontOptimizeDepthFlag](kcmblockbufferdontoptimizedepthflag.md): Passed to block buffers to suppress reference depth optimization.
- [kCMBlockBufferPermitEmptyReferenceFlag](kcmblockbufferpermitemptyreferenceflag.md): Passed to [CMBlockBuffer](cmblockbuffer.md) and [CMBlockBuffer](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty(allocator:capacity:flags:blockBufferOut:)](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference(allocator:referenceBuffer:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous(allocator:sourceBuffer:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

# CMBlockBufferFlags (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A type for flags that control behaviors and features of block buffer APIs.

## Declaration

```objectivec
typedef uint32_t CMBlockBufferFlags;
```

## Topics

### Constants

- [kCMBlockBufferAssureMemoryNowFlag](kcmblockbufferassurememorynowflag.md): When passed to routines that accept block allocators, causes the memory block to be allocated immediately.
- [kCMBlockBufferAlwaysCopyDataFlag](kcmblockbufferalwayscopydataflag.md): Used with [CMBlockBufferRef](cmblockbuffer.md) to cause it to always produce an allocated copy of the desired data.
- [kCMBlockBufferDontOptimizeDepthFlag](kcmblockbufferdontoptimizedepthflag.md): Passed to block buffers to suppress reference depth optimization.
- [kCMBlockBufferPermitEmptyReferenceFlag](kcmblockbufferpermitemptyreferenceflag.md): Passed to [CMBlockBufferRef](cmblockbuffer.md) and [CMBlockBufferRef](cmblockbuffer.md) to allow references into a `CMBlockBuffer` that may not yet be populated.

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.
