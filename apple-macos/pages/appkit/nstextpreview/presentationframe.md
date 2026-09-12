> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview/presentationframe](https://developer.apple.com/documentation/appkit/nstextpreview/presentationframe)

# presentationFrame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The frame rectangle that places the preview image directly over the matching text.

## Declaration

```swift
var presentationFrame: NSRect { get }
```

<a id="discussion"></a>

## Discussion

You specify this value at initialization time. The system uses it to position the preview image over the text in your view. Make sure the frame rectangle is in your view’s coordinate space.

## See Also

### Getting the preview details

- [previewImage](previewimage.md): The image that contains the requested text from your view.
- [candidateRects](candidaterects.md): Rectangles that define the specific portions of text to highlight.

# presentationFrame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The frame rectangle that places the preview image directly over the matching text.

## Declaration

```objectivec
@property (readonly) NSRect presentationFrame;
```

<a id="discussion"></a>

## Discussion

You specify this value at initialization time. The system uses it to position the preview image over the text in your view. Make sure the frame rectangle is in your view’s coordinate space.

## See Also

### Getting the preview details

- [previewImage](previewimage.md): The image that contains the requested text from your view.
- [candidateRects](candidaterects.md): Rectangles that define the specific portions of text to highlight.
