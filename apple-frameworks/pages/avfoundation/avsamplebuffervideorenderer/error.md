> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/error](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object the describes the error that caused the rendering failure.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` by default. It only contains a valid error object when the [status](status.md) value is [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md).

## See Also

### Inspecting the status

- [status](status.md): Deprecated. A status value that indicates whether this object can enqueue and render sample buffers.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object the describes the error that caused the rendering failure.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` by default. It only contains a valid error object when the [status](status.md) value is [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md).

## See Also

### Inspecting the status

- [status](status.md): Deprecated. A status value that indicates whether this object can enqueue and render sample buffers.
