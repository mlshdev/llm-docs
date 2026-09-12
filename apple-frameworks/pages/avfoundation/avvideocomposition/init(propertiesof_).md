> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/init(propertiesof:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/init(propertiesof:))

# init(propertiesOf:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a video composition object configured to present the video tracks of the specified asset.

> Use videoCompositionWithPropertiesOfAsset:completionHandler: instead

## Declaration

```swift
init(propertiesOf asset: AVAsset)
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.

<a id="return-value"></a>

## Return Value

A new video composition object.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 16, tvOS 16, and macOS 13 or later. Create a video composition asynchronously using [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md) instead.

This method creates the video composition object and configures it with the values and instructions suitable for presenting the video tracks of the specified asset. The returned object contains instructions that respect the spatial properties and time ranges of the specified asset’s video tracks. It also configures the object properties in the following way:

- The value of the [frameDuration](frameduration.md) property is short enough to accommodate the greatest nominal frame rate value among the asset’s video tracks, as indicated by the [nominalFrameRate](../avpartialasyncproperty/nominalframerate.md) property of each track. If all its tracks have a nominal frame rate of `0`, it uses a frame rate of 30 frames per second, with the frame duration set accordingly.
- The value of the [renderSize](rendersize.md) property depends on whether the asset is an [AVComposition](../avcomposition.md) object. For an [AVComposition](../avcomposition.md), the render size is the composition’s [naturalSize](../avcomposition/naturalsize.md) value, and for other assets, its a size large enough to encompass all of its video tracks.
- The value of the [renderScale](renderscale.md) property is `1.0`.
- The value of the [animationTool](animationtool.md) property is `nil`.

> **Note**

>  If you specify an asset that doesn’t contain video tracks, this method returns a video composition with no instructions.

## See Also

### Creating a video composition

- [init(configuration:)](init%28configuration_%29.md): Initialize an AVVideoComposition with a configuration.
- [AVVideoComposition.Configuration](configuration.md): Configurable properties for initializing a new AVVideoComposition instance.
- [init(applyingFiltersTo:applier:)](init%28applyingfiltersto_applier_%29.md): Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [AVCIImageFilteringParameters](../avciimagefilteringparameters.md)
- [AVCIImageFilteringResult](../avciimagefilteringresult.md): An output video frame processed with Core Image filtering.
- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithPropertiesOfAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a video composition object configured to present the video tracks of the specified asset.

> Use videoCompositionWithPropertiesOfAsset:completionHandler: instead

## Declaration

```objectivec
+ (AVVideoComposition *) videoCompositionWithPropertiesOfAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.

<a id="return-value"></a>

## Return Value

A new video composition object.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 16, tvOS 16, and macOS 13 or later. Create a video composition asynchronously using [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md) instead.

This method creates the video composition object and configures it with the values and instructions suitable for presenting the video tracks of the specified asset. The returned object contains instructions that respect the spatial properties and time ranges of the specified asset’s video tracks. It also configures the object properties in the following way:

- The value of the [frameDuration](frameduration.md) property is short enough to accommodate the greatest nominal frame rate value among the asset’s video tracks, as indicated by the [nominalFrameRate](../avpartialasyncproperty/nominalframerate.md) property of each track. If all its tracks have a nominal frame rate of `0`, it uses a frame rate of 30 frames per second, with the frame duration set accordingly.
- The value of the [renderSize](rendersize.md) property depends on whether the asset is an [AVComposition](../avcomposition.md) object. For an [AVComposition](../avcomposition.md), the render size is the composition’s [naturalSize](../avcomposition/naturalsize.md) value, and for other assets, its a size large enough to encompass all of its video tracks.
- The value of the [renderScale](renderscale.md) property is `1.0`.
- The value of the [animationTool](animationtool.md) property is `nil`.

> **Note**

>  If you specify an asset that doesn’t contain video tracks, this method returns a video composition with no instructions.

## See Also

### Creating a video composition

- [videoCompositionWithVideoComposition:](videocompositionwithvideocomposition_.md): Pass-through initializer, for internal use in AVFoundation only
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
