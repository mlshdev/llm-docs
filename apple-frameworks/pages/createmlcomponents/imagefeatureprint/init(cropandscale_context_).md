> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureprint/init(cropandscale:context:)](https://developer.apple.com/documentation/createmlcomponents/imagefeatureprint/init(cropandscale:context:))

# init(cropAndScale:context:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a FeaturePrint feature extractor.

## Declaration

```swift
init(cropAndScale: VNImageCropAndScaleOption = .centerCrop, context: CIContext = CIContext())
```

## Parameters

- `cropAndScale`: The scaling and cropping options.
- `context`: The CoreImage context to use for the operation. Defaults to a new default context.

## See Also

### Creating the extractor

- [init(revision:cropAndScale:context:)](init%28revision_cropandscale_context_%29.md): Creates a FeaturePrint feature extractor.
