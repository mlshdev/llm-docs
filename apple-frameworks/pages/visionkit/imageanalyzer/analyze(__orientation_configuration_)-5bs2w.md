> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/analyze(_:orientation:configuration:)-5bs2w](https://developer.apple.com/documentation/visionkit/imageanalyzer/analyze(_:orientation:configuration:)-5bs2w)

# analyze(\_:orientation:configuration:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns the data for providing a Live Text interaction with an image in the specified orientation.

## Declaration

```swift
final func analyze(_ image: NSImage, orientation: CGImagePropertyOrientation, configuration: ImageAnalyzer.Configuration) async throws -> ImageAnalysis
```

## Parameters

- `image`: An image that the analyzer processes.
- `orientation`: The orientation that the analyzer uses to process the image.
- `configuration`: A configuration that specifies the data types, and locales for text items, to recognize.

<a id="return-value"></a>

## Return Value

The data items that the analyzer finds in the image.

## See Also

### Finding items in images

- [analyze(\_:configuration:)](analyze%28__configuration_%29.md): Returns the data for providing a Live Text interaction with an image.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-ufrs.md): Returns the data for providing a Live Text interaction with a Core Graphics image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-2ezqw.md): Returns the data for providing a Live Text interaction with a pixel buffer image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-4h43g.md): Returns the data for providing a Live Text interaction with a bitmap image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-fcjz.md): Returns the data for providing a Live Text interaction with an image in the specified orientation.
- [analyze(imageAt:orientation:configuration:)](analyze%28imageat_orientation_configuration_%29.md): Returns the data for providing a Live Text interaction with an image at a URL and in the specified orientation.
