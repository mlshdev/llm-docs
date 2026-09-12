> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/error](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The error that caused the failure.

> Use [error](../avsamplebuffervideorenderer/error.md) on [sampleBufferRenderer](samplebufferrenderer.md) instead.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSError` that describes what caused the display layer to no longer be able to enqueue sample buffers. If the status is not [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md), the value of this property is `nil`.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.10+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The error that caused the failure.

> Use [error](../avsamplebuffervideorenderer/error.md) on [sampleBufferRenderer](samplebufferrenderer.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSError` that describes what caused the display layer to no longer be able to enqueue sample buffers. If the status is not [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md), the value of this property is `nil`.
