> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferappendmemoryblock(_:memoryblock:length:blockallocator:customblocksource:offsettodata:datalength:flags:)](https://developer.apple.com/documentation/coremedia/cmblockbufferappendmemoryblock(_:memoryblock:length:blockallocator:customblocksource:offsettodata:datalength:flags:))

# CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a memory block to an existing block buffer.

## Declaration

```swift
func CMBlockBufferAppendMemoryBlock(_ theBuffer: CMBlockBuffer, memoryBlock: UnsafeMutableRawPointer?, length blockLength: Int, blockAllocator: CFAllocator?, customBlockSource: UnsafePointer<CMBlockBufferCustomBlockSource>?, offsetToData: Int, dataLength: Int, flags: CMBlockBufferFlags) -> OSStatus
```

## Parameters

- `theBuffer`: The existing `CMBlockBuffer` to which the new `memoryBlock` will be added. Must not be `NULL`
- `memoryBlock`: Block of memory to hold buffered data. If `NULL`, a memory block will be allocated when needed (via a call to `CMBlockBufferAssureBlockMemory`) using the provided `blockAllocator` or `customBlockSource`. If non-`NULL`, the block will be used and will be deallocated when the `CMBlockBuffer` is finalized (i.e. released for the last time).
- `blockLength`: Overall length of the memory block in bytes. Must not be zero. This is the size of the supplied `memoryBlock` or the size to allocate if `memoryBlock` is `NULL`.
- `blockAllocator`: Allocator to be used for allocating the `memoryBlock`, if `memoryBlock` is `NULL`. If `memoryBlock` is non-`NULL`, this allocator will be used to deallocate it, if provided. Passing `NULL` will cause the default allocator (as set at the time of the call) to be used. Pass `kCFAllocatorNull` if no deallocation is desired.
- `customBlockSource`: If non-NULL, it will be used for the allocation and freeing of the memory block (the `blockAllocator` parameter is ignored). If provided, and the `memoryBlock` parameter is `NULL`, its `AllocateBlock())` routine must be non-`NULL`. Allocate will be called once, if successful, when the `memoryBlock` is allocated. `FreeBlock()` will be called once when the `CMBlockBuffer` is disposed.
- `offsetToData`: The reference maintained by the existing `CMBlockBuffer` will begin after this offset within the `memoryBlock` .
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the memory block.
- `flags`: Feature and control flags

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Adds a `memoryBlock` to an existing `CMBlockBuffer`. The memory block may be statically allocated, dynamically allocated using the given allocator or not yet allocated. The `CMBlockBuffer's` total data length will be increased by the specified `dataLength`. If the `kCMBlockBufferAssureMemoryNowFlag` is set in the flags parameter, the memory block is allocated immediately using the `blockAllocator` or `customBlockSource`. Note that append operations are not thread safe, so care must be taken when appending to block buffers that are used by multiple threads.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

# CMBlockBufferAppendMemoryBlock (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a memory block to an existing block buffer.

## Declaration

```objectivec
extern OSStatus CMBlockBufferAppendMemoryBlock(CMBlockBufferRef theBuffer, void *memoryBlock, size_t blockLength, CFAllocatorRef blockAllocator, const CMBlockBufferCustomBlockSource *customBlockSource, size_t offsetToData, size_t dataLength, CMBlockBufferFlags flags);
```

## Parameters

- `theBuffer`: The existing `CMBlockBuffer` to which the new `memoryBlock` will be added. Must not be `NULL`
- `memoryBlock`: Block of memory to hold buffered data. If `NULL`, a memory block will be allocated when needed (via a call to `CMBlockBufferAssureBlockMemory`) using the provided `blockAllocator` or `customBlockSource`. If non-`NULL`, the block will be used and will be deallocated when the `CMBlockBuffer` is finalized (i.e. released for the last time).
- `blockLength`: Overall length of the memory block in bytes. Must not be zero. This is the size of the supplied `memoryBlock` or the size to allocate if `memoryBlock` is `NULL`.
- `blockAllocator`: Allocator to be used for allocating the `memoryBlock`, if `memoryBlock` is `NULL`. If `memoryBlock` is non-`NULL`, this allocator will be used to deallocate it, if provided. Passing `NULL` will cause the default allocator (as set at the time of the call) to be used. Pass `kCFAllocatorNull` if no deallocation is desired.
- `customBlockSource`: If non-NULL, it will be used for the allocation and freeing of the memory block (the `blockAllocator` parameter is ignored). If provided, and the `memoryBlock` parameter is `NULL`, its `AllocateBlock())` routine must be non-`NULL`. Allocate will be called once, if successful, when the `memoryBlock` is allocated. `FreeBlock()` will be called once when the `CMBlockBuffer` is disposed.
- `offsetToData`: The reference maintained by the existing `CMBlockBuffer` will begin after this offset within the `memoryBlock` .
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the memory block.
- `flags`: Feature and control flags

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Adds a `memoryBlock` to an existing `CMBlockBuffer`. The memory block may be statically allocated, dynamically allocated using the given allocator or not yet allocated. The `CMBlockBuffer's` total data length will be increased by the specified `dataLength`. If the `kCMBlockBufferAssureMemoryNowFlag` is set in the flags parameter, the memory block is allocated immediately using the `blockAllocator` or `customBlockSource`. Note that append operations are not thread safe, so care must be taken when appending to block buffers that are used by multiple threads.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.
