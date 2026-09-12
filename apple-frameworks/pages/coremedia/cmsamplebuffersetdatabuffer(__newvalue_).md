> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetdatabuffer(_:newvalue:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetdatabuffer(_:newvalue:))

# CMSampleBufferSetDataBuffer(\_:newValue:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a block buffer of media data on a sample buffer.

## Declaration

```swift
func CMSampleBufferSetDataBuffer(_ sbuf: CMSampleBuffer, newValue dataBuffer: CMBlockBuffer) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `dataBuffer`: `CMBlockBuffer` of data being associated with.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If successful, this operation retains the `dataBuffer`. This allows the caller to release the `dataBuffer` after calling this API, if it has no further need to reference it. This is a write-once operation; it fails if the `CMSampleBuffer` already has a `dataBuffer`. This API allows a `CMSampleBuffer` to exist, with timing and format information, before the associated data shows up.Example of usage: Some media services may have access to sample size, timing, and format information before the data is read. Such services may create `CMSampleBuffers` with that information and insert them into queues early, and use this API to attach the `CMBlockBuffers` later, when the data becomes ready.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferGetImageBuffer(\_:)](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:)](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:)](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:)](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

# CMSampleBufferSetDataBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a block buffer of media data on a sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetDataBuffer(CMSampleBufferRef sbuf, CMBlockBufferRef dataBuffer);
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `dataBuffer`: `CMBlockBuffer` of data being associated with.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

If successful, this operation retains the `dataBuffer`. This allows the caller to release the `dataBuffer` after calling this API, if it has no further need to reference it. This is a write-once operation; it fails if the `CMSampleBuffer` already has a `dataBuffer`. This API allows a `CMSampleBuffer` to exist, with timing and format information, before the associated data shows up.Example of usage: Some media services may have access to sample size, timing, and format information before the data is read. Such services may create `CMSampleBuffers` with that information and insert them into queues early, and use this API to attach the `CMBlockBuffers` later, when the data becomes ready.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferGetImageBuffer](cmsamplebuffergetimagebuffer%28__%29.md): Returns an image buffer that contains the media data.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.
