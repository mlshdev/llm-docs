> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/requestmediadatawhenready(on:using:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/requestmediadatawhenready(on:using:))

# requestMediaDataWhenReady(on:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.

> Use sampleBufferRenderer's requestMediaDataWhenReadyOnQueue:usingBlock: instead

## Declaration

```swift
func requestMediaDataWhenReady(on queue: dispatch_queue_t, using block: @escaping @Sendable () -> Void)
```

## Parameters

- `queue`: The dispatch queue.
- `block`: The block that provides media data.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [requestMediaDataWhenReady(on:using:)](../avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

The block is expected to call the [enqueue(\_:)](enqueue%28__%29.md) in order to provide media data for decompression (if necessary) and rendering while the [isReadyForMoreMediaData](isreadyformoremediadata.md) property remains [true](https://developer.apple.com/documentation/swift/true), or until it can provide no additional media. When the layer has decoded enough media data that it is ready for additional media data, it will invoke the block again.

By allowing the display layer to determine when to invoke the block, the implementation of incremental I/O operations is simplified when supplying synchronized media data during rendering.

If this function is called multiple times, only the last call is effective.

You invoke the [stopRequestingMediaData()](stoprequestingmediadata%28%29.md) method to cancel this request.

Each call to `requestMediaDataWhenReadyOnQueue:usingBlock:` must be balanced with a corresponding call to [stopRequestingMediaData()](stoprequestingmediadata%28%29.md).

Releasing the receiver instance without a call to [stopRequestingMediaData()](stoprequestingmediadata%28%29.md) will result in undefined behavior.

## See Also

### Initiating media data requests

- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

# requestMediaDataWhenReadyOnQueue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.

> Use sampleBufferRenderer's requestMediaDataWhenReadyOnQueue:usingBlock: instead

## Declaration

```objectivec
- (void) requestMediaDataWhenReadyOnQueue:(dispatch_queue_t) queue usingBlock:(void (^)()) block;
```

## Parameters

- `queue`: The dispatch queue.
- `block`: The block that provides media data.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [requestMediaDataWhenReadyOnQueue:usingBlock:](../avqueuedsamplebufferrendering/requestmediadatawhenready%28on_using_%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

The block is expected to call the [enqueueSampleBuffer:](enqueue%28__%29.md) in order to provide media data for decompression (if necessary) and rendering while the [readyForMoreMediaData](isreadyformoremediadata.md) property remains [true](https://developer.apple.com/documentation/swift/true), or until it can provide no additional media. When the layer has decoded enough media data that it is ready for additional media data, it will invoke the block again.

By allowing the display layer to determine when to invoke the block, the implementation of incremental I/O operations is simplified when supplying synchronized media data during rendering.

If this function is called multiple times, only the last call is effective.

You invoke the [stopRequestingMediaData](stoprequestingmediadata%28%29.md) method to cancel this request.

Each call to `requestMediaDataWhenReadyOnQueue:usingBlock:` must be balanced with a corresponding call to [stopRequestingMediaData](stoprequestingmediadata%28%29.md).

Releasing the receiver instance without a call to [stopRequestingMediaData](stoprequestingmediadata%28%29.md) will result in undefined behavior.

## See Also

### Initiating media data requests

- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.
