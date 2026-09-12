> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetdatabufferfromaudiobufferlist(_:blockbufferallocator:blockbuffermemoryallocator:flags:bufferlist:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetdatabufferfromaudiobufferlist(_:blockbufferallocator:blockbuffermemoryallocator:flags:bufferlist:))

# CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a block buffer that contains a copy of the data from an audio buffer list.

## Declaration

```swift
func CMSampleBufferSetDataBufferFromAudioBufferList(_ sbuf: CMSampleBuffer, blockBufferAllocator blockBufferStructureAllocator: CFAllocator?, blockBufferMemoryAllocator blockBufferBlockAllocator: CFAllocator?, flags: UInt32, bufferList: UnsafePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `blockBufferStructureAllocator`: Allocator to use when creating the `CMBlockBuffer` structure.
- `blockBufferBlockAllocator`: Allocator to use for memory block held by the `CMBlockBuffer`.
- `flags`: Flags controlling operation.
- `bufferList`: Buffer list whose data will be copied into the new `CMBlockBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Creates a `CMBlockBuffer` containing a copy of the data from the `AudioBufferList`, and sets that as the sample buffer’s data buffer. The resulting buffer(s) in the sample buffer will be 16-byte-aligned if `kCMSampleBufferFlag_AudioBufferList_Assure16ByteAlignment` is passed in.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer(\_:newValue:)](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer(\_:)](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:)](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:)](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

# CMSampleBufferSetDataBufferFromAudioBufferList (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a block buffer that contains a copy of the data from an audio buffer list.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetDataBufferFromAudioBufferList(CMSampleBufferRef sbuf, CFAllocatorRef blockBufferStructureAllocator, CFAllocatorRef blockBufferBlockAllocator, uint32_t flags, const AudioBufferList *bufferList);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `blockBufferStructureAllocator`: Allocator to use when creating the `CMBlockBuffer` structure.
- `blockBufferBlockAllocator`: Allocator to use for memory block held by the `CMBlockBuffer`.
- `flags`: Flags controlling operation.
- `bufferList`: Buffer list whose data will be copied into the new `CMBlockBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Creates a `CMBlockBuffer` containing a copy of the data from the `AudioBufferList`, and sets that as the sample buffer’s data buffer. The resulting buffer(s) in the sample buffer will be 16-byte-aligned if `kCMSampleBufferFlag_AudioBufferList_Assure16ByteAlignment` is passed in.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.
