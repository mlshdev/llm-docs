> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueresult](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueresult)

# AVSampleBufferVideoRenderer.Receiver.EnqueueResult

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value indicating the result of a call to `enqueue(_:)` or `enqueueImmediately(_:)`.

## Declaration

```swift
enum EnqueueResult
```

## Topics

### Enqueue results

- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.enqueued](enqueueresult/enqueued.md): The sample buffer was enqueued successfully.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.enqueuedWithDecodeFailures(\_:)](enqueueresult/enqueuedwithdecodefailures%28__%29.md): The sample buffer was enqueued successfully, but the receiver failed to decode one or more previously enqueued sample buffers.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToFlush](enqueueresult/cancelledduetoflush.md): The sample buffer was not enqueued because the Receiver was flushed while the enqueue was suspended.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToFlushRequiredToResume(\_:)](enqueueresult/cancelledduetoflushrequiredtoresume%28__%29.md): The sample buffer was not enqueued because the Receiver requires a flush to continue enqueuing samples.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToError(\_:)](enqueueresult/cancelledduetoerror%28__%29.md): The sample buffer was not enqueued because the Receiver failed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enqueuing sample buffers

- [enqueue(\_:)](enqueue%28__%29.md): Suspends until the receiver is ready for more media data, then enqueues a sample buffer in order to render its contents.
- [enqueueImmediately(\_:)](enqueueimmediately%28__%29.md): Enqueues a sample buffer in order to render its contents, without waiting for the renderer to become ready for more media data.
