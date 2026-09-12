> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsamplebufferoutput/nextsamplebuffer()](https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/nextsamplebuffer())

# nextSampleBuffer()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns next sample buffer once it becomes available.

## Declaration

```swift
nonisolated func nextSampleBuffer() async -> AVPlayerItemSampleBufferOutput.SampleBufferInSequence?
```

<a id="discussion"></a>

## Discussion

This method will wait indefinitely for the next sample buffer to become available. This method returns nil if the current task is cancelled or if this method is called from a different task.

This method will race with [nextAvailableSampleBuffer()](nextavailablesamplebuffer%28%29.md) for grabbing the generated sample buffer.

## See Also

### Retrieving sample buffers

- [nextAvailableSampleBuffer()](nextavailablesamplebuffer%28%29.md): Returns the next sample buffer if it is already available.
- [AVPlayerItemSampleBufferOutput.SampleBufferInSequence](samplebufferinsequence.md): Holds the information necessary for processing generated sample buffers.
