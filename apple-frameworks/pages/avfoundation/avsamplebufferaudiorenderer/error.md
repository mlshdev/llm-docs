> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/error](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The error that caused the renderer to no longer render sample buffers.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is nil unless the value of [status](status.md) is [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md).

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The error that caused the renderer to no longer render sample buffers.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The value of this property is nil unless the value of [status](status.md) is [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md).
