> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/setrotationangle(_:center:)](https://developer.apple.com/documentation/quartz/ikimageview/setrotationangle(_:center:))

# setRotationAngle(\_:center:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the rotation angle at the provided origin.

## Declaration

```swift
func setRotationAngle(_ rotationAngle: CGFloat, center centerPoint: NSPoint)
```

## Parameters

- `rotationAngle`: The rotation angle to apply to the image.
- `centerPoint`: The point that specifies the origin of the rotation angle.

## See Also

### Related Documentation

- [rotationAngle](rotationangle.md): Specifies the rotation angle for the image view.

### Manipulating the Image in a View

- [setImageZoomFactor(\_:center:)](setimagezoomfactor%28__center_%29.md): Sets the zoom factor at the provided origin.
- [zoomImageToFit(\_:)](zoomimagetofit%28__%29.md): Zooms the image so that it fits in the image view.
- [zoomImageToActualSize(\_:)](zoomimagetoactualsize%28__%29.md): Zooms the image so that it is displayed using its true size.
- [zoomImage(to:)](zoomimage%28to_%29.md): Zooms the image so that it fits in the specified rectangle.
- [zoomIn(\_:)](zoomin%28__%29.md): Zooms the image in.
- [zoomOut(\_:)](zoomout%28__%29.md): Zooms the image out.
- [crop(\_:)](crop%28__%29.md): Crops the image using the current selection.
- [flipImageHorizontal(\_:)](flipimagehorizontal%28__%29.md): Flips an image along the horizontal axis.
- [flipImageVertical(\_:)](flipimagevertical%28__%29.md): Flips an image along the vertical axis.
- [rotateImageLeft(\_:)](rotateimageleft%28__%29.md): Rotates the image left (counter-clockwise).
- [rotateImageRight(\_:)](rotateimageright%28__%29.md): Rotates the image right (clockwise).

# setRotationAngle:centerPoint: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the rotation angle at the provided origin.

## Declaration

```objectivec
- (void) setRotationAngle:(CGFloat) rotationAngle centerPoint:(NSPoint) centerPoint;
```

## Parameters

- `rotationAngle`: The rotation angle to apply to the image.
- `centerPoint`: The point that specifies the origin of the rotation angle.

## See Also

### Related Documentation

- [rotationAngle](rotationangle.md): Specifies the rotation angle for the image view.

### Manipulating the Image in a View

- [setImageZoomFactor:centerPoint:](setimagezoomfactor%28__center_%29.md): Sets the zoom factor at the provided origin.
- [zoomImageToFit:](zoomimagetofit%28__%29.md): Zooms the image so that it fits in the image view.
- [zoomImageToActualSize:](zoomimagetoactualsize%28__%29.md): Zooms the image so that it is displayed using its true size.
- [zoomImageToRect:](zoomimage%28to_%29.md): Zooms the image so that it fits in the specified rectangle.
- [zoomIn:](zoomin%28__%29.md): Zooms the image in.
- [zoomOut:](zoomout%28__%29.md): Zooms the image out.
- [crop:](crop%28__%29.md): Crops the image using the current selection.
- [flipImageHorizontal:](flipimagehorizontal%28__%29.md): Flips an image along the horizontal axis.
- [flipImageVertical:](flipimagevertical%28__%29.md): Flips an image along the vertical axis.
- [rotateImageLeft:](rotateimageleft%28__%29.md): Rotates the image left (counter-clockwise).
- [rotateImageRight:](rotateimageright%28__%29.md): Rotates the image right (clockwise).
