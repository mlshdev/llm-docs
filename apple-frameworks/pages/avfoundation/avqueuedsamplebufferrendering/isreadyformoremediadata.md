> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/isreadyformoremediadata](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/isreadyformoremediadata)

# isReadyForMoreMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A Boolean value that indicates whether the receiver is able to accept more sample buffers.

## Declaration

```swift
var isReadyForMoreMediaData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An object conforming to `AVQueuedSampleBufferRendering` keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources, for example, clients that can supply sample buffers faster than they are consumed, and so need to decide when to hold back. Clients enqueueing sample buffers from non-real-time sources may hold off from generating or obtaining more sample buffers to enqueue when the value of `readyForMoreMediaData` is `NO`. It is safe to call [enqueue(\_:)](enqueue%28__%29.md) when `readyForMoreMediaData` is `NO`, but don’t enqueue sample buffers without bound.

To help with control of the non-real-time supply of sample buffers, clients can call [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) in order to specify a block that the receiver should invoke whenever it’s ready for sample buffers to be appended.

The value of `readyForMoreMediaData` often changes\` from `NO` to `YES` asynchronously, as previously supplied sample buffers are decoded and rendered.

This property is not key-value observable.

## See Also

### Requesting media

- [enqueue(\_:)](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) call.

# readyForMoreMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the receiver is able to accept more sample buffers.

## Declaration

```objectivec
@property (readonly, getter=isReadyForMoreMediaData) BOOL readyForMoreMediaData;
```

<a id="Discussion"></a>

## Discussion

An object conforming to `AVQueuedSampleBufferRendering` keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources, for example, clients that can supply sample buffers faster than they are consumed, and so need to decide when to hold back. Clients enqueueing sample buffers from non-real-time sources may hold off from generating or obtaining more sample buffers to enqueue when the value of `readyForMoreMediaData` is `NO`. It is safe to call [enqueueSampleBuffer:](enqueue%28__%29.md) when `readyForMoreMediaData` is `NO`, but don’t enqueue sample buffers without bound.

To help with control of the non-real-time supply of sample buffers, clients can call [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) in order to specify a block that the receiver should invoke whenever it’s ready for sample buffers to be appended.

The value of `readyForMoreMediaData` often changes\` from `NO` to `YES` asynchronously, as previously supplied sample buffers are decoded and rendered.

This property is not key-value observable.

## See Also

### Requesting media

- [enqueueSampleBuffer:](enqueue%28__%29.md): Deprecated. Sends a sample buffer to the queue for rendering.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) call.
