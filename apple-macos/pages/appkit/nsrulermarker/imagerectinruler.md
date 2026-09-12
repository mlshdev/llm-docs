> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/imagerectinruler](https://developer.apple.com/documentation/appkit/nsrulermarker/imagerectinruler)

# imageRectInRuler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle occupied by the receiver’s image.

## Declaration

```swift
var imageRectInRuler: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle occupied by the receiver’s image, in the ruler view’s coordinate system, accounting for whether the ruler view’s coordinate system is flipped.

## See Also

### Related Documentation

- [draw(\_:)](draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.

### Setting the image

- [image](image.md): The receiver’s image.
- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.

# imageRectInRuler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle occupied by the receiver’s image.

## Declaration

```objectivec
@property (readonly) NSRect imageRectInRuler;
```

<a id="Discussion"></a>

## Discussion

The rectangle occupied by the receiver’s image, in the ruler view’s coordinate system, accounting for whether the ruler view’s coordinate system is flipped.

## See Also

### Related Documentation

- [drawRect:](draw%28__%29.md): Draws the receiver’s image that appears in the supplied rectangle.

### Setting the image

- [image](image.md): The receiver’s image.
- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.
