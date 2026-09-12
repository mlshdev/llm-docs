> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/init(propertiesof:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/init(propertiesof:))

# init(propertiesOf:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a mutable video composition with the specified asset properties.

> Use videoCompositionWithPropertiesOfAsset:completionHandler: instead

## Declaration

```swift
init(propertiesOf asset: AVAsset)
```

## Parameters

- `asset`: An instance of [AVAsset](../avasset.md). Ensure that the duration and tracks properties of the asset are already loaded before invoking this method.

<a id="Discussion"></a>

## Discussion

The returned `AVMutableVideoComposition` has instructions that respect the spatial properties and time ranges of the specified asset’s video tracks.

It also has the following values for its properties:

- A value for [frameDuration](frameduration.md) short enough to accommodate the greatest [nominalFrameRate](../avassettrack/nominalframerate.md) among the asset’s video tracks. If the [nominalFrameRate](../avassettrack/nominalframerate.md) of all of the asset’s video tracks is 0, a default frame rate of 30fps is used.
- If the specified asset is an instance of [AVComposition](../avcomposition.md), the [renderSize](rendersize.md) is set to the [naturalSize](../avcomposition/naturalsize.md) of the [AVComposition](../avcomposition.md); otherwise the [renderSize](rendersize.md) will be set to a value that encompasses all of the asset’s video tracks.
- A [renderScale](renderscale.md) of 1.0.
- The [animationTool](animationtool.md) property set to `nil`.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:prototypeInstruction:)](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithPropertiesOfAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a mutable video composition with the specified asset properties.

> Use videoCompositionWithPropertiesOfAsset:completionHandler: instead

## Declaration

```objectivec
+ (AVMutableVideoComposition *) videoCompositionWithPropertiesOfAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: An instance of [AVAsset](../avasset.md). Ensure that the duration and tracks properties of the asset are already loaded before invoking this method.

<a id="Discussion"></a>

## Discussion

The returned `AVMutableVideoComposition` has instructions that respect the spatial properties and time ranges of the specified asset’s video tracks.

It also has the following values for its properties:

- A value for [frameDuration](frameduration.md) short enough to accommodate the greatest [nominalFrameRate](../avassettrack/nominalframerate.md) among the asset’s video tracks. If the [nominalFrameRate](../avassettrack/nominalframerate.md) of all of the asset’s video tracks is 0, a default frame rate of 30fps is used.
- If the specified asset is an instance of [AVComposition](../avcomposition.md), the [renderSize](rendersize.md) is set to the [naturalSize](../avcomposition/naturalsize.md) of the [AVComposition](../avcomposition.md); otherwise the [renderSize](rendersize.md) will be set to a value that encompasses all of the asset’s video tracks.
- A [renderScale](renderscale.md) of 1.0.
- The [animationTool](animationtool.md) property set to `nil`.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
