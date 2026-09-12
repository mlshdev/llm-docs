> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtscalingmode_normal](https://developer.apple.com/documentation/videotoolbox/kvtscalingmode_normal)

# kVTScalingMode_Normal (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The full width and height of the source image buffer is stretched to the full width and height of the destination image buffer.

## Declaration

```swift
let kVTScalingMode_Normal: CFString
```

<a id="Discussion"></a>

## Discussion

The source image buffer’s clean aperture and pixel aspect ratio attachments are stretched the same way as the image with the image, and attached to the destination image buffer.This is the default scaling mode.

## See Also

### Scaling Modes

- [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md): The source image buffer’s clean aperture is scaled to the destination clean aperture.
- [kVTScalingMode_Letterbox](kvtscalingmode_letterbox.md): The source image buffer’s clean aperture is scaled to a rectangle fitted inside the destination clean aperture that preserves the source picture aspect ratio.
- [kVTScalingMode_Trim](kvtscalingmode_trim.md): The source image buffer’s clean aperture is scaled to a rectangle that completely fills the destination clean aperture and preserves the source picture aspect ratio.

# kVTScalingMode_Normal (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The full width and height of the source image buffer is stretched to the full width and height of the destination image buffer.

## Declaration

```objectivec
extern CFStringRef const kVTScalingMode_Normal;
```

<a id="Discussion"></a>

## Discussion

The source image buffer’s clean aperture and pixel aspect ratio attachments are stretched the same way as the image with the image, and attached to the destination image buffer.This is the default scaling mode.

## See Also

### Scaling Modes

- [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md): The source image buffer’s clean aperture is scaled to the destination clean aperture.
- [kVTScalingMode_Letterbox](kvtscalingmode_letterbox.md): The source image buffer’s clean aperture is scaled to a rectangle fitted inside the destination clean aperture that preserves the source picture aspect ratio.
- [kVTScalingMode_Trim](kvtscalingmode_trim.md): The source image buffer’s clean aperture is scaled to a rectangle that completely fills the destination clean aperture and preserves the source picture aspect ratio.
