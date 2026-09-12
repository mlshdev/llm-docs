> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxrect](https://developer.apple.com/documentation/professional_video_applications/fxrect)

# FxRect (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 3.1+

A 2D axis-aligned rectangle with integer coordinates.

## Declaration

```swift
struct FxRect
```

## Topics

### Constants

- [init()](fxrect/init%28%29.md)
- [init(left:bottom:right:top:)](fxrect/init%28left_bottom_right_top_%29.md)

### Properties

- [bottom](fxrect/bottom.md): The thickness, in pixels, of the bottom-edge processing region of the `edgeWidths` property.
- [left](fxrect/left.md): The thickness, in pixels, of the left-edge processing region of the `edgeWidths` property.
- [right](fxrect/right.md): The thickness, in pixels, of the right-edge processing region of the `edgeWidths` property.
- [top](fxrect/top.md): The thickness, in pixels, of the top-edge processing region of the `edgeWidths` property.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data types

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxField](fxfield.md): Constants used to identify a field.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

# FxRect (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Structure

A 2D axis-aligned rectangle with integer coordinates.

## Declaration

```objectivec
typedef struct FxRect { ... } FxRect;
```

## Topics

### Properties

- [bottom](fxrect/bottom.md): The thickness, in pixels, of the bottom-edge processing region of the `edgeWidths` property.
- [left](fxrect/left.md): The thickness, in pixels, of the left-edge processing region of the `edgeWidths` property.
- [right](fxrect/right.md): The thickness, in pixels, of the right-edge processing region of the `edgeWidths` property.
- [top](fxrect/top.md): The thickness, in pixels, of the top-edge processing region of the `edgeWidths` property.

## See Also

### Data types

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxField](fxfield.md): Constants used to identify a field.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.
