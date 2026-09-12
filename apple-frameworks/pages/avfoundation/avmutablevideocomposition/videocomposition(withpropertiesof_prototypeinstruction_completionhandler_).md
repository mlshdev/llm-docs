> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:))

# videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 26.0) · iPadOS 16.0+ (deprecated in 26.0) · Mac Catalyst 16.0+ (deprecated in 26.0) · macOS 13.0+ (deprecated in 26.0) · tvOS 16.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.

## Declaration

```swift
class func videoComposition(withPropertiesOf asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction, completionHandler: @escaping @Sendable (AVMutableVideoComposition?, (any Error)?) -> Void)
```

```swift
class func videoComposition(withPropertiesOf asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction) async throws -> AVMutableVideoComposition
```

## Parameters

- `asset`: The asset for which to create a video composition. Load the asset’s [duration](../avasset/duration.md) and [tracks](../avasset/tracks.md) properties before invoking this method.
- `prototypeInstruction`: A video composition instruction to use as a prototype.
- `completionHandler`: A block the system calls when it finishes creating the new video composition.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(propertiesOf:prototypeInstruction:)](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.

## Declaration

```objectivec
+ (void) videoCompositionWithPropertiesOfAsset:(AVAsset *) asset prototypeInstruction:(AVVideoCompositionInstruction *) prototypeInstruction completionHandler:(void (^)(AVMutableVideoComposition *videoComposition, NSError *error)) completionHandler;
```

## Parameters

- `asset`: The asset for which to create a video composition. Load the asset’s [duration](../avasset/duration.md) and [tracks](../avasset/tracks.md) properties before invoking this method.
- `prototypeInstruction`: A video composition instruction to use as a prototype.
- `completionHandler`: A block the system calls when it finishes creating the new video composition.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
