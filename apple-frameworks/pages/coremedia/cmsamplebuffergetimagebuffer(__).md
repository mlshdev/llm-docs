> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetimagebuffer(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetimagebuffer(_:))

# CMSampleBufferGetImageBuffer(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an image buffer that contains the media data.

## Declaration

```swift
func CMSampleBufferGetImageBuffer(_ sbuf: CMSampleBuffer) -> CVImageBuffer?
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

`CVImageBuffer` of media data. The result will be `NULL` if the `CMSampleBuffer` does not contain a `CVImageBuffer`, if the `CMSampleBuffer` contains a `CMBlockBuffer`, or if there is some other error.

<a id="Discussion"></a>

## Discussion

The caller doesn’t own the returned buffer, and must retain it explicitly if the caller needs to maintain a reference to it.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer(\_:)](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer(\_:newValue:)](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(\_:bufferListSizeNeededOut:bufferListOut:bufferListSize:blockBufferAllocator:blockBufferMemoryAllocator:flags:blockBufferOut:)](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList(\_:blockBufferAllocator:blockBufferMemoryAllocator:flags:bufferList:)](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList(\_:at:frameCount:into:)](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions(\_:allocatedSize:packetDescriptionsOut:packetDescriptionsSizeNeededOut:)](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr(\_:packetDescriptionsPointerOut:sizeOut:)](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.

# CMSampleBufferGetImageBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an image buffer that contains the media data.

## Declaration

```objectivec
extern CVImageBufferRefCMSampleBufferGetImageBuffer(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

`CVImageBuffer` of media data. The result will be `NULL` if the `CMSampleBuffer` does not contain a `CVImageBuffer`, if the `CMSampleBuffer` contains a `CMBlockBuffer`, or if there is some other error.

<a id="Discussion"></a>

## Discussion

The caller doesn’t own the returned buffer, and must retain it explicitly if the caller needs to maintain a reference to it.

## See Also

### Modifying Sample Buffers

- [CMSampleBufferGetDataBuffer](cmsamplebuffergetdatabuffer%28__%29.md): Returns a block buffer that contains the media data.
- [CMSampleBufferSetDataBuffer](cmsamplebuffersetdatabuffer%28__newvalue_%29.md): Sets a block buffer of media data on a sample buffer.
- [CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer](cmsamplebuffergetaudiobufferlistwithretainedblockbuffer%28__bufferlistsizeneededout_bufferlistout_bufferlistsize_blockbufferallocator_blockbuffermemoryallocator_flags_blockbufferout_~d8522823.md): Returns an audio buffer list that contains the media data.
- [CMSampleBufferSetDataBufferFromAudioBufferList](cmsamplebuffersetdatabufferfromaudiobufferlist%28__blockbufferallocator_blockbuffermemoryallocator_flags_bufferlist_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list.
- [CMSampleBufferCopyPCMDataIntoAudioBufferList](cmsamplebuffercopypcmdataintoaudiobufferlist%28__at_framecount_into_%29.md): Copies PCM audio data from a sample buffer into an audio buffer list.
- [CMSampleBufferGetAudioStreamPacketDescriptions](cmsamplebuffergetaudiostreampacketdescriptions%28__allocatedsize_packetdescriptionsout_packetdescriptionssizeneededout_%29.md): Creates an array of audio stream packet descriptions.
- [CMSampleBufferGetAudioStreamPacketDescriptionsPtr](cmsamplebuffergetaudiostreampacketdescriptionsptr%28__packetdescriptionspointerout_sizeout_%29.md): Returns a pointer to a constant array of audio stream packet descriptions.
