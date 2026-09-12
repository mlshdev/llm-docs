> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/flush()](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/flush())

# flush()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Instructs the receiver to discard pending enqueued sample buffers.

## Declaration

```swift
func flush()
```

<a id="discussion"></a>

## Discussion

Additional sample buffers can be appended after `flush()`.

## See Also

### Flushing the receiver

- [flush(fromSourceTime:)](flush%28fromsourcetime_%29.md): Flushes enqueued sample buffers with presentation time stamps later than or equal to the specified time. This method suspends until the flush is completed.
- [AVSampleBufferAudioRenderer.Receiver.SuggestedFlushReason](suggestedflushreason.md): Reasons the receiver suggests the client flush and re-enqueue.
