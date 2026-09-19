> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemsamplebufferoutput/nextavailablesamplebuffer()

# nextAvailableSampleBuffer()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the next sample buffer if it is already available.

## Declaration

```swift
func nextAvailableSampleBuffer() -> AVPlayerItemSampleBufferOutput.SampleBufferInSequence?
```

<a id="discussion"></a>

## Discussion

If no sample buffers are ready, this method will return nil immediately.

This method will race with [nextSampleBuffer()](nextsamplebuffer%28%29.md) for grabbing the generated sample buffer.

## See Also

### Retrieving sample buffers

- [nextSampleBuffer()](nextsamplebuffer%28%29.md): Returns next sample buffer once it becomes available.
- [AVPlayerItemSampleBufferOutput.SampleBufferInSequence](samplebufferinsequence.md): Holds the information necessary for processing generated sample buffers.
