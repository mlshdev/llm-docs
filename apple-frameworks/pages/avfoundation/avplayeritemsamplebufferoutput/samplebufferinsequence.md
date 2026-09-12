> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutput/samplebufferinsequence](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/samplebufferinsequence)

# AVPlayerItemSampleBufferOutput.SampleBufferInSequence

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Holds the information necessary for processing generated sample buffers.

## Declaration

```swift
struct SampleBufferInSequence
```

## Topics

### Initializers

- [init(sampleBuffer:sequenceWasRestarted:)](samplebufferinsequence/init%28samplebuffer_sequencewasrestarted_%29.md)

### Instance Properties

- [sampleBuffer](samplebufferinsequence/samplebuffer.md): Sample buffer containing media data.
- [sequenceWasRestarted](samplebufferinsequence/sequencewasrestarted.md): Indicates the very first buffer in a new sequence produced by this output. Seeking or changing playback direction will start a new sequence of buffers. If you have any sample buffers queued from the previous sequence, these should be discarded.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving sample buffers

- [nextAvailableSampleBuffer()](nextavailablesamplebuffer%28%29.md): Returns the next sample buffer if it is already available.
- [nextSampleBuffer()](nextsamplebuffer%28%29.md): Returns next sample buffer once it becomes available.
