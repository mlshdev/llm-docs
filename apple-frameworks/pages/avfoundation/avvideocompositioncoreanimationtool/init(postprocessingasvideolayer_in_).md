> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool/init(postprocessingasvideolayer:in:)](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(postprocessingasvideolayer:in:))

# init(postProcessingAsVideoLayer:in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Composes the composited video frame with a Core Animation layer.

> Use .init(configuration: AVVideoCompositionCoreAnimationTool.Configuration) instead

## Declaration

```swift
convenience init(postProcessingAsVideoLayer videoLayer: CALayer, in animationLayer: CALayer)
```

## Parameters

- `videoLayer`: A video layer.
- `animationLayer`: An animation layer.

<a id="return-value"></a>

## Return Value

A new animation tool for the composition.

<a id="Discussion"></a>

## Discussion

Place composited video frames in `videoLayer` and render `animationLayer` to produce the final frame.

The `videoLayer` should be in the `animationLayer` sublayer tree. The `animationLayer` should not come from, or be added to, another layer tree.

## See Also

### Creating a composition tool

- [init(additionalLayer:asTrackID:)](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [init(postProcessingAsVideoLayers:in:)](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
- [init(configuration:)](init%28configuration_%29.md): Compose the composited video frames with the Core Animation layer.
- [AVVideoCompositionCoreAnimationTool.Configuration](configuration.md): Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.

# videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer:inLayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Composes the composited video frame with a Core Animation layer.

## Declaration

```objectivec
+ (instancetype) videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer:(CALayer *) videoLayer inLayer:(CALayer *) animationLayer;
```

## Parameters

- `videoLayer`: A video layer.
- `animationLayer`: An animation layer.

<a id="return-value"></a>

## Return Value

A new animation tool for the composition.

<a id="Discussion"></a>

## Discussion

Place composited video frames in `videoLayer` and render `animationLayer` to produce the final frame.

The `videoLayer` should be in the `animationLayer` sublayer tree. The `animationLayer` should not come from, or be added to, another layer tree.

## See Also

### Creating a composition tool

- [videoCompositionCoreAnimationToolWithAdditionalLayer:asTrackID:](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers:inLayer:](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
