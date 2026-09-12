> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview/candidaterects](https://developer.apple.com/documentation/appkit/nstextpreview/candidaterects)

# candidateRects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

Rectangles that define the specific portions of text to highlight.

## Declaration

```swift
var candidateRects: [NSValue] { get }
```

<a id="discussion"></a>

## Discussion

At initialization time, you set this property to an array of [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects, each of which contains an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) in the coordinate space of the target view. Each rectangle contains a bounding rectangle for text that is part of the preview. When applying visual effects, the system adds highlights only to the text in the specified rectangles.

## See Also

### Getting the preview details

- [previewImage](previewimage.md): The image that contains the requested text from your view.
- [presentationFrame](presentationframe.md): The frame rectangle that places the preview image directly over the matching text.

# candidateRects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

Rectangles that define the specific portions of text to highlight.

## Declaration

```objectivec
@property (readonly) NSArray<NSValue *> * candidateRects;
```

<a id="discussion"></a>

## Discussion

At initialization time, you set this property to an array of [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects, each of which contains an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) in the coordinate space of the target view. Each rectangle contains a bounding rectangle for text that is part of the preview. When applying visual effects, the system adds highlights only to the text in the specified rectangles.

## See Also

### Getting the preview details

- [previewImage](previewimage.md): The image that contains the requested text from your view.
- [presentationFrame](presentationframe.md): The frame rectangle that places the preview image directly over the matching text.
