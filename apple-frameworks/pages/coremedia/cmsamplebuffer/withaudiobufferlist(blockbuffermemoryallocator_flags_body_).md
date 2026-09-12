> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/withaudiobufferlist(blockbuffermemoryallocator:flags:body:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/withaudiobufferlist(blockbuffermemoryallocator:flags:body:))

# withAudioBufferList(blockBufferMemoryAllocator:flags:body:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calls a closure with an audio buffer list that contains the data from a sample buffer and a block buffer backing the audio buffers.

## Declaration

```swift
func withAudioBufferList<R>(blockBufferMemoryAllocator: CFAllocator? = kCFAllocatorDefault, flags: CMSampleBuffer.Flags = [], body: (UnsafeMutableAudioBufferListPointer, CMBlockBuffer) throws -> R) throws -> R
```

## Parameters

- `blockBufferMemoryAllocator`: An allocator to use for the memory block held by a [CMBlockBuffer](../cmblockbuffer-api.md).
- `flags`: Optional flags that control the operation.
- `body`: A closure the system calls that contains a pointer to an [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) and the block buffer that backs its audio buffers.

<a id="Discussion"></a>

## Discussion

The system may not copy the data, depending on its contiguity and 16-byte alignment. It guarantees the buffers it places in the AudioBufferList are contiguous.

The system returns 16-byte-aligned buffers if you pass the [audioBufferListAssure16ByteAlignment](flags/audiobufferlistassure16bytealignment.md) flag.

## See Also

### Modifying Sample Buffers

- [dataBuffer](databuffer.md): A block buffer that contains the media data.
- [setDataBuffer(\_:)](setdatabuffer%28__%29.md): Associates a block buffer of media data with a sample buffer.
- [imageBuffer](imagebuffer.md): An image buffer that contains the media data.
- [setDataBuffer(fromAudioBufferList:blockBufferMemoryAllocator:flags:)](setdatabuffer%28fromaudiobufferlist_blockbuffermemoryallocator_flags_%29.md): Creates a block buffer that contains a copy of the data from an audio buffer list, and sets it as the sample buffer’s data.
- [copyPCMData(fromRange:into:)](copypcmdata%28fromrange_into_%29.md): Copies PCM audio data from a sample buffer into a prepopulated audio buffer list.
- [audioStreamPacketDescriptions()](audiostreampacketdescriptions%28%29.md): Creates an array of audio stream packet descriptions for the variable bytes per packet or variable frames per packet audio data in a sample buffer.
- [withUnsafeAudioStreamPacketDescriptions(\_:)](withunsafeaudiostreampacketdescriptions%28__%29.md): Calls a closure with an audio stream packet description.
- [singleSampleBuffers()](singlesamplebuffers%28%29.md): Returns all samples in a sample buffer.
- [CMSampleBuffer.SingleSampleBuffers](singlesamplebuffers.md)
