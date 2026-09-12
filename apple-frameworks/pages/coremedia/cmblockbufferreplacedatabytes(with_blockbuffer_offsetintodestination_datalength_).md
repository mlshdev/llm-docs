> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferreplacedatabytes(with:blockbuffer:offsetintodestination:datalength:)](https://developer.apple.com/documentation/coremedia/cmblockbufferreplacedatabytes(with:blockbuffer:offsetintodestination:datalength:))

# CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.

## Declaration

```swift
func CMBlockBufferReplaceDataBytes(with sourceBytes: UnsafeRawPointer, blockBuffer destinationBuffer: CMBlockBuffer, offsetIntoDestination: Int, dataLength: Int) -> OSStatus
```

## Parameters

- `sourceBytes`: Memory block from which bytes are copied into the destination `CMBlockBuffer`.
- `destinationBuffer`: `CMBlockBuffer` whose range of bytes will be replaced by the `sourceBytes`.
- `offsetIntoDestination`: Offset within the destination `CMBlockBuffer` at which replacement should begin.
- `dataLength`: Number of bytes to be replaced, starting at `offsetIntoDestination`, in the `destinationBuffer`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the replacement succeeded, returns an error otherwise.

<a id="Discussion"></a>

## Discussion

This function is used to replace bytes in a `CMBlockBuffer's` memory blocks with those from a provided piece of memory. It deals with the possibility of the destination range of data being noncontiguous. `CMBlockBufferAssureBlockMemory`() is called on the given `CMBlockBuffer`. If desired range is subsequently not accessible in the `CMBlockBuffer`, an error is returned and the contents of the `CMBlockBuffer` are untouched.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

# CMBlockBufferReplaceDataBytes (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.

## Declaration

```objectivec
extern OSStatus CMBlockBufferReplaceDataBytes(const void *sourceBytes, CMBlockBufferRef destinationBuffer, size_t offsetIntoDestination, size_t dataLength);
```

## Parameters

- `sourceBytes`: Memory block from which bytes are copied into the destination `CMBlockBuffer`.
- `destinationBuffer`: `CMBlockBuffer` whose range of bytes will be replaced by the `sourceBytes`.
- `offsetIntoDestination`: Offset within the destination `CMBlockBuffer` at which replacement should begin.
- `dataLength`: Number of bytes to be replaced, starting at `offsetIntoDestination`, in the `destinationBuffer`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the replacement succeeded, returns an error otherwise.

<a id="Discussion"></a>

## Discussion

This function is used to replace bytes in a `CMBlockBuffer's` memory blocks with those from a provided piece of memory. It deals with the possibility of the destination range of data being noncontiguous. `CMBlockBufferAssureBlockMemory`() is called on the given `CMBlockBuffer`. If desired range is subsequently not accessible in the `CMBlockBuffer`, an error is returned and the contents of the `CMBlockBuffer` are untouched.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.
