> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferappendbufferreference(_:targetbbuf:offsettodata:datalength:flags:)](https://developer.apple.com/documentation/coremedia/cmblockbufferappendbufferreference(_:targetbbuf:offsettodata:datalength:flags:))

# CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a reference to an existing block buffer.

## Declaration

```swift
func CMBlockBufferAppendBufferReference(_ theBuffer: CMBlockBuffer, targetBBuf: CMBlockBuffer, offsetToData: Int, dataLength: Int, flags: CMBlockBufferFlags) -> OSStatus
```

## Parameters

- `theBuffer`: The existing `CMBlockBuffer`.  The target `CMBlockBuffer` will be added to the memory being managed by `theBuffer` (the existing `CMBlockBuffer`). Must not be `NULL`.
- `targetBBuf`: The target `CMBlockBuffer`. The target `CMBlockBuffer` will be added to the memory managed by the `theBuffer` (the existing`CMBlockBuffer`).This parameter must not be `NULL`. Unless the `kCMBlockBufferPermitEmptyReferenceFlag` is passed, the target `CMBlockBuffer` must not be empty and it must have a data length at least large enough to supply the data subset specified (i.e. `offsetToData` \+ `dataLength` bytes).
- `offsetToData`: The reference maintained by the existing `CMBlockBuffer` will begin after this offset within the target `CMBlockBuffer`.
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the target `CMBlockBuffer`. If zero, the target buffer’s total available `dataLength` (starting at offsetToData) will be referenced.
- `flags`: Feature and control flags.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Adds a buffer reference of (a possibly subset portion of) another `CMBlockBuffer`, the target `CMBlockBuffer`, to an existing `CMBlockBuffer`. The existing `CMBlockBuffer's` total data length will be increased by the specified `dataLength`. Note that append operations are not thread safe, so care must be taken when appending to block buffers that are used by multiple threads.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

# CMBlockBufferAppendBufferReference (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a reference to an existing block buffer.

## Declaration

```objectivec
extern OSStatus CMBlockBufferAppendBufferReference(CMBlockBufferRef theBuffer, CMBlockBufferRef targetBBuf, size_t offsetToData, size_t dataLength, CMBlockBufferFlags flags);
```

## Parameters

- `theBuffer`: The existing `CMBlockBuffer`.  The target `CMBlockBuffer` will be added to the memory being managed by `theBuffer` (the existing `CMBlockBuffer`). Must not be `NULL`.
- `targetBBuf`: The target `CMBlockBuffer`. The target `CMBlockBuffer` will be added to the memory managed by the `theBuffer` (the existing`CMBlockBuffer`).This parameter must not be `NULL`. Unless the `kCMBlockBufferPermitEmptyReferenceFlag` is passed, the target `CMBlockBuffer` must not be empty and it must have a data length at least large enough to supply the data subset specified (i.e. `offsetToData` \+ `dataLength` bytes).
- `offsetToData`: The reference maintained by the existing `CMBlockBuffer` will begin after this offset within the target `CMBlockBuffer`.
- `dataLength`: Number of relevant data bytes, starting at `offsetToData`, within the target `CMBlockBuffer`. If zero, the target buffer’s total available `dataLength` (starting at offsetToData) will be referenced.
- `flags`: Feature and control flags.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

<a id="Discussion"></a>

## Discussion

Adds a buffer reference of (a possibly subset portion of) another `CMBlockBuffer`, the target `CMBlockBuffer`, to an existing `CMBlockBuffer`. The existing `CMBlockBuffer's` total data length will be increased by the specified `dataLength`. Note that append operations are not thread safe, so care must be taken when appending to block buffers that are used by multiple threads.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.
