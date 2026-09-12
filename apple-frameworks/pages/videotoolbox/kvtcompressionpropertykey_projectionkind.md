> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_projectionkind](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_projectionkind)

# kVTCompressionPropertyKey_ProjectionKind (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A value that indicates the projection kind.

## Declaration

```swift
let kVTCompressionPropertyKey_ProjectionKind: CFString
```

<a id="Discussion"></a>

## Discussion

The value will be set on the format description (`kCMFormatDescriptionExtension_ProjectionKind`) for output samples and may affect the decoded frame presentation.

## Topics

### Projection Kinds

- [kVTProjectionKind_Rectilinear](kvtprojectionkind_rectilinear.md)
- [kVTProjectionKind_Equirectangular](kvtprojectionkind_equirectangular.md)
- [kVTProjectionKind_HalfEquirectangular](kvtprojectionkind_halfequirectangular.md)
- [kVTProjectionKind_ParametricImmersive](kvtprojectionkind_parametricimmersive.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.

# kVTCompressionPropertyKey_ProjectionKind (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A value that indicates the projection kind.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ProjectionKind;
```

<a id="Discussion"></a>

## Discussion

The value will be set on the format description (`kCMFormatDescriptionExtension_ProjectionKind`) for output samples and may affect the decoded frame presentation.

## Topics

### Projection Kinds

- [kVTProjectionKind_Rectilinear](kvtprojectionkind_rectilinear.md)
- [kVTProjectionKind_Equirectangular](kvtprojectionkind_equirectangular.md)
- [kVTProjectionKind_HalfEquirectangular](kvtprojectionkind_halfequirectangular.md)
- [kVTProjectionKind_ParametricImmersive](kvtprojectionkind_parametricimmersive.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.
