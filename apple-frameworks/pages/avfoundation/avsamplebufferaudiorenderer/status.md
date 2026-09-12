> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/status](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/status)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The status of the audio renderer.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
var status: AVQueuedSampleBufferRenderingStatus { get }
```

<a id="Discussion"></a>

## Discussion

A renderer begins with a status of [AVQueuedSampleBufferRenderingStatus.unknown](../avqueuedsamplebufferrenderingstatus/unknown.md). As you add sample buffers to the queue for rendering, the renderer transitions to either [AVQueuedSampleBufferRenderingStatus.rendering](../avqueuedsamplebufferrenderingstatus/rendering.md) or [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md).

If the status is `AVQueuedSampleBufferRenderingStatus.failed`, check the value of the renderer’s error property for information on the error encountered. This property is key value observable.

## See Also

### Determining rendering status

- [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The status of the audio renderer.

## Declaration

```objectivec
@property (nonatomic, readonly) AVQueuedSampleBufferRenderingStatus status;
```

<a id="Discussion"></a>

## Discussion

A renderer begins with a status of [AVQueuedSampleBufferRenderingStatusUnknown](../avqueuedsamplebufferrenderingstatus/unknown.md). As you add sample buffers to the queue for rendering, the renderer transitions to either [AVQueuedSampleBufferRenderingStatusRendering](../avqueuedsamplebufferrenderingstatus/rendering.md) or [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md).

If the status is `AVQueuedSampleBufferRenderingStatus.failed`, check the value of the renderer’s error property for information on the error encountered. This property is key value observable.

## See Also

### Determining rendering status

- [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.
