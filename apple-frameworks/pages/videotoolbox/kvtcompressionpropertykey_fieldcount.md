> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_fieldcount](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_fieldcount)

# kVTCompressionPropertyKey_FieldCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).

## Declaration

```swift
let kVTCompressionPropertyKey_FieldCount: CFString
```

<a id="Discussion"></a>

## Discussion

The field count is set on the format description for output samples, and may affect source frame scaling. `NULL` is a valid value for this property.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

# kVTCompressionPropertyKey_FieldCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_FieldCount;
```

<a id="Discussion"></a>

## Discussion

The field count is set on the format description for output samples, and may affect source frame scaling. `NULL` is a valid value for this property.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.
