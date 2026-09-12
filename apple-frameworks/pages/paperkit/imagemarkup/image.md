> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup/image](https://developer.apple.com/documentation/paperkit/imagemarkup/image)

# image

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The image content displayed by this markup.

## Declaration

```swift
var image: CGImage? { get async }
```

<a id="discussion"></a>

## Discussion

Image content is shown scaled to fill.

This property is async because an in-memory `CGImage` is not always loaded from disk. The image property can be `nil` when streaming the data model and the image asset has not yet been received.

## See Also

### Accessing image content

- [replaceImage(with:)](replaceimage%28with_%29-10qzi.md): Replaces the contents of this image markup with an image file.
- [replaceImage(with:)](replaceimage%28with_%29-6eb53.md): Replaces the contents of this image markup with a `CGImage`.
- [orientation](orientation.md): The orientation of the image content.
- [contentsBounds](contentsbounds.md): The portion of the image to display, in normalized coordinates.
