> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/suggestedflushreason](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/suggestedflushreason)

# AVSampleBufferAudioRenderer.Receiver.SuggestedFlushReason

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Reasons the receiver suggests the client flush and re-enqueue.

## Declaration

```swift
enum SuggestedFlushReason
```

## Topics

### Flush reasons

- [AVSampleBufferAudioRenderer.Receiver.SuggestedFlushReason.outputConfigurationChanged](suggestedflushreason/outputconfigurationchanged.md): The audio output configuration has changed.
- [AVSampleBufferAudioRenderer.Receiver.SuggestedFlushReason.wasFlushedAutomatically(at:)](suggestedflushreason/wasflushedautomatically%28at_%29.md): The enqueued media data has been flushed for a reason other than a call to the `flush()` method.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Flushing the receiver

- [flush()](flush%28%29.md): Instructs the receiver to discard pending enqueued sample buffers.
- [flush(fromSourceTime:)](flush%28fromsourcetime_%29.md): Flushes enqueued sample buffers with presentation time stamps later than or equal to the specified time. This method suspends until the flush is completed.
