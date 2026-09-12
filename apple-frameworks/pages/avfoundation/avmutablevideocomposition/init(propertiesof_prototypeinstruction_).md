> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/init(propertiesof:prototypeinstruction:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/init(propertiesof:prototypeinstruction:))

# init(propertiesOf:prototypeInstruction:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0)

Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.

> Use videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler: instead

## Declaration

```swift
init(propertiesOf asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction)
```

## Parameters

- `asset`: The asset for which to create a video composition. Load the asset’s [duration](../avasset/duration.md) and [tracks](../avasset/tracks.md) properties before invoking this method.
- `prototypeInstruction`: A video composition instruction to use as a prototype.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithPropertiesOfAsset:prototypeInstruction: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 13.0+ (deprecated in 18.0)

Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.

> Use videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler: instead

## Declaration

```objectivec
+ (AVMutableVideoComposition *) videoCompositionWithPropertiesOfAsset:(AVAsset *) asset prototypeInstruction:(AVVideoCompositionInstruction *) prototypeInstruction;
```

## Parameters

- `asset`: The asset for which to create a video composition. Load the asset’s [duration](../avasset/duration.md) and [tracks](../avasset/tracks.md) properties before invoking this method.
- `prototypeInstruction`: A video composition instruction to use as a prototype.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
