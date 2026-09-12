> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_stereocamerabaseline](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_stereocamerabaseline)

# kVTCompressionPropertyKey_StereoCameraBaseline (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that specifies the distance between centers of the lenses of the camera system.

## Declaration

```swift
let kVTCompressionPropertyKey_StereoCameraBaseline: CFString
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_StereoCameraBaseline](../coremedia/kcmformatdescriptionextension_stereocamerabaseline.md) format description on the output samples. The value is an unsigned 32-bit integer in micrometers, or thousandths of a millimeter (for example 63123 micrometers is 63.123 millimeters).

This property is optional. Only specify a value if you know the specific distance.

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.

# kVTCompressionPropertyKey_StereoCameraBaseline (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that specifies the distance between centers of the lenses of the camera system.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_StereoCameraBaseline;
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_StereoCameraBaseline](../coremedia/kcmformatdescriptionextension_stereocamerabaseline.md) format description on the output samples. The value is an unsigned 32-bit integer in micrometers, or thousandths of a millimeter (for example 63123 micrometers is 63.123 millimeters).

This property is optional. Only specify a value if you know the specific distance.

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.
