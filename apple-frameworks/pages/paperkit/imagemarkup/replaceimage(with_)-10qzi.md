> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup/replaceimage(with:)-10qzi](https://developer.apple.com/documentation/paperkit/imagemarkup/replaceimage(with:)-10qzi)

# replaceImage(with:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Replaces the contents of this image markup with an image file.

## Declaration

```swift
mutating func replaceImage(with url: URL) throws
```

## Parameters

- `url`: The URL of the image file to load and display.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the image file cannot be loaded or is in an unsupported format.

Image content is shown scaled to fill.

## See Also

### Accessing image content

- [image](image.md): The image content displayed by this markup.
- [replaceImage(with:)](replaceimage%28with_%29-6eb53.md): Replaces the contents of this image markup with a `CGImage`.
- [orientation](orientation.md): The orientation of the image content.
- [contentsBounds](contentsbounds.md): The portion of the image to display, in normalized coordinates.
