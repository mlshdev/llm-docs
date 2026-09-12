> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_progressivescan](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_progressivescan)

# kVTCompressionPropertyKey_ProgressiveScan (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the DV video stream should have the progressive flag set.

## Declaration

```swift
let kVTCompressionPropertyKey_ProgressiveScan: CFString
```

<a id="Discussion"></a>

## Discussion

This property is supported by the DV25/50 family of encoders. If false, content is encoded as interlaced. If true, content is encoded as progressive. The value of this property fixes the [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md) and [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md) properties.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.

# kVTCompressionPropertyKey_ProgressiveScan (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the DV video stream should have the progressive flag set.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_ProgressiveScan;
```

<a id="Discussion"></a>

## Discussion

This property is supported by the DV25/50 family of encoders. If false, content is encoded as interlaced. If true, content is encoded as progressive. The value of this property fixes the [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md) and [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md) properties.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
