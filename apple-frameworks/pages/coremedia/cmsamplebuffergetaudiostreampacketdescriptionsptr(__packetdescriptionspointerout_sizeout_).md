> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetaudiostreampacketdescriptionsptr(_:packetdescriptionspointerout:sizeout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetaudiostreampacketdescriptionsptr(_:packetdescriptionspointerout:sizeout:))

# CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a pointer to a constant array of audio stream packet descriptions.

## Declaration

```swift
func CMSampleBufferGetAudioStreamPacketDescriptionsPtr(_ sbuf: CMSampleBuffer, packetDescriptionsPointerOut: UnsafeMutablePointer<UnsafePointer<AudioStreamPacketDescription>?>?, sizeOut packetDescriptionsSizeOut: UnsafeMutablePointer<Int>?) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `packetDescriptionsPointerOut`: On output, contains pointer to a constant array of `AudioStreamPacketDescriptions`. May be `NULL`.
- `packetDescriptionsSizeOut`: Size in bytes of constant array of `AudioStreamPacketDescriptions`. May be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Returns a pointer to (and size of) a constant array of `AudioStreamPacketDescriptions` for the variable bytes per packet or variable frames per packet audio data in the provided `CMSampleBuffer`. The pointer will remain valid as long as the buffer continues to be retained.

Constant bit rate, constant frames-per-packet audio yields a return value of `noErr` and no packet descriptions.

This API is specific to audio format sample buffers, and will return `kCMSampleBufferError_InvalidMediaTypeForOperation` if called with a non-audio sample buffer.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer(\_:newValue:)](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer(\_:)](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:)](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:)](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.

# CMSampleBufferGetAudioStreamPacketDescriptionsPtr (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a pointer to a constant array of audio stream packet descriptions.

## Declaration

```objectivec
extern OSStatus CMSampleBufferGetAudioStreamPacketDescriptionsPtr(CMSampleBufferRef sbuf, const AudioStreamPacketDescription **packetDescriptionsPointerOut, size_t *packetDescriptionsSizeOut);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `packetDescriptionsPointerOut`: On output, contains pointer to a constant array of `AudioStreamPacketDescriptions`. May be `NULL`.
- `packetDescriptionsSizeOut`: Size in bytes of constant array of `AudioStreamPacketDescriptions`. May be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

Returns a pointer to (and size of) a constant array of `AudioStreamPacketDescriptions` for the variable bytes per packet or variable frames per packet audio data in the provided `CMSampleBuffer`. The pointer will remain valid as long as the buffer continues to be retained.

Constant bit rate, constant frames-per-packet audio yields a return value of `noErr` and no packet descriptions.

This API is specific to audio format sample buffers, and will return `kCMSampleBufferError_InvalidMediaTypeForOperation` if called with a non-audio sample buffer.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetImageBuffer](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
