> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferaccessdatabytes(_:atoffset:length:temporaryblock:returnedpointerout:)](https://developer.apple.com/documentation/coremedia/cmblockbufferaccessdatabytes(_:atoffset:length:temporaryblock:returnedpointerout:))

# CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses potentially noncontiguous data in a block buffer.

## Declaration

```swift
func CMBlockBufferAccessDataBytes(_ theBuffer: CMBlockBuffer, atOffset offset: Int, length: Int, temporaryBlock: UnsafeMutableRawPointer, returnedPointerOut: UnsafeMutablePointer<UnsafeMutablePointer<CChar>?>) -> OSStatus
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to operate on. Must not be `NULL`.
- `offset`: Offset within the `CMBlockBuffer's` offset range.
- `length`: Desired number of bytes to access at offset.
- `temporaryBlock`: A piece of memory, assumed to be at least `length` bytes in size. Must not be `NULL`
- `returnedPointerOut`: Receives `NULL` if the desired amount of data could not be accessed at the given offset. Receives non-`NULL` if it could. The value returned is either a direct pointer into the `CMBlockBuffer` or to the `temporaryBlock`. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the desired amount of data could be accessed at the given offset.

<a id="Discussion"></a>

## Discussion

This routine is use for accessing contiguous and noncontiguous data. If the data is contiguous, the routine will return a pointer to the given `CMBlockBuffer`.  If the data is not contiguous, the routine will copy the data into a temporary block and a pointer to this block will be returned.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

# CMBlockBufferAccessDataBytes (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses potentially noncontiguous data in a block buffer.

## Declaration

```objectivec
extern OSStatus CMBlockBufferAccessDataBytes(CMBlockBufferRef theBuffer, size_t offset, size_t length, void *temporaryBlock, char **returnedPointerOut);
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to operate on. Must not be `NULL`.
- `offset`: Offset within the `CMBlockBuffer's` offset range.
- `length`: Desired number of bytes to access at offset.
- `temporaryBlock`: A piece of memory, assumed to be at least `length` bytes in size. Must not be `NULL`
- `returnedPointerOut`: Receives `NULL` if the desired amount of data could not be accessed at the given offset. Receives non-`NULL` if it could. The value returned is either a direct pointer into the `CMBlockBuffer` or to the `temporaryBlock`. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `kCMBlockBufferNoErr` if the desired amount of data could be accessed at the given offset.

<a id="Discussion"></a>

## Discussion

This routine is use for accessing contiguous and noncontiguous data. If the data is contiguous, the routine will return a pointer to the given `CMBlockBuffer`.  If the data is not contiguous, the routine will copy the data into a temporary block and a pointer to this block will be returned.

## See Also

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.
