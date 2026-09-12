> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffercopydatabytes(_:atoffset:datalength:destination:)](https://developer.apple.com/documentation/coremedia/cmblockbuffercopydatabytes(_:atoffset:datalength:destination:))

# CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies bytes from a block buffer into a provided memory area.

## Declaration

```swift
func CMBlockBufferCopyDataBytes(_ theSourceBuffer: CMBlockBuffer, atOffset offsetToData: Int, dataLength: Int, destination: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `theSourceBuffer`: The buffer from which data will be copied into the destination.
- `offsetToData`: Offset within the source `CMBlockBuffer` at which the copy should begin.
- `dataLength`: Number of bytes to copy, starting at `offsetToData`, within the source `CMBlockBuffer`. Must not be zero.
- `destination`: Memory into which the data should be copied.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the copy succeeded, returns an error otherwise.

<a id="Discussion"></a>

## Discussion

This function is used to copy bytes out of a `CMBlockBuffer` into a provided piece of memory. It deals with the possibility of the desired range of data being noncontiguous. The function assumes that the memory at the destination is sufficient to hold the data. If `dataLength` bytes of data are not available in the `CMBlockBuffer`, an error is returned and the contents of the destination are undefined.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

# CMBlockBufferCopyDataBytes (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies bytes from a block buffer into a provided memory area.

## Declaration

```objectivec
extern OSStatus CMBlockBufferCopyDataBytes(CMBlockBufferRef theSourceBuffer, size_t offsetToData, size_t dataLength, void *destination);
```

## Parameters

- `theSourceBuffer`: The buffer from which data will be copied into the destination.
- `offsetToData`: Offset within the source `CMBlockBuffer` at which the copy should begin.
- `dataLength`: Number of bytes to copy, starting at `offsetToData`, within the source `CMBlockBuffer`. Must not be zero.
- `destination`: Memory into which the data should be copied.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the copy succeeded, returns an error otherwise.

<a id="Discussion"></a>

## Discussion

This function is used to copy bytes out of a `CMBlockBuffer` into a provided piece of memory. It deals with the possibility of the desired range of data being noncontiguous. The function assumes that the memory at the destination is sufficient to hold the data. If `dataLength` bytes of data are not available in the `CMBlockBuffer`, an error is returned and the contents of the destination are undefined.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.
