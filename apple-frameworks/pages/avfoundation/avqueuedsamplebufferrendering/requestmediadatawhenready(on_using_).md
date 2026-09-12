> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:)](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:))

# requestMediaDataWhenReady(on:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.

## Declaration

```swift
func requestMediaDataWhenReady(on queue: dispatch_queue_t, using block: @escaping @Sendable () -> Void)
```

## Parameters

- `queue`: The dispatch queue.
- `block`: A block that enqueues sample buffers until the receiver is no longer ready or there is no more data to supply.

<a id="Discussion"></a>

## Discussion

When this method is called multiple times, only the last call is implemented. Pair each call to [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) with a corresponding call to [stopRequestingMediaData()](stoprequestingmediadata%28%29.md). Releasing the `AVQueuedSampleBufferRendering` object without a call to `stopRequestingMediaData` results in undefined behavior.

## See Also

### Requesting media

- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueue(\_:)](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) call.

# requestMediaDataWhenReadyOnQueue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.

## Declaration

```objectivec
- (void) requestMediaDataWhenReadyOnQueue:(dispatch_queue_t) queue usingBlock:(void (^)()) block;
```

## Parameters

- `queue`: The dispatch queue.
- `block`: A block that enqueues sample buffers until the receiver is no longer ready or there is no more data to supply.

<a id="Discussion"></a>

## Discussion

When this method is called multiple times, only the last call is implemented. Pair each call to [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) with a corresponding call to [stopRequestingMediaData](stoprequestingmediadata%28%29.md). Releasing the `AVQueuedSampleBufferRendering` object without a call to `stopRequestingMediaData` results in undefined behavior.

## See Also

### Requesting media

- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [enqueueSampleBuffer:](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) call.
