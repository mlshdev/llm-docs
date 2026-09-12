> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetaudiobufferlistwithretainedblockbuffer(_:bufferlistsizeneededout:bufferlistout:bufferlistsize:blockbufferallocator:blockbuffermemoryallocator:flags:blockbufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetaudiobufferlistwithretainedblockbuffer(_:bufferlistsizeneededout:bufferlistout:bufferlistsize:blockbufferallocator:blockbuffermemoryallocator:flags:blockbufferout:))

# CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an audio buffer list that contains the media data.

## Declaration

```swift
func CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(_ sbuf: CMSampleBuffer, bufferListSizeNeededOut: UnsafeMutablePointer<Int>?, bufferListOut: UnsafeMutablePointer<AudioBufferList>?, bufferListSize: Int, blockBufferAllocator blockBufferStructureAllocator: CFAllocator?, blockBufferMemoryAllocator blockBufferBlockAllocator: CFAllocator?, flags: UInt32, blockBufferOut: UnsafeMutablePointer<CMBlockBuffer?>?) -> OSStatus
```

## Parameters

- `sbuf`: `CMSampleBuffer` being accessed.
- `bufferListSizeNeededOut`: Receives the size of the AudioBufferList required to accommodate the data. May be `NULL`.
- `bufferListOut`: Allocated by the caller, sized as specified by `bufferListSizeNeededOut`. It’s filled in with pointers into the retained `blockBufferOut`. May be `NULL`.
- `bufferListSize`: Size of the `bufferListOut` allocated by the client. If `bufferListOut` isn’t `NULL` and `bufferListSize` is insufficient, `kFigSampleBufferError_ArrayTooSmall` is returned.
- `blockBufferStructureAllocator`: Allocator to use when creating the `CMBlockBuffer` structure.
- `blockBufferBlockAllocator`: Allocator to use for memory block held by the `CMBlockBuffer`.
- `flags`: Flags controlling operation.
- `blockBufferOut`: The retained `CMBlockBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Creates an `AudioBufferList` containing the data from the `CMSampleBuffer`, and a `CMBlockBuffer` which references (and manages the lifetime of) the data in that `AudioBufferList`. The data may or may not be copied, depending on the contiguity and 16-byte alignment of the sample buffer’s data.

The buffers placed in the `AudioBufferList` are guaranteed to be contiguous.

The buffers in the `AudioBufferList` will be 16-byte-aligned if `kCMSampleBufferFlag_AudioBufferList_Assure16ByteAlignment` is passed in.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer(\_:newValue:)](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer(\_:)](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:)](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:)](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

# CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an audio buffer list that contains the media data.

## Declaration

```objectivec
extern OSStatus CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(CMSampleBufferRef sbuf, size_t *bufferListSizeNeededOut, AudioBufferList *bufferListOut, size_t bufferListSize, CFAllocatorRef blockBufferStructureAllocator, CFAllocatorRef blockBufferBlockAllocator, uint32_t flags, CMBlockBufferRef*blockBufferOut);
```

## Parameters

- `sbuf`: `CMSampleBuffer` being accessed.
- `bufferListSizeNeededOut`: Receives the size of the AudioBufferList required to accommodate the data. May be `NULL`.
- `bufferListOut`: Allocated by the caller, sized as specified by `bufferListSizeNeededOut`. It’s filled in with pointers into the retained `blockBufferOut`. May be `NULL`.
- `bufferListSize`: Size of the `bufferListOut` allocated by the client. If `bufferListOut` isn’t `NULL` and `bufferListSize` is insufficient, `kFigSampleBufferError_ArrayTooSmall` is returned.
- `blockBufferStructureAllocator`: Allocator to use when creating the `CMBlockBuffer` structure.
- `blockBufferBlockAllocator`: Allocator to use for memory block held by the `CMBlockBuffer`.
- `flags`: Flags controlling operation.
- `blockBufferOut`: The retained `CMBlockBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Creates an `AudioBufferList` containing the data from the `CMSampleBuffer`, and a `CMBlockBuffer` which references (and manages the lifetime of) the data in that `AudioBufferList`. The data may or may not be copied, depending on the contiguity and 16-byte alignment of the sample buffer’s data.

The buffers placed in the `AudioBufferList` are guaranteed to be contiguous.

The buffers in the `AudioBufferList` will be 16-byte-aligned if `kCMSampleBufferFlag_AudioBufferList_Assure16ByteAlignment` is passed in.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.
