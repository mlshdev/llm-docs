> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool/init(additionallayer:astrackid:)](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(additionallayer:astrackid:))

# init(additionalLayer:asTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Adds a Core Animation layer to the video composition.

## Declaration

```swift
convenience init(additionalLayer layer: sending CALayer, asTrackID trackID: CMPersistentTrackID)
```

## Parameters

- `layer`: The Core Animation layer to add.
- `trackID`: A track ID to identify the track.

  `trackID` should not match any real trackID in the source.

<a id="return-value"></a>

## Return Value

A new Core Animation tool for the layer.

<a id="Discussion"></a>

## Discussion

You use this method to include a Core Animation layer as an individual track input in video composition.

Video composition instructions should reference `trackID` where the rendered animation should be included.

## See Also

### Creating a composition tool

- [init(postProcessingAsVideoLayer:in:)](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [init(postProcessingAsVideoLayers:in:)](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
- [init(configuration:)](init%28configuration_%29.md): Compose the composited video frames with the Core Animation layer.
- [AVVideoCompositionCoreAnimationTool.Configuration](configuration.md): Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.

# videoCompositionCoreAnimationToolWithAdditionalLayer:asTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Adds a Core Animation layer to the video composition.

## Declaration

```objectivec
+ (instancetype) videoCompositionCoreAnimationToolWithAdditionalLayer:(CALayer *) layer asTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `layer`: The Core Animation layer to add.
- `trackID`: A track ID to identify the track.

  `trackID` should not match any real trackID in the source.

<a id="return-value"></a>

## Return Value

A new Core Animation tool for the layer.

<a id="Discussion"></a>

## Discussion

You use this method to include a Core Animation layer as an individual track input in video composition.

Video composition instructions should reference `trackID` where the rendered animation should be included.

## See Also

### Creating a composition tool

- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer:inLayer:](init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers:inLayer:](init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
