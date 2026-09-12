> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart)

# hasSufficientMediaDataForReliablePlaybackStart (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ (deprecated in 18.0) · iPadOS 14.5+ (deprecated in 18.0) · Mac Catalyst 14.5+ (deprecated in 18.0) · macOS 11.3+ (deprecated in 15.0) · tvOS 14.5+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

> Use sampleBufferRenderer's hasSufficientMediaDataForReliablePlaybackStart instead

## Declaration

```swift
var hasSufficientMediaDataForReliablePlaybackStart: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [hasSufficientMediaDataForReliablePlaybackStart](../avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.

# hasSufficientMediaDataForReliablePlaybackStart (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ (deprecated in 18.0) · iPadOS 14.5+ (deprecated in 18.0) · Mac Catalyst 14.5+ (deprecated in 18.0) · macOS 11.3+ (deprecated in 15.0) · tvOS 14.5+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

> Use sampleBufferRenderer's hasSufficientMediaDataForReliablePlaybackStart instead

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasSufficientMediaDataForReliablePlaybackStart;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [hasSufficientMediaDataForReliablePlaybackStart](../avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current media data request.
