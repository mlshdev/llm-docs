> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtscalingmode_letterbox](https://developer.apple.com/documentation/videotoolbox/kvtscalingmode_letterbox)

# kVTScalingMode_Letterbox (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The source image buffer’s clean aperture is scaled to a rectangle fitted inside the  destination clean aperture that preserves the source picture aspect ratio.

## Declaration

```swift
let kVTScalingMode_Letterbox: CFString
```

<a id="Discussion"></a>

## Discussion

The remainder of the destination image buffer is filled with black. If a destination pixel aspect ratio is not set, the source image’s pixel aspect ratio is used. The pixel aspect ratio used is set on the destination image buffer.

## See Also

### Scaling Modes

- [kVTScalingMode_Normal](kvtscalingmode_normal.md): The full width and height of the source image buffer is stretched to the full width and height of the destination image buffer.
- [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md): The source image buffer’s clean aperture is scaled to the destination clean aperture.
- [kVTScalingMode_Trim](kvtscalingmode_trim.md): The source image buffer’s clean aperture is scaled to a rectangle that completely fills the destination clean aperture and preserves the source picture aspect ratio.

# kVTScalingMode_Letterbox (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The source image buffer’s clean aperture is scaled to a rectangle fitted inside the  destination clean aperture that preserves the source picture aspect ratio.

## Declaration

```objectivec
extern CFStringRef const kVTScalingMode_Letterbox;
```

<a id="Discussion"></a>

## Discussion

The remainder of the destination image buffer is filled with black. If a destination pixel aspect ratio is not set, the source image’s pixel aspect ratio is used. The pixel aspect ratio used is set on the destination image buffer.

## See Also

### Scaling Modes

- [kVTScalingMode_Normal](kvtscalingmode_normal.md): The full width and height of the source image buffer is stretched to the full width and height of the destination image buffer.
- [kVTScalingMode_CropSourceToCleanAperture](kvtscalingmode_cropsourcetocleanaperture.md): The source image buffer’s clean aperture is scaled to the destination clean aperture.
- [kVTScalingMode_Trim](kvtscalingmode_trim.md): The source image buffer’s clean aperture is scaled to a rectangle that completely fills the destination clean aperture and preserves the source picture aspect ratio.
