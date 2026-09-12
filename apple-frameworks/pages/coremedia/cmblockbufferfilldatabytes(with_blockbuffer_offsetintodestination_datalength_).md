> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferfilldatabytes(with:blockbuffer:offsetintodestination:datalength:)](https://developer.apple.com/documentation/coremedia/cmblockbufferfilldatabytes(with:blockbuffer:offsetintodestination:datalength:))

# CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Fills the destination buffer with the specified data byte.

## Declaration

```swift
func CMBlockBufferFillDataBytes(with fillByte: CChar, blockBuffer destinationBuffer: CMBlockBuffer, offsetIntoDestination: Int, dataLength: Int) -> OSStatus
```

## Parameters

- `fillByte`: The data byte with which to fill the destination buffer.
- `destinationBuffer`: `CMBlockBuffer` into which the data bytes are filled.
- `offsetIntoDestination`: Start of data area for the buffer.
- `dataLength`: Length of the valid data area for the buffer.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.

# CMBlockBufferFillDataBytes (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Fills the destination buffer with the specified data byte.

## Declaration

```objectivec
extern OSStatus CMBlockBufferFillDataBytes(char fillByte, CMBlockBufferRef destinationBuffer, size_t offsetIntoDestination, size_t dataLength);
```

## Parameters

- `fillByte`: The data byte with which to fill the destination buffer.
- `destinationBuffer`: `CMBlockBuffer` into which the data bytes are filled.
- `offsetIntoDestination`: Start of data area for the buffer.
- `dataLength`: Length of the valid data area for the buffer.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if successful.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
