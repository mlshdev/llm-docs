> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/init(configuration:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/init(configuration:))

# init(configuration:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initialize an AVVideoComposition with a configuration.

## Declaration

```swift
convenience init(configuration: AVVideoComposition.Configuration)
```

## Parameters

- `configuration`: Contains the property values for a new AVVideoComposition.

## See Also

### Creating a video composition

- [AVVideoComposition.Configuration](configuration.md): Configurable properties for initializing a new AVVideoComposition instance.
- [init(applyingFiltersTo:applier:)](init%28applyingfiltersto_applier_%29.md): Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [AVCIImageFilteringParameters](../avciimagefilteringparameters.md)
- [AVCIImageFilteringResult](../avciimagefilteringresult.md): An output video frame processed with Core Image filtering.
- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
