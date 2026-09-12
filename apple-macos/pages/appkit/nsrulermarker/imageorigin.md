> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/imageorigin](https://developer.apple.com/documentation/appkit/nsrulermarker/imageorigin)

# imageOrigin (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.

## Declaration

```swift
var imageOrigin: NSPoint { get set }
```

<a id="Discussion"></a>

## Discussion

For a horizontal ruler, the x coordinate of the image origin is aligned with the location of the marker, and the y coordinate lies on the baseline of the ruler. For vertical rulers, the y coordinate of the image origin is the location, and the x coordinate lies on the baseline.

## See Also

### Related Documentation

- [markerLocation](markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Setting the image

- [image](image.md): The receiver’s image.
- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.

# imageOrigin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.

## Declaration

```objectivec
@property NSPoint imageOrigin;
```

<a id="Discussion"></a>

## Discussion

For a horizontal ruler, the x coordinate of the image origin is aligned with the location of the marker, and the y coordinate lies on the baseline of the ruler. For vertical rulers, the y coordinate of the image origin is the location, and the x coordinate lies on the baseline.

## See Also

### Related Documentation

- [markerLocation](markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Setting the image

- [image](image.md): The receiver’s image.
- [imageRectInRuler](imagerectinruler.md): The rectangle occupied by the receiver’s image.
- [thicknessRequiredInRuler](thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.
