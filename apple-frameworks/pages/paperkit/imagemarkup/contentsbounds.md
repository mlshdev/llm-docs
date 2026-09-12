> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup/contentsbounds](https://developer.apple.com/documentation/paperkit/imagemarkup/contentsbounds)

# contentsBounds

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The portion of the image to display, in normalized coordinates.

## Declaration

```swift
var contentsBounds: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

Values are normalized from `0.0` to `1.0`, where `(0, 0)` is the top-left and `(1, 1)` is the bottom-right of the source image. Defaults to `CGRect(x: 0, y: 0, width: 1, height: 1)` (full image).

## See Also

### Accessing image content

- [image](image.md): The image content displayed by this markup.
- [replaceImage(with:)](replaceimage%28with_%29-10qzi.md): Replaces the contents of this image markup with an image file.
- [replaceImage(with:)](replaceimage%28with_%29-6eb53.md): Replaces the contents of this image markup with a `CGImage`.
- [orientation](orientation.md): The orientation of the image content.
