> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/receiver/enqueue(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/receiver/enqueue(_:))

# enqueue(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Suspends until the receiver is ready for more media data, then enqueues a sample buffer in order to render its contents.

## Declaration

```swift
nonisolated(nonsending) func enqueue(_ sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>) async throws -> AVSampleBufferAudioRenderer.Receiver.EnqueueResult
```

## Parameters

- `sampleBuffer`: The sample buffer to enqueue.

<a id="return-value"></a>

## Return Value

The result of the enqueue operation.

<a id="discussion"></a>

## Discussion

> **Throws**

> `CancellationError` if the Task was cancelled.

## See Also

### Enqueuing sample buffers

- [enqueueImmediately(\_:)](enqueueimmediately%28__%29.md): Enqueues a sample buffer in order to render its contents, without waiting for the renderer to become ready for more media data.
- [AVSampleBufferAudioRenderer.Receiver.EnqueueResult](enqueueresult.md): A value indicating the result of a call to `enqueue(_:)` or `enqueueImmediately(_:)`.
