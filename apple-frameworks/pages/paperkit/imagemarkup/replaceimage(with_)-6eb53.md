> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup/replaceimage(with:)-6eb53](https://developer.apple.com/documentation/paperkit/imagemarkup/replaceimage(with:)-6eb53)

# replaceImage(with:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Replaces the contents of this image markup with a `CGImage`.

## Declaration

```swift
mutating func replaceImage(with image: CGImage)
```

## Parameters

- `image`: The new image to display.

<a id="discussion"></a>

## Discussion

Image content is shown scaled to fill.

## See Also

### Accessing image content

- [image](image.md): The image content displayed by this markup.
- [replaceImage(with:)](replaceimage%28with_%29-10qzi.md): Replaces the contents of this image markup with an image file.
- [orientation](orientation.md): The orientation of the image content.
- [contentsBounds](contentsbounds.md): The portion of the image to display, in normalized coordinates.
