> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/stoprequestingmediadata()](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/stoprequestingmediadata())

# stopRequestingMediaData() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Cancels any current media data request.

> Use sampleBufferRenderer's stopRequestingMediaData instead

## Declaration

```swift
func stopRequestingMediaData()
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [stopRequestingMediaData()](../avqueuedsamplebufferrendering/stoprequestingmediadata%28%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

This method cancels any current [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) call. Each invocation of [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) must be balanced by a call to this method.

This method may be called from within the [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) method’s block or from outside the block.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.

# stopRequestingMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Cancels any current media data request.

> Use sampleBufferRenderer's stopRequestingMediaData instead

## Declaration

```objectivec
- (void) stopRequestingMediaData;
```

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [stopRequestingMediaData](../avqueuedsamplebufferrendering/stoprequestingmediadata%28%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

This method cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) call. Each invocation of [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) must be balanced by a call to this method.

This method may be called from within the [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) method’s block or from outside the block.

## See Also

### Initiating media data requests

- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.
- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates the readiness of the layer to accept more sample buffers.
- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.
- [hasSufficientMediaDataForReliablePlaybackStart](hassufficientmediadataforreliableplaybackstart.md): Deprecated. A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.
