> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/enqueueresult/enqueued

# AVSampleBufferAudioRenderer.Receiver.EnqueueResult.enqueued

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The sample buffer was enqueued successfully.

## Declaration

```swift
case enqueued
```

## See Also

### Enqueue results

- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.enqueuedWithSuggestedFlush(\_:)](enqueuedwithsuggestedflush%28__%29.md): The sample buffer was enqueued successfully, but the receiver suggests that the client flush and re-enqueue.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.cancelledDueToFlush](cancelledduetoflush.md): The sample buffer was not enqueued because the Receiver was flushed while the enqueue was suspended.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult.cancelledDueToError(\_:)](cancelledduetoerror%28__%29.md): The sample buffer was not enqueued because the Receiver failed.
