> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/init(asset:applyingcifilterswithhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/init(asset:applyingcifilterswithhandler:))

# init(asset:applyingCIFiltersWithHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

> Use videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler: instead

## Declaration

```swift
init(asset: AVAsset, applyingCIFiltersWithHandler applier: @escaping @Sendable (AVAsynchronousCIImageFilteringRequest) -> Void)
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.
- `applier`: A block that AVFoundation calls when processing each video frame.

  The block takes a single parameter and has no return value:

  - **request**: An [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object representing the frame to be processed.

<a id="return-value"></a>

## Return Value

A new video composition object.

<a id="Discussion"></a>

## Discussion

To process video frames using Core Image filters—whether for display or export—create a composition with this method. AVFoundation calls your applier block once for each frame to be displayed (or processed for export) from the asset’s first enabled video track. In that block, you access the video frame and return a filtered result using the provided [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object. Use that object’s [sourceImage](../avasynchronousciimagefilteringrequest/sourceimage.md) property to get the video frame in the form of a CIImage object you can apply filters to. Pass the result of your filters to the `request` object’s [finish(with:context:)](../avasynchronousciimagefilteringrequest/finish%28with_context_%29.md) method. (If your filter rendering fails, call the `request` object’s [finish(with:)](../avasynchronousciimagefilteringrequest/finish%28with_%29.md) method if you cannot apply filters.)

Creating a composition with this method sets values for the following properties:

- The [frameDuration](frameduration.md) property is set to accommodate the [nominalFrameRate](../avassettrack/nominalframerate.md) value for the asset’s first enabled video track. If the nominal frame rate is zero, AVFoundation uses a default framerate of 30 fps.
- The [renderSize](rendersize.md) property is set to a size that encompasses the asset’s first enabled video track, respecting the track’s [preferredTransform](../avassettrack/preferredtransform.md) property.
- The [animationTool](animationtool.md) property is set to `1.0`.

## See Also

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(propertiesOf:prototypeInstruction:)](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.

# videoCompositionWithAsset:applyingCIFiltersWithHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

> Use videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler: instead

## Declaration

```objectivec
+ (AVMutableVideoComposition *) videoCompositionWithAsset:(AVAsset *) asset applyingCIFiltersWithHandler:(void (^)(AVAsynchronousCIImageFilteringRequest *request)) applier;
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.
- `applier`: A block that AVFoundation calls when processing each video frame.

  The block takes a single parameter and has no return value:

  - **request**: An [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object representing the frame to be processed.

<a id="return-value"></a>

## Return Value

A new video composition object.

<a id="Discussion"></a>

## Discussion

To process video frames using Core Image filters—whether for display or export—create a composition with this method. AVFoundation calls your applier block once for each frame to be displayed (or processed for export) from the asset’s first enabled video track. In that block, you access the video frame and return a filtered result using the provided [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md) object. Use that object’s [sourceImage](../avasynchronousciimagefilteringrequest/sourceimage.md) property to get the video frame in the form of a CIImage object you can apply filters to. Pass the result of your filters to the `request` object’s [finishWithImage:context:](../avasynchronousciimagefilteringrequest/finish%28with_context_%29.md) method. (If your filter rendering fails, call the `request` object’s [finishWithError:](../avasynchronousciimagefilteringrequest/finish%28with_%29.md) method if you cannot apply filters.)

Creating a composition with this method sets values for the following properties:

- The [frameDuration](frameduration.md) property is set to accommodate the [nominalFrameRate](../avassettrack/nominalframerate.md) value for the asset’s first enabled video track. If the nominal frame rate is zero, AVFoundation uses a default framerate of 30 fps.
- The [renderSize](rendersize.md) property is set to a size that encompasses the asset’s first enabled video track, respecting the track’s [preferredTransform](../avassettrack/preferredtransform.md) property.
- The [animationTool](animationtool.md) property is set to `1.0`.

## See Also

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
