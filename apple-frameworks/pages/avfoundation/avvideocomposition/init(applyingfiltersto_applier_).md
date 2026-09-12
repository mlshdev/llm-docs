> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/init(applyingfiltersto:applier:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/init(applyingfiltersto:applier:))

# init(applyingFiltersTo:applier:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.

## Declaration

```swift
nonisolated(nonsending) convenience init(applyingFiltersTo asset: AVAsset, applier: @escaping @Sendable (AVCIImageFilteringParameters) async throws -> AVCIImageFilteringResult) async throws
```

## Parameters

- `asset`: The asset whose configuration matches the intended use of the video composition.
- `applier`: A closure that AVFoundation calls when processing each video frame.

<a id="return-value"></a>

## Return Value

A new AVVideoComposition instance configured for Core Image filtering.

## See Also

### Creating a video composition

- [init(configuration:)](init%28configuration_%29.md): Initialize an AVVideoComposition with a configuration.
- [AVVideoComposition.Configuration](configuration.md): Configurable properties for initializing a new AVVideoComposition instance.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [AVCIImageFilteringParameters](../avciimagefilteringparameters.md)
- [AVCIImageFilteringResult](../avciimagefilteringresult.md): An output video frame processed with Core Image filtering.
- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
