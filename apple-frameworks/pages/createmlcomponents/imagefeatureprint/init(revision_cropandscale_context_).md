> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureprint/init(revision:cropandscale:context:)](https://developer.apple.com/documentation/createmlcomponents/imagefeatureprint/init(revision:cropandscale:context:))

# init(revision:cropAndScale:context:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a FeaturePrint feature extractor.

## Declaration

```swift
init(revision: Int, cropAndScale: VNImageCropAndScaleOption = .centerCrop, context: CIContext = CIContext())
```

## Parameters

- `revision`: The revision of feature extractor to use.
- `cropAndScale`: The scaling and cropping options.
- `context`: The CoreImage context to use for the operation. Defaults to a new default context.

## See Also

### Creating the extractor

- [init(cropAndScale:context:)](init%28cropandscale_context_%29.md): Creates a FeaturePrint feature extractor.
