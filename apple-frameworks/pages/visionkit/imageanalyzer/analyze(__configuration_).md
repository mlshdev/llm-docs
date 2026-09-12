> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/analyze(_:configuration:)](https://developer.apple.com/documentation/visionkit/imageanalyzer/analyze(_:configuration:))

# analyze(\_:configuration:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Returns the data for providing a Live Text interaction with an image.

## Declaration

```swift
final func analyze(_ image: UIImage, configuration: ImageAnalyzer.Configuration) async throws -> ImageAnalysis
```

## Parameters

- `image`: An image that the analyzer processes.
- `configuration`: A configuration that specifies the data types, and locales for text items, to recognize.

<a id="return-value"></a>

## Return Value

The data items that the analyzer finds in the image.

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

This function configures orientation automatically based on the given image’s orientation property.

## See Also

### Finding items in images

- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-5bs2w.md): Returns the data for providing a Live Text interaction with an image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-ufrs.md): Returns the data for providing a Live Text interaction with a Core Graphics image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-2ezqw.md): Returns the data for providing a Live Text interaction with a pixel buffer image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-4h43g.md): Returns the data for providing a Live Text interaction with a bitmap image in the specified orientation.
- [analyze(\_:orientation:configuration:)](analyze%28__orientation_configuration_%29-fcjz.md): Returns the data for providing a Live Text interaction with an image in the specified orientation.
- [analyze(imageAt:orientation:configuration:)](analyze%28imageat_orientation_configuration_%29.md): Returns the data for providing a Live Text interaction with an image at a URL and in the specified orientation.
