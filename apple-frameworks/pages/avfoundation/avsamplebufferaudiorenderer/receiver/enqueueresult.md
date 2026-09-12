> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/enqueueresult](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/enqueueresult)

# AVSampleBufferAudioRenderer.Receiver.EnqueueResult

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value indicating the result of a call to `enqueue(_:)` or `enqueueImmediately(_:)`.

## Declaration

```swift
enum EnqueueResult
```

## Topics

### Enqueue results

- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.enqueued](enqueueresult/enqueued.md): The sample buffer was enqueued successfully.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.enqueuedWithSuggestedFlush(\_:)](enqueueresult/enqueuedwithsuggestedflush%28__%29.md): The sample buffer was enqueued successfully, but the receiver suggests that the client flush and re-enqueue.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.cancelledDueToFlush](enqueueresult/cancelledduetoflush.md): The sample buffer was not enqueued because the Receiver was flushed while the enqueue was suspended.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.cancelledDueToError(\_:)](enqueueresult/cancelledduetoerror%28__%29.md): The sample buffer was not enqueued because the Receiver failed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enqueuing sample buffers

- [enqueue(\_:)](enqueue%28__%29.md): Suspends until the receiver is ready for more media data, then enqueues a sample buffer in order to render its contents.
- [enqueueImmediately(\_:)](enqueueimmediately%28__%29.md): Enqueues a sample buffer in order to render its contents, without waiting for the renderer to become ready for more media data.
