> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/status](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/status)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A status value that indicates whether this object can enqueue and render sample buffers.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
var status: AVQueuedSampleBufferRenderingStatus { get }
```

<a id="Discussion"></a>

## Discussion

If the status is [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md), check the value of the [error](error.md) property to determine the failure. To resume rendering sample buffers after a failure, you must first reset the status to [AVQueuedSampleBufferRenderingStatus.unknown](../avqueuedsamplebufferrenderingstatus/unknown.md), which you do by invoking [flush()](../avqueuedsamplebufferrendering/flush%28%29.md) on the video renderer.

This property is key-value observable.

## See Also

### Inspecting the status

- [error](error.md): Deprecated. An object the describes the error that caused the rendering failure.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A status value that indicates whether this object can enqueue and render sample buffers.

## Declaration

```objectivec
@property (readonly) AVQueuedSampleBufferRenderingStatus status;
```

<a id="Discussion"></a>

## Discussion

If the status is [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md), check the value of the [error](error.md) property to determine the failure. To resume rendering sample buffers after a failure, you must first reset the status to [AVQueuedSampleBufferRenderingStatusUnknown](../avqueuedsamplebufferrenderingstatus/unknown.md), which you do by invoking [flush](../avqueuedsamplebufferrendering/flush%28%29.md) on the video renderer.

This property is key-value observable.

## See Also

### Inspecting the status

- [error](error.md): Deprecated. An object the describes the error that caused the rendering failure.
