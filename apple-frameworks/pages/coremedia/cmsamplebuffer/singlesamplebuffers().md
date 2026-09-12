> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/singlesamplebuffers()](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/singlesamplebuffers())

# singleSampleBuffers()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns all samples in a sample buffer.

## Declaration

```swift
func singleSampleBuffers() throws -> CMSampleBuffer.SingleSampleBuffers
```

<a id="return-value"></a>

## Return Value

All samples from the buffer.

<a id="Discussion"></a>

## Discussion

The system creates temporary sample buffers for individual samples that refer to the sample data and containing its timing, size, and attachments.

If there are no sample sizes in the provided sample buffer, the system throws a [kCMSampleBufferError_CannotSubdivide](../kcmsamplebuffererror_cannotsubdivide.md) error. This happens, for example, if the samples in the buffer are noncontiguous, such as noninterleaved audio.

## See Also

### Modifying Sample Buffers

- [dataBuffer](databuffer.md): A block buffer that contains the media data.
- [setDataBuffer(\_:)](setdatabuffer%28__%29.md): Associates a block buffer of media data with a sample buffer.
- [imageBuffer](imagebuffer.md): An image buffer that contains the media data.
- [withAudioBufferList(blockBufferMemoryAllocator:flags:body:)](withaudiobufferlist%28blockbuffermemoryallocator_flags_body_%29.md): Calls a closure with an audio buffer list that contains the data from a sample buffer and a block buffer backing the audio buffers.
- [setDataBuffer(fromAudioBufferList:blockBufferMemoryAllocator:flags:)](setdatabuffer%28fromaudiobufferlist_blockbuffermemoryallocator_flags_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list, and sets it as the sample buffer’s data.
- [copyPCMData(fromRange:into:)](copypcmdata%28fromrange_into_%29.md): Copies PCM audio data from a sample buffer into a prepopulated audio buffer list.
- [audioStreamPacketDescriptions()](audiostreampacketdescriptions%28%29.md): Creates an array of audio stream packet descriptions for the variable bytes per packet or variable frames per packet audio data in a sample buffer.
- [withUnsafeAudioStreamPacketDescriptions(\_:)](withunsafeaudiostreampacketdescriptions%28__%29.md): Calls a closure with an audio stream packet description.
- [CMSampleBuffer.SingleSampleBuffers](singlesamplebuffers.md)
