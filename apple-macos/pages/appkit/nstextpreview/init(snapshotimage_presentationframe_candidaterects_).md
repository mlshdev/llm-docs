> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview/init(snapshotimage:presentationframe:candidaterects:)](https://developer.apple.com/documentation/appkit/nstextpreview/init(snapshotimage:presentationframe:candidaterects:))

# init(snapshotImage:presentationFrame:candidateRects:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 15.2+

Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.

## Declaration

```swift
init(snapshotImage: CGImage, presentationFrame: NSRect, candidateRects: [NSValue])
```

## Parameters

- `snapshotImage`: An image that contains the requested text from your view. Create the image using a transparent background and the current rendering attributes for your text.
- `presentationFrame`: A rectangle in the coordinate space of your text view. The system uses this rectangle to place your image precisely over your view’s actual text. Set its size to the size of your snapshot image, and set its origin to the point that allows the system to place your image directly over the text.
- `candidateRects`: An array of [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects, each of which contains an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) in the coordinate space of your text view. Each rectangle contains a bounding rectangle for text that is part of the preview. When applying visual effects, the system adds highlights only to the text in the specified rectangles.

## See Also

### Creating a text preview

- [init(snapshotImage:presentationFrame:)](init%28snapshotimage_presentationframe_%29.md): Creates a text preview using the specified image.

# initWithSnapshotImage:presentationFrame:candidateRects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.

## Declaration

```objectivec
- (instancetype) initWithSnapshotImage:(CGImageRef) snapshotImage presentationFrame:(NSRect) presentationFrame candidateRects:(NSArray<NSValue *> *) candidateRects;
```

## Parameters

- `snapshotImage`: An image that contains the requested text from your view. Create the image using a transparent background and the current rendering attributes for your text.
- `presentationFrame`: A rectangle in the coordinate space of your text view. The system uses this rectangle to place your image precisely over your view’s actual text. Set its size to the size of your snapshot image, and set its origin to the point that allows the system to place your image directly over the text.
- `candidateRects`: An array of [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects, each of which contains an [NSRect](https://developer.apple.com/documentation/foundation/nsrect) in the coordinate space of your text view. Each rectangle contains a bounding rectangle for text that is part of the preview. When applying visual effects, the system adds highlights only to the text in the specified rectangles.

## See Also

### Creating a text preview

- [initWithSnapshotImage:presentationFrame:](init%28snapshotimage_presentationframe_%29.md): Creates a text preview using the specified image.
