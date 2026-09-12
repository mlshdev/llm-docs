> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueimmediately(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/receiver/enqueueimmediately(_:))

# enqueueImmediately(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Enqueues a sample buffer in order to render its contents, without waiting for the renderer to become ready for more media data.

## Declaration

```swift
func enqueueImmediately(_ sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>) -> AVSampleBufferVideoRenderer.Receiver.EnqueueResult
```

## Parameters

- `sampleBuffer`: The sample buffer to enqueue.

<a id="return-value"></a>

## Return Value

The result of the enqueue operation.

## See Also

### Enqueuing sample buffers

- [enqueue(\_:)](enqueue%28__%29.md): Suspends until the receiver is ready for more media data, then enqueues a sample buffer in order to render its contents.
- [AVSampleBufferVideoRenderer.Receiver.EnqueueResult](enqueueresult.md): A value indicating the result of a call to `enqueue(_:)` or `enqueueImmediately(_:)`.
