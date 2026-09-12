> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/datasource/processimages(texteldensity:styleimagedestination:contentimagesdestination:)](https://developer.apple.com/documentation/createml/mlstyletransfer/datasource/processimages(texteldensity:styleimagedestination:contentimagesdestination:))

# processImages(textelDensity:styleImageDestination:contentImagesDestination:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Converts the content images to square images and saves them to a destination directory.

## Declaration

```swift
func processImages(textelDensity: Int, styleImageDestination: URL? = nil, contentImagesDestination: URL? = nil) throws -> (processedStyleImage: URL, processedContentImages: URL)
```

## Parameters

- `textelDensity`: The length of a side, in pixels, of the destination image. The value must be a multiple of `4` in the range `[64, 1024]`.
- `styleImageDestination`: A location in the file system to save the converted style image to. If `nil`, Create ML saves the image to a temporary file location.
- `contentImagesDestination`: A location in the file system to save the converted content image to. If `nil`, Create ML saves the image to a temporary file location.

<a id="return-value"></a>

## Return Value

A tuple of two URLs:

- **`processedStyleImage`**: The URL to the converted style image.
- **`processedContentImages`**: The URL to the converted content image.
