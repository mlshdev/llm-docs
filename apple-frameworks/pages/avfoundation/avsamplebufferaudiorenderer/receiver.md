> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver)

# AVSampleBufferAudioRenderer.Receiver

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
class Receiver
```

## Topics

### Enqueuing sample buffers

- [enqueue(\_:)](receiver/enqueue%28__%29.md): Suspends until the receiver is ready for more media data, then enqueues a sample buffer in order to render its contents.
- [enqueueImmediately(\_:)](receiver/enqueueimmediately%28__%29.md): Enqueues a sample buffer in order to render its contents, without waiting for the renderer to become ready for more media data.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult](receiver/enqueueresult.md): A value indicating the result of a call to `enqueue(_:)` or `enqueueImmediately(_:)`.

### Flushing the receiver

- [flush()](receiver/flush%28%29.md): Instructs the receiver to discard pending enqueued sample buffers.
- [flush(fromSourceTime:)](receiver/flush%28fromsourcetime_%29.md): Flushes enqueued sample buffers with presentation time stamps later than or equal to the specified time. This method suspends until the flush is completed.
- [AVSampleBufferAudioRenderer.Receiver.SuggestedFlushReason](receiver/suggestedflushreason.md): Reasons the receiver suggests the client flush and re-enqueue.

### Observing rendering events

- [renderingEventsAfterFinishedEnqueuing](receiver/renderingeventsafterfinishedenqueuing.md): A sequence of events that may occur when rendering after enqueuing samples has finished.
- [AVSampleBufferAudioRenderer.Receiver.RenderingEvent](receiver/renderingevent.md): Events that might require intervention after there are no more samples to enqueue, but before rendering has finished.
