> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffercustomblocksource](https://developer.apple.com/documentation/coremedia/cmblockbuffercustomblocksource)

# CMBlockBufferCustomBlockSource (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure to support custom memory allocation and deallocation for a block used in a block buffer.

## Declaration

```swift
struct CMBlockBufferCustomBlockSource
```

<a id="overview"></a>

## Overview

This structure allows a client to provide a custom facility for obtaining the memory block to be used in a `CMBlockBuffer`. You use this structure with functions that accept a memory block allocator.

## Topics

### Initializers

- [init()](cmblockbuffercustomblocksource/init%28%29.md)
- [init(version:AllocateBlock:FreeBlock:refCon:)](cmblockbuffercustomblocksource/init%28version_allocateblock_freeblock_refcon_%29.md)

### Properties

- [AllocateBlock](cmblockbuffercustomblocksource/allocateblock.md): The function to allocate memory.
- [FreeBlock](cmblockbuffercustomblocksource/freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [refCon](cmblockbuffercustomblocksource/refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](cmblockbuffercustomblocksource/version.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty(allocator:capacity:flags:blockBufferOut:)](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference(allocator:referenceBuffer:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous(allocator:sourceBuffer:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

# CMBlockBufferCustomBlockSource (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure to support custom memory allocation and deallocation for a block used in a block buffer.

## Declaration

```objectivec
typedef struct { ... } CMBlockBufferCustomBlockSource;
```

<a id="overview"></a>

## Overview

This structure allows a client to provide a custom facility for obtaining the memory block to be used in a `CMBlockBuffer`. You use this structure with functions that accept a memory block allocator.

## Topics

### Properties

- [AllocateBlock](cmblockbuffercustomblocksource/allocateblock.md): The function to allocate memory.
- [FreeBlock](cmblockbuffercustomblocksource/freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [refCon](cmblockbuffercustomblocksource/refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](cmblockbuffercustomblocksource/version.md)

## See Also

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.
