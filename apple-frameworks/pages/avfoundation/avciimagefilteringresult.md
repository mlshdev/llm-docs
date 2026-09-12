> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avciimagefilteringresult](https://developer.apple.com/documentation/avfoundation/avciimagefilteringresult)

# AVCIImageFilteringResult

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An output video frame processed with Core Image filtering.

## Declaration

```swift
struct AVCIImageFilteringResult
```

## Topics

### Creating a result

- [init(resultImage:ciContext:)](avciimagefilteringresult/init%28resultimage_cicontext_%29.md)

### Inspecting the result

- [ciContext](avciimagefilteringresult/cicontext.md): The core image context used to render the image
- [resultImage](avciimagefilteringresult/resultimage.md): Provides the filtered video frame image to AVFoundation for further processing or display.

## See Also

### Creating a video composition

- [init(configuration:)](avvideocomposition/init%28configuration_%29.md): Initialize an AVVideoComposition with a configuration.
- [AVVideoComposition.Configuration](avvideocomposition/configuration.md): Configurable properties for initializing a new AVVideoComposition instance.
- [init(applyingFiltersTo:applier:)](avvideocomposition/init%28applyingfiltersto_applier_%29.md): Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](avvideocomposition/videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [AVCIImageFilteringParameters](avciimagefilteringparameters.md)
- [videoComposition(withPropertiesOf:completionHandler:)](avvideocomposition/videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(propertiesOf:)](avvideocomposition/init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](avvideocomposition/init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
