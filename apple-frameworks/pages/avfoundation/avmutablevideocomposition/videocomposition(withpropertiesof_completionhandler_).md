> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/videocomposition(withpropertiesof:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/videocomposition(withpropertiesof:completionhandler:))

# videoComposition(withPropertiesOf:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 26.0) · iPadOS 16.0+ (deprecated in 26.0) · Mac Catalyst 16.0+ (deprecated in 26.0) · macOS 13.0+ (deprecated in 26.0) · tvOS 16.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Returns a new video composition that’s configured to present the video tracks of the specified asset.

## Declaration

```swift
class func videoComposition(withPropertiesOf asset: AVAsset, completionHandler: @escaping @Sendable (AVMutableVideoComposition?, (any Error)?) -> Void)
```

```swift
class func videoComposition(withPropertiesOf asset: AVAsset) async throws -> AVMutableVideoComposition
```

## Parameters

- `asset`: An asset to create a video composition for.
- `completionHandler`: A callback the system invokes with the created video composition, or an error if a failure occurs.

<a id="Discussion"></a>

## Discussion

This method creates the video composition object and configures it with the values and instructions suitable for presenting the video tracks of the specified asset. The returned object contains instructions that respect the spatial properties and time ranges of the specified asset’s video tracks. It also configures the object properties in the following way:

- The value of the [frameDuration](../avvideocomposition/frameduration.md) property is short enough to accommodate the greatest nominal frame rate value among the asset’s video tracks, as indicated by the [nominalFrameRate](../avpartialasyncproperty/nominalframerate.md) property of each track. If all its tracks have a nominal frame rate of `0`, it uses a frame rate of 30 frames per second, with the frame duration set accordingly.
- The value of the [renderSize](../avvideocomposition/rendersize.md) property depends on whether the asset is an [AVComposition](../avcomposition.md) object. For an [AVComposition](../avcomposition.md), the render size is the composition’s [naturalSize](../avcomposition/naturalsize.md) value, and for other assets, its a size large enough to encompass all of its video tracks.
- The value of the [renderScale](../avvideocomposition/renderscale.md) property is `1.0`.
- The value of the [animationTool](../avvideocomposition/animationtool.md) property is `nil`.

> **Note**

>  If you specify an asset that doesn’t contain video tracks, this method returns a video composition with no instructions.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(propertiesOf:prototypeInstruction:)](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithPropertiesOfAsset:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a new video composition that’s configured to present the video tracks of the specified asset.

## Declaration

```objectivec
+ (void) videoCompositionWithPropertiesOfAsset:(AVAsset *) asset completionHandler:(void (^)(AVMutableVideoComposition *videoComposition, NSError *error)) completionHandler;
```

## Parameters

- `asset`: An asset to create a video composition for.
- `completionHandler`: A callback the system invokes with the created video composition, or an error if a failure occurs.

<a id="Discussion"></a>

## Discussion

This method creates the video composition object and configures it with the values and instructions suitable for presenting the video tracks of the specified asset. The returned object contains instructions that respect the spatial properties and time ranges of the specified asset’s video tracks. It also configures the object properties in the following way:

- The value of the [frameDuration](../avvideocomposition/frameduration.md) property is short enough to accommodate the greatest nominal frame rate value among the asset’s video tracks, as indicated by the [nominalFrameRate](../avpartialasyncproperty/nominalframerate.md) property of each track. If all its tracks have a nominal frame rate of `0`, it uses a frame rate of 30 frames per second, with the frame duration set accordingly.
- The value of the [renderSize](../avvideocomposition/rendersize.md) property depends on whether the asset is an [AVComposition](../avcomposition.md) object. For an [AVComposition](../avcomposition.md), the render size is the composition’s [naturalSize](../avcomposition/naturalsize.md) value, and for other assets, its a size large enough to encompass all of its video tracks.
- The value of the [renderScale](../avvideocomposition/renderscale.md) property is `1.0`.
- The value of the [animationTool](../avvideocomposition/animationtool.md) property is `nil`.

> **Note**

>  If you specify an asset that doesn’t contain video tracks, this method returns a video composition with no instructions.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
