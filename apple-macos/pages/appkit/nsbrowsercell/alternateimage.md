> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/alternateimage](https://developer.apple.com/documentation/appkit/nsbrowsercell/alternateimage)

# alternateImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The browser cell’s image for the highlighted state.

## Declaration

```swift
var alternateImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The image is drawn vertically centered on the left edge of the browser cell.

Note that the image is drawn at the given size of the image. `NSBrowserCell` does not set the size of the image, nor does it clip the drawing of the image. Make sure this image is the correct size for drawing in the browser cell.

When the value of this property is `nil`, it removes the alternate image for the browser cell.

## See Also

### Configuring Browser Cells

- [image](image.md): The browser cell’s image.

# alternateImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The browser cell’s image for the highlighted state.

## Declaration

```objectivec
@property (strong, nullable) NSImage * alternateImage;
```

<a id="Discussion"></a>

## Discussion

The image is drawn vertically centered on the left edge of the browser cell.

Note that the image is drawn at the given size of the image. `NSBrowserCell` does not set the size of the image, nor does it clip the drawing of the image. Make sure this image is the correct size for drawing in the browser cell.

When the value of this property is `nil`, it removes the alternate image for the browser cell.

## See Also

### Configuring Browser Cells

- [image](image.md): The browser cell’s image.
