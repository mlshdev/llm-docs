> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/setdatabuffer(fromaudiobufferlist:blockbuffermemoryallocator:flags:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/setdatabuffer(fromaudiobufferlist:blockbuffermemoryallocator:flags:))

# setDataBuffer(fromAudioBufferList:blockBufferMemoryAllocator:flags:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a block buffer that contains a copy of the data from an audio buffer list, and sets it as the sample buffer’s data.

## Declaration

```swift
func setDataBuffer(fromAudioBufferList bufferList: UnsafePointer<AudioBufferList>, blockBufferMemoryAllocator: CFAllocator? = kCFAllocatorDefault, flags: CMSampleBuffer.Flags = []) throws
```

## Parameters

- `bufferList`: The audio buffer list from which to copy the data.
- `blockBufferMemoryAllocator`: An allocator to use for the memory block that the block buffer holds.
- `flags`: Optional flags that control the operation.

<a id="Discussion"></a>

## Discussion

Pass the [audioBufferListAssure16ByteAlignment](flags/audiobufferlistassure16bytealignment.md) flag to have the system create 16-byte-aligned buffers.

## See Also

### Modifying Sample Buffers

- [dataBuffer](databuffer.md): A block buffer that contains the media data.
- [setDataBuffer(\_:)](setdatabuffer%28__%29.md): Associates a block buffer of media data with a sample buffer.
- [imageBuffer](imagebuffer.md): An image buffer that contains the media data.
- [withAudioBufferList(blockBufferMemoryAllocator:flags:body:)](withaudiobufferlist%28blockbuffermemoryallocator_flags_body_%29.md): Calls a closure with an audio buffer list that contains the data from a sample buffer and a block buffer backing the audio buffers.
- [copyPCMData(fromRange:into:)](copypcmdata%28fromrange_into_%29.md): Copies PCM audio data from a sample buffer into a prepopulated audio buffer list.
- [audioStreamPacketDescriptions()](audiostreampacketdescriptions%28%29.md): Creates an array of audio stream packet descriptions for the variable bytes per packet or variable frames per packet audio data in a sample buffer.
- [withUnsafeAudioStreamPacketDescriptions(\_:)](withunsafeaudiostreampacketdescriptions%28__%29.md): Calls a closure with an audio stream packet description.
- [singleSampleBuffers()](singlesamplebuffers%28%29.md): Returns all samples in a sample buffer.
- [CMSampleBuffer.SingleSampleBuffers](singlesamplebuffers.md)
