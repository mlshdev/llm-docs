> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrenderingstatus](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrenderingstatus)

# AVQueuedSampleBufferRenderingStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

The statuses for sample buffer rendering.

> Use EnqueueResult from enqueue(\_:) and enqueueImmediately(\_:), and RenderingEvent from renderingEventsAfterFinishedEnqueuing instead

## Declaration

```swift
enum AVQueuedSampleBufferRenderingStatus
```

## Topics

### Status values

- [AVQueuedSampleBufferRenderingStatus.unknown](avqueuedsamplebufferrenderingstatus/unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatus.rendering](avqueuedsamplebufferrenderingstatus/rendering.md): Deprecated. The object is rendering the sample buffer.
- [AVQueuedSampleBufferRenderingStatus.failed](avqueuedsamplebufferrenderingstatus/failed.md): Deprecated. The object can no longer render sample buffers because of an error.

### Initializers

- [init(rawValue:)](avqueuedsamplebufferrenderingstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining rendering status

- [status](avsamplebufferaudiorenderer/status.md): Deprecated. The status of the audio renderer.

# AVQueuedSampleBufferRenderingStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 1.0+

The statuses for sample buffer rendering.

## Declaration

```objectivec
enum AVQueuedSampleBufferRenderingStatus : NSInteger;
```

## Topics

### Status values

- [AVQueuedSampleBufferRenderingStatusUnknown](avqueuedsamplebufferrenderingstatus/unknown.md): Deprecated. The object doesn’t have any sample buffers enqueued.
- [AVQueuedSampleBufferRenderingStatusRendering](avqueuedsamplebufferrenderingstatus/rendering.md): Deprecated. The object is rendering the sample buffer.
- [AVQueuedSampleBufferRenderingStatusFailed](avqueuedsamplebufferrenderingstatus/failed.md): Deprecated. The object can no longer render sample buffers because of an error.

## See Also

### Determining rendering status

- [status](avsamplebufferaudiorenderer/status.md): Deprecated. The status of the audio renderer.
