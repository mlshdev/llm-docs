> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/requiresflushtoresumedecoding](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/requiresflushtoresumedecoding)

# requiresFlushToResumeDecoding (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.

> Use sampleBufferRenderer's requiresFlushToResumeDecoding instead

## Declaration

```swift
var requiresFlushToResumeDecoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [requiresFlushToResumeDecoding](../avsamplebuffervideorenderer/requiresflushtoresumedecoding.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

When an app enters a state where use of video decoder resources isn’t permissible, the value of this property changes to [true](https://developer.apple.com/documentation/swift/true) and the display layer’s status changes to a [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md) state.

To resume rendering sample buffers using the display layer after this property’s value is [true](https://developer.apple.com/documentation/swift/true), apps must first reset the display layer’s status to [AVQueuedSampleBufferRenderingStatus.unknown](../avqueuedsamplebufferrenderingstatus/unknown.md), which you do by calling the layer’s [flush()](flush%28%29.md) method.

This property isn’t key-value observable. Instead, observe changes to this property value by observing notifications of type [AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification](../avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification.md).

## See Also

### Initiating media data requests

- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

# requiresFlushToResumeDecoding (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.

> Use sampleBufferRenderer's requiresFlushToResumeDecoding instead

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL requiresFlushToResumeDecoding;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [requiresFlushToResumeDecoding](../avsamplebuffervideorenderer/requiresflushtoresumedecoding.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

When an app enters a state where use of video decoder resources isn’t permissible, the value of this property changes to [true](https://developer.apple.com/documentation/swift/true) and the display layer’s status changes to a [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md) state.

To resume rendering sample buffers using the display layer after this property’s value is [true](https://developer.apple.com/documentation/swift/true), apps must first reset the display layer’s status to [AVQueuedSampleBufferRenderingStatusUnknown](../avqueuedsamplebufferrenderingstatus/unknown.md), which you do by calling the layer’s [flush](flush%28%29.md) method.

This property isn’t key-value observable. Instead, observe changes to this property value by observing notifications of type [AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification](../avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification.md).

## See Also

### Initiating media data requests

- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.
