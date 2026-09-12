> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/isreadyformoremediadata](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/isreadyformoremediadata)

# isReadyForMoreMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates the readiness of the layer to accept more sample buffers.

> Use sampleBufferRenderer's readyForMoreMediaData instead

## Declaration

```swift
var isReadyForMoreMediaData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [isReadyForMoreMediaData](../avqueuedsamplebufferrendering/isreadyformoremediadata.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

`AVSampleBufferDisplayLayer` keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources — that is, clients that can supply sample buffers faster than they are consumed and need to decide when to hold back buffers.

Clients enqueueing sample buffers from non-real-time sources may hold off from generating or obtaining more sample buffers to enqueue when the value of `readyForMoreMediaData` is [false](https://developer.apple.com/documentation/swift/false).

It is safe to call [enqueue(\_:)](enqueue%28__%29.md) when [isReadyForMoreMediaData](isreadyformoremediadata.md) is [false](https://developer.apple.com/documentation/swift/false), but enqueing more sample buffers than are required for timely rendering by the receiver is highly discouraged.

To help with control of the non-real-time supply of sample buffers, such clients should use [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) in order to specify a block that the layer should invoke whenever it’s ready for sample buffers to be appended.

The value of `readyForMoreMediaData` will often change from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true) asynchronously, as previously supplied sample buffers are decoded and displayed.

> **Important**

>  This property does not support key-value observing.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

# readyForMoreMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates the readiness of the layer to accept more sample buffers.

> Use sampleBufferRenderer's readyForMoreMediaData instead

## Declaration

```objectivec
@property (readonly, getter=isReadyForMoreMediaData) BOOL readyForMoreMediaData;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [readyForMoreMediaData](../avqueuedsamplebufferrendering/isreadyformoremediadata.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

`AVSampleBufferDisplayLayer` keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources — that is, clients that can supply sample buffers faster than they are consumed and need to decide when to hold back buffers.

Clients enqueueing sample buffers from non-real-time sources may hold off from generating or obtaining more sample buffers to enqueue when the value of `readyForMoreMediaData` is [false](https://developer.apple.com/documentation/swift/false).

It is safe to call [enqueueSampleBuffer:](enqueue%28__%29.md) when [readyForMoreMediaData](isreadyformoremediadata.md) is [false](https://developer.apple.com/documentation/swift/false), but enqueing more sample buffers than are required for timely rendering by the receiver is highly discouraged.

To help with control of the non-real-time supply of sample buffers, such clients should use [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) in order to specify a block that the layer should invoke whenever it’s ready for sample buffers to be appended.

The value of `readyForMoreMediaData` will often change from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true) asynchronously, as previously supplied sample buffers are decoded and displayed.

> **Important**

>  This property does not support key-value observing.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.
