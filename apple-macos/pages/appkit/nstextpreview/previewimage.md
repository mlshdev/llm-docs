> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview/previewimage](https://developer.apple.com/documentation/appkit/nstextpreview/previewimage)

# previewImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The image that contains the requested text from your view.

## Declaration

```swift
var previewImage: CGImage { get }
```

<a id="discussion"></a>

## Discussion

You specify this image at initialization time. The system uses it to implement any visual effects involving your view’s text. Create the image with your text on a transparent background.

## See Also

### Getting the preview details

- [presentationFrame](presentationframe.md): The frame rectangle that places the preview image directly over the matching text.
- [candidateRects](candidaterects.md): Rectangles that define the specific portions of text to highlight.

# previewImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The image that contains the requested text from your view.

## Declaration

```objectivec
@property (readonly) CGImageRef previewImage;
```

<a id="discussion"></a>

## Discussion

You specify this image at initialization time. The system uses it to implement any visual effects involving your view’s text. Create the image with your text on a transparent background.

## See Also

### Getting the preview details

- [presentationFrame](presentationframe.md): The frame rectangle that places the preview image directly over the matching text.
- [candidateRects](candidaterects.md): Rectangles that define the specific portions of text to highlight.
