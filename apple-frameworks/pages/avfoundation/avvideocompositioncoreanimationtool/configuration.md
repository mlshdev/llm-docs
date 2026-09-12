> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool/configuration](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/configuration)

# AVVideoCompositionCoreAnimationTool.Configuration

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(postProcessingAsVideoLayer:containingLayer:)](configuration/init%28postprocessingasvideolayer_containinglayer_%29.md): Place composited video frames in videoLayer and render animationLayer to produce the final frame. Normally videoLayer should be in animationLayer’s sublayer tree. The animationLayer should not come from, or be added to, another layer tree. Be aware that on iOS, CALayers backing a UIView usually have their content flipped (as defined by the -contentsAreFlipped method). It may be required to insert a CALayer with its geometryFlipped property set to YES in the layer hierarchy to get the same result when attaching a CALayer to a AVVideoCompositionCoreAnimationTool as when using it to back a UIView.
- [init(postProcessingAsVideoLayers:containingLayer:)](configuration/init%28postprocessingasvideolayers_containinglayer_%29.md): Duplicate the composited video frames in each videoLayer and render animationLayer to produce the final frame. Normally videoLayers should be in animationLayer’s sublayer tree. The animationLayer should not come from, or be added to, another layer tree. Be aware that on iOS, CALayers backing a UIView usually have their content flipped (as defined by the -contentsAreFlipped method). It may be required to insert a CALayer with its geometryFlipped property set to YES in the layer hierarchy to get the same result when attaching a CALayer to a AVVideoCompositionCoreAnimationTool as when using it to back a UIView.

### Inspecting the configuration

- [containingLayer](configuration/containinglayer.md): Containing layer to be rendered into, producing the final frame.
- [layers](configuration/layers.md): Layer(s) to contain the composited video frames. Frames are duplicated if there is more than one layer.

## See Also

### Creating a composition tool

- [init(additionalLayer:asTrackID:)](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [init(postProcessingAsVideoLayer:in:)](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [init(postProcessingAsVideoLayers:in:)](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
- [init(configuration:)](init%28configuration_%29.md): Compose the composited video frames with the Core Animation layer.
