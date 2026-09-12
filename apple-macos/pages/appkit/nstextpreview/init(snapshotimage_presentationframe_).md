> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview/init(snapshotimage:presentationframe:)](https://developer.apple.com/documentation/appkit/nstextpreview/init(snapshotimage:presentationframe:))

# init(snapshotImage:presentationFrame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 15.2+

Creates a text preview using the specified image.

## Declaration

```swift
convenience init(snapshotImage: CGImage, presentationFrame: NSRect)
```

## Parameters

- `snapshotImage`: An image that contains the requested text from your view. Create the image using a transparent background and the current rendering attributes for your text.
- `presentationFrame`: A rectangle in your frame’s coordinate space. The system uses this rectangle to place your image precisely over your view’s actual text. Set its size to the size of your snapshot image, and set its origin to the point that allows the system to place your image directly over the text.

## See Also

### Creating a text preview

- [init(snapshotImage:presentationFrame:candidateRects:)](init%28snapshotimage_presentationframe_candidaterects_%29.md): Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.

# initWithSnapshotImage:presentationFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Creates a text preview using the specified image.

## Declaration

```objectivec
- (instancetype) initWithSnapshotImage:(CGImageRef) snapshotImage presentationFrame:(NSRect) presentationFrame;
```

## Parameters

- `snapshotImage`: An image that contains the requested text from your view. Create the image using a transparent background and the current rendering attributes for your text.
- `presentationFrame`: A rectangle in your frame’s coordinate space. The system uses this rectangle to place your image precisely over your view’s actual text. Set its size to the size of your snapshot image, and set its origin to the point that allows the system to place your image directly over the text.

## See Also

### Creating a text preview

- [initWithSnapshotImage:presentationFrame:candidateRects:](init%28snapshotimage_presentationframe_candidaterects_%29.md): Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.
