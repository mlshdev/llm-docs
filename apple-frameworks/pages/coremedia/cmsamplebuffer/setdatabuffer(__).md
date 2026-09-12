> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/setdatabuffer(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/setdatabuffer(_:))

# setDataBuffer(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Associates a block buffer of media data with a sample buffer.

## Declaration

```swift
func setDataBuffer(_ dataBuffer: CMBlockBuffer) throws
```

## Parameters

- `dataBuffer`: A buffer that contains the media data.

<a id="Discussion"></a>

## Discussion

Calling this method is a write-once operation; it fails if the sample buffer already has a data buffer.

The purpose of this API is to allow you to create a sample buffer with timing and format information, before associating it with media data. For example, some media services may have access to sample size, timing, and format information, but only load the media data when accessed. Such services may create sample buffers with that information and insert them into queues early, and use this API to attach the media data when it’s ready.

## See Also

### Modifying Sample Buffers

- [dataBuffer](databuffer.md): A block buffer that contains the media data.
- [imageBuffer](imagebuffer.md): An image buffer that contains the media data.
- [withAudioBufferList(blockBufferMemoryAllocator:flags:body:)](withaudiobufferlist%28blockbuffermemoryallocator_flags_body_%29.md): Calls a closure with an audio buffer list that contains the data from a sample buffer and a block buffer backing the audio buffers.
- [setDataBuffer(fromAudioBufferList:blockBufferMemoryAllocator:flags:)](setdatabuffer%28fromaudiobufferlist_blockbuffermemoryallocator_flags_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list, and sets it as the sample buffer’s data.
- [copyPCMData(fromRange:into:)](copypcmdata%28fromrange_into_%29.md): Copies PCM audio data from a sample buffer into a prepopulated audio buffer list.
- [audioStreamPacketDescriptions()](audiostreampacketdescriptions%28%29.md): Creates an array of audio stream packet descriptions for the variable bytes per packet or variable frames per packet audio data in a sample buffer.
- [withUnsafeAudioStreamPacketDescriptions(\_:)](withunsafeaudiostreampacketdescriptions%28__%29.md): Calls a closure with an audio stream packet description.
- [singleSampleBuffers()](singlesamplebuffers%28%29.md): Returns all samples in a sample buffer.
- [CMSampleBuffer.SingleSampleBuffers](singlesamplebuffers.md)
