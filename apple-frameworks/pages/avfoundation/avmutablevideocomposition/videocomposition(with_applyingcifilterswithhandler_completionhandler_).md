> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:))

# videoComposition(with:applyingCIFiltersWithHandler:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.

## Declaration

```swift
class func videoComposition(with asset: AVAsset, applyingCIFiltersWithHandler applier: @escaping @Sendable (AVAsynchronousCIImageFilteringRequest) -> Void, completionHandler: @escaping @Sendable (AVMutableVideoComposition?, (any Error)?) -> Void)
```

```swift
class func videoComposition(with asset: AVAsset, applyingCIFiltersWithHandler applier: @escaping @Sendable (AVAsynchronousCIImageFilteringRequest) -> Void) async throws -> AVMutableVideoComposition
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.
- `applier`: A block that AVFoundation calls when processing each video frame.

  The block takes a single parameter and has no return value:

  - **request**: An [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object representing the frame to be processed.
- `completionHandler`: A block the system calls when it finishes creating the new video composition.

<a id="Discussion"></a>

## Discussion

The composition calls the specified handler one time for each frame to display (or processed for export) from the asset’s first enabled video track. In that block, you access the video frame and return a filtered result using the provided [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object. Use that object’s [sourceImage](../avasynchronousciimagefilteringrequest/sourceimage.md) property to get the video frame in the form of a [CIImage](../../coreimage/ciimage.md) object you can apply filters to. Pass the result of your filters to the `request` object’s [finish(with:context:)](../avasynchronousciimagefilteringrequest/finish%28with_context_%29.md) method. (If your filter rendering fails, call the `request` object’s [finish(with:)](../avasynchronousciimagefilteringrequest/finish%28with_%29.md) method if you can’t apply filters).

Creating a composition with this method sets values for the following properties:

- The value of the [frameDuration](../avvideocomposition/frameduration.md) property accommodates the [nominalFrameRate](../avassettrack/nominalframerate.md) value for the asset’s first enabled video track. If the nominal frame rate is zero, AVFoundation uses a default frame rate of 30 fps.
- The [renderSize](../avvideocomposition/rendersize.md) property value a size that encompasses the asset’s first enabled video track, respecting the track’s [preferredTransform](../avassettrack/preferredtransform.md) property.
- The [renderScale](../avvideocomposition/renderscale.md) property value is `1.0`.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(propertiesOf:prototypeInstruction:)](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

# videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.

## Declaration

```objectivec
+ (void) videoCompositionWithAsset:(AVAsset *) asset applyingCIFiltersWithHandler:(void (^)(AVAsynchronousCIImageFilteringRequest *request)) applier completionHandler:(void (^)(AVMutableVideoComposition *videoComposition, NSError *error)) completionHandler;
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.
- `applier`: A block that AVFoundation calls when processing each video frame.

  The block takes a single parameter and has no return value:

  - **request**: An [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object representing the frame to be processed.
- `completionHandler`: A block the system calls when it finishes creating the new video composition.

<a id="Discussion"></a>

## Discussion

The composition calls the specified handler one time for each frame to display (or processed for export) from the asset’s first enabled video track. In that block, you access the video frame and return a filtered result using the provided [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object. Use that object’s [sourceImage](../avasynchronousciimagefilteringrequest/sourceimage.md) property to get the video frame in the form of a [CIImage](../../coreimage/ciimage.md) object you can apply filters to. Pass the result of your filters to the `request` object’s [finishWithImage:context:](../avasynchronousciimagefilteringrequest/finish%28with_context_%29.md) method. (If your filter rendering fails, call the `request` object’s [finishWithError:](../avasynchronousciimagefilteringrequest/finish%28with_%29.md) method if you can’t apply filters).

Creating a composition with this method sets values for the following properties:

- The value of the [frameDuration](../avvideocomposition/frameduration.md) property accommodates the [nominalFrameRate](../avassettrack/nominalframerate.md) value for the asset’s first enabled video track. If the nominal frame rate is zero, AVFoundation uses a default frame rate of 30 fps.
- The [renderSize](../avvideocomposition/rendersize.md) property value a size that encompasses the asset’s first enabled video track, respecting the track’s [preferredTransform](../avassettrack/preferredtransform.md) property.
- The [renderScale](../avvideocomposition/renderscale.md) property value is `1.0`.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.
