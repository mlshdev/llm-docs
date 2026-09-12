> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrenderingstatus/rendering](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrenderingstatus/rendering)

# AVQueuedSampleBufferRenderingStatus.rendering (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

The object is rendering the sample buffer.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
case rendering
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatus.unknown](unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatus.failed](failed.md): Deprecated. The object can no longer render sample buffers because of an error.

# AVQueuedSampleBufferRenderingStatusRendering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 1.0+

The object is rendering the sample buffer.

## Declaration

```objectivec
AVQueuedSampleBufferRenderingStatusRendering
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatusUnknown](unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatusFailed](failed.md): Deprecated. The object can no longer render sample buffers because of an error.
