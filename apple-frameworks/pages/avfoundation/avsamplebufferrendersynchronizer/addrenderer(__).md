> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/addrenderer(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/addrenderer(_:))

# addRenderer(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Adds a renderer to the list of renderers under the synchronizer’s control.

> Get an AVQueuedSampleBufferRenderingReceiver from an audio or video renderer with sampleBufferReceiver() and add it to the synchronizer with addReceiver(\_:) instead

## Declaration

```swift
func addRenderer(_ renderer: any AVQueuedSampleBufferRendering)
```

## Parameters

- `renderer`: The render to be added.

<a id="Discussion"></a>

## Discussion

This method can be called while [rate](rate.md) is not `0.0`.

## See Also

### Managing renderers

- [renderers](renderers.md): Deprecated. An array of queued sample buffer renderers currently attached to the synchronizer.
- [removeRenderer(\_:at:completionHandler:)](removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.

# addRenderer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a renderer to the list of renderers under the synchronizer’s control.

## Declaration

```objectivec
- (void) addRenderer:(id<AVQueuedSampleBufferRendering>) renderer;
```

## Parameters

- `renderer`: The render to be added.

<a id="Discussion"></a>

## Discussion

This method can be called while [rate](rate.md) is not `0.0`.

## See Also

### Managing renderers

- [renderers](renderers.md): Deprecated. An array of queued sample buffer renderers currently attached to the synchronizer.
- [removeRenderer:atTime:completionHandler:](removerenderer%28__at_completionhandler_%29.md): Deprecated. Removes a renderer from the synchronizer.
