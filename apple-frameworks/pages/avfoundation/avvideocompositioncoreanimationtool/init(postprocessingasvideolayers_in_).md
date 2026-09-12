> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool/init(postprocessingasvideolayers:in:)](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(postprocessingasvideolayers:in:))

# init(postProcessingAsVideoLayers:in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Composes the composited video frames with the Core Animation layer.

## Declaration

```swift
convenience init(postProcessingAsVideoLayers videoLayers: [CALayer], in animationLayer: CALayer)
```

## Parameters

- `videoLayers`: An array containing the video layers
- `animationLayer`: The animation layer.

<a id="return-value"></a>

## Return Value

A new `AVVideoCompositionCoreAnimationTool` instance with the composited video frames and the rendered animation layer.

<a id="Discussion"></a>

## Discussion

Duplicates the composited video frames in each videoLayer and renders animationLayer to produce the final frame. The `videoLayers` should be in `animationLayer`’s sublayer tree.

The `animationLayer` should not come from, or be added to, another layer tree.

> **Note**

>  On iOS, a layer instance backing a [UIView](../../uikit/uiview.md) usually have their content flipped, as defined by the [contentsAreFlipped()](../../quartzcore/calayer/contentsareflipped%28%29.md) method. It may be required to insert a [CALayer](../../quartzcore/calayer.md) instance with its [isGeometryFlipped](../../quartzcore/calayer/isgeometryflipped.md) property set to [true](https://developer.apple.com/documentation/swift/true) in the layer hierarchy to get the same result when attaching a layer to the receiver when the layer backs a [UIView](../../uikit/uiview.md).

## See Also

### Creating a composition tool

- [init(additionalLayer:asTrackID:)](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [init(postProcessingAsVideoLayer:in:)](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [init(configuration:)](init%28configuration_%29.md): Compose the composited video frames with the Core Animation layer.
- [AVVideoCompositionCoreAnimationTool.Configuration](configuration.md): Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.

# videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers:inLayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Composes the composited video frames with the Core Animation layer.

## Declaration

```objectivec
+ (instancetype) videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers:(NSArray<CALayer *> *) videoLayers inLayer:(CALayer *) animationLayer;
```

## Parameters

- `videoLayers`: An array containing the video layers
- `animationLayer`: The animation layer.

<a id="return-value"></a>

## Return Value

A new `AVVideoCompositionCoreAnimationTool` instance with the composited video frames and the rendered animation layer.

<a id="Discussion"></a>

## Discussion

Duplicates the composited video frames in each videoLayer and renders animationLayer to produce the final frame. The `videoLayers` should be in `animationLayer`’s sublayer tree.

The `animationLayer` should not come from, or be added to, another layer tree.

> **Note**

>  On iOS, a layer instance backing a [UIView](../../uikit/uiview.md) usually have their content flipped, as defined by the [contentsAreFlipped](../../quartzcore/calayer/contentsareflipped%28%29.md) method. It may be required to insert a [CALayer](../../quartzcore/calayer.md) instance with its [geometryFlipped](../../quartzcore/calayer/isgeometryflipped.md) property set to [true](https://developer.apple.com/documentation/swift/true) in the layer hierarchy to get the same result when attaching a layer to the receiver when the layer backs a [UIView](../../uikit/uiview.md).

## See Also

### Creating a composition tool

- [videoCompositionCoreAnimationToolWithAdditionalLayer:asTrackID:](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer:inLayer:](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
