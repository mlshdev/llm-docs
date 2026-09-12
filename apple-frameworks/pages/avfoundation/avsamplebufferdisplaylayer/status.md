> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/status](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/status)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The ability of the display layer to be used for enqueuing sample buffers.

> Use sampleBufferRenderer's status instead

## Declaration

```swift
var status: AVQueuedSampleBufferRenderingStatus { get }
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [status](../avsamplebuffervideorenderer/status.md) on [sampleBufferRenderer](samplebufferrenderer.md) instead.

The value of this property is an [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md) that indicates whether the receiver can be used for enqueuing sample buffers.

When the value of this property is [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md), the receiver can no longer be used and a new instance needs to be created in its place. When this happens, clients can check the value of the [error](error.md) property to determine the failure.

This property supports key-value observing.

## See Also

### Getting display layer settings

- [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The ability of the display layer to be used for enqueuing sample buffers.

> Use sampleBufferRenderer's status instead

## Declaration

```objectivec
@property (nonatomic, readonly) AVQueuedSampleBufferRenderingStatus status;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [status](../avsamplebuffervideorenderer/status.md) on [sampleBufferRenderer](samplebufferrenderer.md) instead.

The value of this property is an [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md) that indicates whether the receiver can be used for enqueuing sample buffers.

When the value of this property is [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md), the receiver can no longer be used and a new instance needs to be created in its place. When this happens, clients can check the value of the [error](error.md) property to determine the failure.

This property supports key-value observing.

## See Also

### Getting display layer settings

- [AVQueuedSampleBufferRenderingStatus](../avqueuedsamplebufferrenderingstatus.md): Deprecated. The statuses for sample buffer rendering.
