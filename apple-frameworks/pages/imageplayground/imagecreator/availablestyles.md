> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator/availablestyles](https://developer.apple.com/documentation/imageplayground/imagecreator/availablestyles)

# availableStyles

**Framework:** Image Playground  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

The set of styles you can apply to the images you create.

## Declaration

```swift
final let availableStyles: [ImagePlaygroundStyle]
```

<a id="discussion"></a>

## Discussion

Before requesting any images, make sure the style you want to use is in this property.

## See Also

### Generating images

- [images(for:style:limit:)](images%28for_style_limit_%29.md): Deprecated. Starts the creation of images based on the description and style information you provide.
- [ImageCreator.CreatedImage](createdimage.md): Deprecated. A structure that stores a programmatically generated image.
- [ImageCreator.Error](error.md): Deprecated. Errors that can occur during the image generation process.
