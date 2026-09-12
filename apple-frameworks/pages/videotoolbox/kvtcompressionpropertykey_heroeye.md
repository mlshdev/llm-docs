> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_heroeye](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_heroeye)

# kVTCompressionPropertyKey_HeroEye (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that indicates which eye is the primary eye when rendering in 2D.

## Declaration

```swift
let kVTCompressionPropertyKey_HeroEye: CFString
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_HeroEye](../coremedia/kcmformatdescriptionextension_heroeye.md) format description on the output samples. Supported values are [kCMFormatDescriptionHeroEye_Left](../coremedia/kcmformatdescriptionheroeye_left.md) or [kCMFormatDescriptionHeroEye_Right](../coremedia/kcmformatdescriptionheroeye_right.md).

## Topics

### Hero Eye Values

- [kVTHeroEye_Left](kvtheroeye_left.md)
- [kVTHeroEye_Right](kvtheroeye_right.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.

# kVTCompressionPropertyKey_HeroEye (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A value that indicates which eye is the primary eye when rendering in 2D.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_HeroEye;
```

<a id="Discussion"></a>

## Discussion

This property sets a value for the [kCMFormatDescriptionExtension_HeroEye](../coremedia/kcmformatdescriptionextension_heroeye.md) format description on the output samples. Supported values are [kCMFormatDescriptionHeroEye_Left](../coremedia/kcmformatdescriptionheroeye_left.md) or [kCMFormatDescriptionHeroEye_Right](../coremedia/kcmformatdescriptionheroeye_right.md).

## Topics

### Hero Eye Values

- [kVTHeroEye_Left](kvtheroeye_left.md)
- [kVTHeroEye_Right](kvtheroeye_right.md)

## See Also

### Video Extended Usage (VEXU) Signaling

- [kVTCompressionPropertyKey_HasLeftStereoEyeView](kvtcompressionpropertykey_hasleftstereoeyeview.md)
- [kVTCompressionPropertyKey_HasRightStereoEyeView](kvtcompressionpropertykey_hasrightstereoeyeview.md)
- [kVTCompressionPropertyKey_HorizontalDisparityAdjustment](kvtcompressionpropertykey_horizontaldisparityadjustment.md): A value that indicates a relative shift of the left and right images, which changes the zero parallax plane.
- [kVTCompressionPropertyKey_HorizontalFieldOfView](kvtcompressionpropertykey_horizontalfieldofview.md)
- [kVTCompressionPropertyKey_ProjectionKind](kvtcompressionpropertykey_projectionkind.md): A value that indicates the projection kind.
- [kVTCompressionPropertyKey_StereoCameraBaseline](kvtcompressionpropertykey_stereocamerabaseline.md): A value that specifies the distance between centers of the lenses of the camera system.
- [kVTCompressionPropertyKey_ViewPackingKind](kvtcompressionpropertykey_viewpackingkind.md): A value that indicates the view packing kind.
