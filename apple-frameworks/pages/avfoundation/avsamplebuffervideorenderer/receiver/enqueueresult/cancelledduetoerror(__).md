> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueresult/cancelledduetoerror(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueresult/cancelledduetoerror(_:))

# AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToError(\_:)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The sample buffer was not enqueued because the Receiver failed.

## Declaration

```swift
case cancelledDueToError(any Error)
```

## See Also

### Enqueue results

- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.enqueued](enqueued.md): The sample buffer was enqueued successfully.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.enqueuedWithDecodeFailures(\_:)](enqueuedwithdecodefailures%28__%29.md): The sample buffer was enqueued successfully, but the receiver failed to decode one or more previously enqueued sample buffers.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToFlush](cancelledduetoflush.md): The sample buffer was not enqueued because the Receiver was flushed while the enqueue was suspended.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult.cancelledDueToFlushRequiredToResume(\_:)](cancelledduetoflushrequiredtoresume%28__%29.md): The sample buffer was not enqueued because the Receiver requires a flush to continue enqueuing samples.
