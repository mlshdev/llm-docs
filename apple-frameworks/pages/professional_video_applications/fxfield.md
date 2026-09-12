> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxfield](https://developer.apple.com/documentation/professional_video_applications/fxfield)

# FxField (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+

Constants used to identify a field.

## Declaration

```swift
typealias FxField = Int
```

<a id="discussion"></a>

## Discussion

Prior to FxPlug 1.2, this type was used to identify field order. As of FxPlug 1.2, it is used to identify the field of an image.

## Topics

### Constants

- [kFxField_NONE](kfxfield_none.md): Full frame, progressive (no fields).
- [kFxField_UPPER](kfxfield_upper.md): Upper field.
- [kFxField_LOWER](kfxfield_lower.md): Lower field.

## See Also

### Data types

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxRect](fxrect.md): A 2D axis-aligned rectangle with integer coordinates.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.

# FxField (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

Constants used to identify a field.

## Declaration

```objectivec
typedef NSUInteger FxField;
```

<a id="discussion"></a>

## Discussion

Prior to FxPlug 1.2, this type was used to identify field order. As of FxPlug 1.2, it is used to identify the field of an image.

## Topics

### Constants

- [kFxField_NONE](kfxfield_none.md): Full frame, progressive (no fields).
- [kFxField_UPPER](kfxfield_upper.md): Upper field.
- [kFxField_LOWER](kfxfield_lower.md): Lower field.

## See Also

### Data types

- [FxDepth](fxdepth.md): Constants used to identify bit depth.
- [FxFieldOrder](fxfieldorder.md): Constants used to identify the field order of an image stream.
- [FxPoint2D](fxpoint2d.md): A 2D point representation.
- [FxPoint3D](fxpoint3d.md): A 3D point representation
- [FxQuality](fxquality.md): Constants used to identify rendering quality.
- [FxRect](fxrect.md): A 2D axis-aligned rectangle with integer coordinates.
- [FxSize](fxsize.md): A structure to store width and height values.
- [FxDrawingCoordinates](fxdrawingcoordinates.md): Constants used to identify coordinate spaces.
- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageColorInfo](fximagecolorinfo.md): Identifies some color properties of an FxImage instance. These include the color space, gamma level, and, in the case of `YCbCr` images, the color matrix for conversion to RGB.
