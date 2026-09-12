> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrenderingstatus/unknown](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrenderingstatus/unknown)

# AVQueuedSampleBufferRenderingStatus.unknown (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

The object doesn’t have any sample buffers enqueued.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
case unknown
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatus.rendering](rendering.md): Deprecated. The object is rendering the sample buffer.
- [AVQueuedSampleBufferRenderingStatus.failed](failed.md): Deprecated. The object can no longer render sample buffers because of an error.

# AVQueuedSampleBufferRenderingStatusUnknown (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 1.0+

The object doesn’t have any sample buffers enqueued.

## Declaration

```objectivec
AVQueuedSampleBufferRenderingStatusUnknown
```

## See Also

### Status values

- [AVQueuedSampleBufferRenderingStatusRendering](rendering.md): Deprecated. The object is rendering the sample buffer.
- [AVQueuedSampleBufferRenderingStatusFailed](failed.md): Deprecated. The object can no longer render sample buffers because of an error.
