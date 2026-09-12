> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_viewpackingkind](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_viewpackingkind)

# kVTCompressionPropertyKey_ViewPackingKind (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A value that indicates the view packing kind.

## Declaration

```swift
let kVTCompressionPropertyKey_ViewPackingKind: CFString
```

<a id="Discussion"></a>

## Discussion

The value will be set on the format description (`kCMFormatDescriptionExtension_ViewPackingKind`) for output samples and may affect the decoded frame presentation.

## Topics

### View Packing Kinds

- [kVTViewPackingKind_SideBySide](kvtviewpackingkind_sidebyside.md)
- [kVTViewPackingKind_OverUnder](kvtviewpackingkind_overunder.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.

# kVTCompressionPropertyKey_ViewPackingKind (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A value that indicates the view packing kind.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ViewPackingKind;
```

<a id="Discussion"></a>

## Discussion

The value will be set on the format description (`kCMFormatDescriptionExtension_ViewPackingKind`) for output samples and may affect the decoded frame presentation.

## Topics

### View Packing Kinds

- [kVTViewPackingKind_SideBySide](kvtviewpackingkind_sidebyside.md)
- [kVTViewPackingKind_OverUnder](kvtviewpackingkind_overunder.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HeroEye](kvtcompressionpropertykey_heroeye.md): A value that indicates which eye is the primary eye when rendering in 2D.
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
