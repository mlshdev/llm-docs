> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_aspectratio16x9](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_aspectratio16x9)

# kVTCompressionPropertyKey_AspectRatio16x9 (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the DV video stream should have the 16x9 flag set.

## Declaration

```swift
let kVTCompressionPropertyKey_AspectRatio16x9: CFString
```

<a id="Discussion"></a>

## Discussion

This property is supported by the DV25/50 family of encoders.

When false, the picture aspect ratio is 4:3. When true, the picture aspect ratio is 16:9. Either way, a fixed aspect ratio is used (the specific value depends on whether the format is NTSC or PAL).

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

# kVTCompressionPropertyKey_AspectRatio16x9 (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the DV video stream should have the 16x9 flag set.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_AspectRatio16x9;
```

<a id="Discussion"></a>

## Discussion

This property is supported by the DV25/50 family of encoders.

When false, the picture aspect ratio is 4:3. When true, the picture aspect ratio is 16:9. Either way, a fixed aspect ratio is used (the specific value depends on whether the format is NTSC or PAL).

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.
