> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrenderingstatus/failed](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrenderingstatus/failed)

# AVQueuedSampleBufferRenderingStatus.failed (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

The object can no longer render sample buffers because of an error.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
case failed
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatus.unknown](unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatus.rendering](rendering.md): Deprecated. The object is rendering the sample buffer.

# AVQueuedSampleBufferRenderingStatusFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 1.0+

The object can no longer render sample buffers because of an error.

## Declaration

```objectivec
AVQueuedSampleBufferRenderingStatusFailed
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatusUnknown](unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatusRendering](rendering.md): Deprecated. The object is rendering the sample buffer.
