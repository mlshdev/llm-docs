> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/image](https://developer.apple.com/documentation/appkit/nsrulermarker/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s image.

## Declaration

```swift
var image: NSImage { get set }
```

<a id="Discussion"></a>

## Discussion

The image used to draw the marker must be appropriate for the orientation of the ruler. Markers may need to look different on a horizontal ruler than on a vertical ruler, and the ruler view neither scales nor rotates the images.

## See Also

### Setting the image

- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s image.

## Declaration

```objectivec
@property (strong) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

The image used to draw the marker must be appropriate for the orientation of the ruler. Markers may need to look different on a horizontal ruler than on a vertical ruler, and the ruler view neither scales nor rotates the images.

## See Also

### Setting the image

- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.
