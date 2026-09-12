> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool/init(configuration:)](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(configuration:))

# init(configuration:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Compose the composited video frames with the Core Animation layer.

## Declaration

```swift
convenience init(configuration: sending AVVideoCompositionCoreAnimationTool.Configuration)
```

## See Also

### Creating a composition tool

- [init(additionalLayer:asTrackID:)](init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [init(postProcessingAsVideoLayer:in:)](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [init(postProcessingAsVideoLayers:in:)](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
- [AVVideoCompositionCoreAnimationTool.Configuration](configuration.md): Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.
