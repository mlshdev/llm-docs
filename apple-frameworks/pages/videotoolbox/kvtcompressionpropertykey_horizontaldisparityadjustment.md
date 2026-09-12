> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_horizontaldisparityadjustment](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_horizontaldisparityadjustment)

# kVTCompressionPropertyKey_HorizontalDisparityAdjustment (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.

## Declaration

```swift
let kVTCompressionPropertyKey_HorizontalDisparityAdjustment: CFString
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_HorizontalDisparityAdjustment](../coremedia/kcmformatdescriptionextension_horizontaldisparityadjustment.md) format description on the output samples. The value is a 32-bit integer, measured over the range of `-10000` to `10000`, that maps to a uniform range of `-1.0` to `1.0`.

This property is optional. Only specify a disparity adjustment, including 0, when you know the specific value.

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.

# kVTCompressionPropertyKey_HorizontalDisparityAdjustment (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_HorizontalDisparityAdjustment;
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_HorizontalDisparityAdjustment](../coremedia/kcmformatdescriptionextension_horizontaldisparityadjustment.md) format description on the output samples. The value is a 32-bit integer, measured over the range of `-10000` to `10000`, that maps to a uniform range of `-1.0` to `1.0`.

This property is optional. Only specify a disparity adjustment, including 0, when you know the specific value.

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.
